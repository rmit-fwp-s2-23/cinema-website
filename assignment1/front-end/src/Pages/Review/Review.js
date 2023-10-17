import "./Review.css";
import "../../components/Rate/StarRating.css";
import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button.js";
import { useNavigate, useLocation } from "react-router-dom";
import Post from "../../components/Post/Post.js";
import { checkSecurity, createSecurity } from "../../Repository/Security.js";
import { createPost, getPostsByFilm } from "../../Repository/post.js";
import { updateRating } from "../../Repository/film.js";
import { getUser } from "../../Repository/user";
function Review() {
  const title = useLocation().state;
  const user = getUser();
  const navigate = useNavigate();
  //set error when user leave feedback null or write over 250 words
  const [errorMessage, setErrorMessage] = useState(null);
  //get the all the reviews of specific movie (with the title)
  const [reviews, setReviews] = useState([]);
  //get the star rating
  const [rating, setRating] = useState(1);
  //get the star rating when user hover over the stars
  const [hover, setHover] = useState(1);
  //get the review content
  const [post, setPost] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const reviewsData = await getPostsByFilm(title);
    setReviews(reviewsData);
  };
  //change handler to get the content of the review
  function handleChange(event) {
    setPost(event.target.value);
  }
  // handle when user enter the submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
    //trim post
    const postTrimmed = post.trim();
    //check if trimmed post blank
    if (postTrimmed === "") {
      setErrorMessage("A post cannot be empty.");
      return;
    }
    //check if trimmed post over 250 words
    if (postTrimmed.length > 600) {
      setErrorMessage("A post cannot exceed 600 words.");
      return;
    }
    // check fake post
    if (!checkSecurity(title, user)) {
      setErrorMessage("Wait for 30 seconds for the next review");
      return;
    }
    //create a data object about review to store in the local storage
    const data = {
      title: title,
      content: post,
      rating: rating,
      username: user.username,
    };
    // create a review in localStorage
    await createPost(data);
    await updateRating(title);
    await fetchReviews();
    // create a security check of this account in localStorage
    createSecurity(title, user);
    //add a new review of this film after user submit his/her review
    //set the post input blank
    setPost("");
    //set error message blank
    setErrorMessage("");
    //set the start rating to 1
    setRating(1);
    //set the hover rating to 1
    setHover(1);
    return;
  };

  return (
    <div className="review-container">
      <div className="review-feedback">
        <div>
          <h1>Review</h1>
        </div>
        <div className="review-film">{title}</div>
        <div>
          {/*check if a guest or a logged in user looking at review of a film*/}
          {user !== null ? (
            <div>
              <div className="review-info">
                {/*announce that you are  viewing the feedback as a logged in user */}
                <p>
                  You review as <span>{user.username}</span>
                </p>
              </div>
              {/*Display the review input (star rating and feedback input)*/}
              <div className="star-rating">
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
                        setRating(1);
                        setHover(1);
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
                  id="review-textarea"
                  name="textarea"
                  value={post}
                  className="review-content-textarea"
                  placeholder="Share details of your own experience watching this movie"
                  onChange={handleChange}
                ></textarea>
              </div>
              {errorMessage !== null && (
                <div className="form-group">
                  <span style={{ color: "red" }}>{errorMessage}</span>
                </div>
              )}
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
              {/*announce that you are  viewing the feedback as a guest */}
              <p>
                You review as <span>Guest</span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="reviews">
        {/*hide the review input and just display all the feedback of this film*/}
        {reviews.length === 0 ? (
          <span>No posts have been submitted.</span>
        ) : (
          reviews.map((review, key) => (
            <Post
              title={review.film.title}
              writer={review.user.username}
              rating={review.rating}
              content={review.content}
              id={key}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Review;
