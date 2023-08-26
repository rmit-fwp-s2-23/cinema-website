import "./Post.css";
function Post(props) {
  return (
    <div className="post-container">
      <div className="post-wrapper">
        <div className="post-title">
          <h1>{props.title}</h1>
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
          <p dangerouslySetInnerHTML={{ __html:props.content }}></p>
        </div>
      </div>
    </div>
  );
}

export default Post;
