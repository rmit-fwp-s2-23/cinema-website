import { getUser } from "../../Repository/Repository.js";
import "./Review.css";
import StarRating from "../../components/Rate/StarRating.js";
import React, { useState } from "react";
import Button from "../../components/nav/Button/Button.js";
import { useNavigate } from "react-router-dom";
import { addReview, createReview } from "./Repository.js";

function Review() {
  const filmTitle = "Tom and Jerry";
  const user = getUser();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [fields, setFields] = useState({ rating: 0, textarea: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setFields((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fields.rating = rating;
    createReview(filmTitle, fields, user.username);
    navigate("/");
    return;
  }

  return (
    <div className="review-container">
      <div>
        <h1>Review</h1>
      </div>
      <div className="review-film">Tom and Jerry</div>
      <div className="review-info">
        {" "}
        You review as <span>{user.username}</span>:
      </div>
      <div className="review-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button" 
              name="rating"
              value={fields.rating}
              className={index <= ((rating && hover) || hover) ? "on" : "off"}
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
          value={fields.textarea}
          className="review-content-textarea"
          placeholder="Share details of your own experience watching this movie"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="review-buttons">
        <Button
          style={{ backgroundColor: "grey" }}
          onClick={() => {
            if (window.confirm("Are you sure you wish to cancel this form ?")) {
              navigate("/");
            }
          }}
          children="Cancel"
        ></Button>
        <Button type="Submit" children="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Review;
