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
  const [content, setContent] = useState(post?.content || "");
  const [rating, setRating] = useState(post.rating || "");
  const [hover, setHover] = useState(post.rating || "");

  function handleInputChange(event) {
    setContent(event.target.value);
  }

  function handleUpdateClick(event){
    event.preventDefault();
    const data = {content: content, rating: rating};
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
        <form  onSubmit={handleUpdateClick}>
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
        </form>
      </div>
    </div>
  );
}

export default EditPost;
