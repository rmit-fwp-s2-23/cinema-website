import "./Post.css";
import Button from "../nav/Button/Button";
import { useNavigate } from "react-router-dom";
function Post(props) {
  const navigate = useNavigate();
  const data = {
    title: props.title,
    rating: props.rating,
    content: props.content,
    id: props.id,
  };
  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-title">
          <h1>
            {props.id}: {props.title}
          </h1>
        </div>
        <div className="post-rating">
          {[...Array(props.rating)].map(() => {
            return (
              <button type="button" name="rating">
                <span className="star" style={{ color: "gold" }}>
                  &#9733;
                </span>
              </button>
            );
          })}
        </div>
        <div className="post-content">
          <pre style={{fontSize : "1rem"}}>{props.content}</pre>
        </div>
      </div>
    </div>
  );
}

export default Post;
