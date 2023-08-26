import "./EditPost.css";
import { getReviewsByWritter } from "../../Pages/Review/Repository";
import { useLocation, useNavigate } from "react-router-dom";
import react, { useState } from "react";
import Button from "../nav/Button/Button";
function EditPost(props) {
  const navigate = useNavigate();
  const data = useLocation().state;
  const [content, setContent] = useState(data.content.replace(/\n/g, "<br />"));
  const [rating, setRating] = useState(data.rating);
  const [hover, setHover] = useState(rating);

  function handleInputChange(event) {
    setContent(event.target.value);
  }
  return (
    <div className="editpost-container">
      <div className="editpost-wrapper">
        <div className="editpost-title">
          <h1>{data.title}</h1>
        </div>
        <div className="editpost-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                name="rating"
                value={rating}
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
        </div>
        <div className="editpost-content">
          <textarea
            type="text"
            name="content"
            value={content}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="myprofile-button">
          <Button type="Submit">Update</Button>
          <Button
            style={{ backgroundColor: "grey" }}
            onClick={() => {
              if (
                window.confirm("Are you sure you wish to cancel this form ?")
              ) {
                navigate("/myprofile");
              }
            }}
            children="Cancel"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
