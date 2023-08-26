import { getUser } from "../../Repository/Repository.js";
import "./Review.css";
import StarRating from "../../components/Rate/StarRating.js";
import React, { useState } from "react";
import Button from "../../components/nav/Button/Button.js";
import { useNavigate, useLocation } from "react-router-dom";
import { getReviewsByTitle, createReview } from "./Repository.js";
import Post from "../../components/Post/Post.js";

function Review() {
  const title = useLocation().state;
  const user = getUser();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(getReviewsByTitle(title));
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [post, setPost] = useState("");
  function handleChange(event) {
    setPost(event.target.value);
    console.log(title);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = { content: post, rating: rating };
    if (user !== null) {
      createReview(title, data, user.username);
    }
    setReviews(getReviewsByTitle(title));
    setPost("");
    setRating(0);
    setHover(0);
    return;
  }

  return (
    <div className="review-container">
      <div className="review-feedback">
        <div>
          <h1>Review</h1>
        </div>
        <div className="review-film">{title}</div>
        <div>
          {user !== null ? (
            <div>
              <div className="review-info">
                <p>
                  You review as <span>{user.username}</span>{" "}
                </p>
              </div>
              <div className="review-rating">
                {[...Array(5)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      name="rating"
                      value={rating}
                      className={
                        index <= ((rating && hover) || hover) ? "on" : "off"
                      }
                      onClick={() => setRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(rating)}
                      onDoubleClick={() => {
                        setRating(0);
                        setHover(0);
                      }}
                    >
                      <span className="star">&#9733;</span>
                    </button>
                  );
                })}
                <p>You rate {rating} stars</p>
              </div>
              <div className="review-content">
                <textarea
                  name="textarea"
                  value={post}
                  className="review-content-textarea"
                  placeholder="Share details of your own experience watching this movie"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="review-buttons">
                <Button
                  style={{ backgroundColor: "grey" }}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to cancel this form ?"
                      )
                    ) {
                      navigate("/");
                    }
                  }}
                  children="Cancel"
                ></Button>
                <Button
                  type="Submit"
                  children="Submit"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          ) : (
            <div className="review-info">
              <p>
                You review as <span>Guest</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="reviews">
        {reviews.length === 0 ? (
          <span>No posts have been submitted.</span>
        ) : (
          reviews.map((review) => (
            <Post
              title={review.filmTitle}
              rating={review.rating}
              content={review.content.replace(/___LINE_BREAK___/g, "<br />")}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Review;
