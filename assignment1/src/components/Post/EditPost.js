import "./EditPost.css";
import { changeReview } from "../../Pages/Review/Repository";
import { useLocation, useNavigate } from "react-router-dom";
import react, { useState } from "react";
import Button from "../nav/Button/Button";
import { getUser } from "../../Repository/Repository";

function EditPost() {
  const user = getUser();
  const navigate = useNavigate();
  const post = useLocation().state;
  const [errorMessage, setErrorMessage] = useState(null);
  const [content, setContent] = useState(post?.content || "");
  const [rating, setRating] = useState(post?.rating || 1);
  const [hover, setHover] = useState(post?.rating || 1);

  function handleInputChange(event) {
    setContent(event.target.value);
  }

  function handleUpdateClick(event) {
    event.preventDefault();
    const postTrimmed = content.trim();
    if (postTrimmed === "") {
      setErrorMessage("A post cannot be empty.");
      return;
    }
    if (postTrimmed.length > 250) {
      setErrorMessage("A post cannot exceed 250 words.");
      return;
    }
    const data = { content: content, rating: rating };
    changeReview(post.id, data);
    navigate("/myprofile");
    return;
  }
  return (
    <div className="editpost-container">
      <div className="editpost-wrapper">
        <div className="editpost-title">
          <h1>{post.title}</h1>
        </div>
        <form>
          <div className="editpost-rating">
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
          <div className="editpost-content">
            <textarea
              type="text"
              name="content"
              value={content}
              onChange={handleInputChange}
              required
            >
              <pre>{content}</pre>
            </textarea>
          </div>
          {errorMessage !== null && (
            <div className="form-group">
              <span style={{ color: "red" }}>{errorMessage}</span>
            </div>
          )}
          <div className="myprofile-button">
            <Button type="Submit" onClick={handleUpdateClick}>
              Update
            </Button>
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
        </form>
      </div>
    </div>
  );
}

export default EditPost;
