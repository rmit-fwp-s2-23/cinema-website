import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import { getReviewsByWritter } from "../../Pages/Review/Repository";
import {
  getUser,
  deleteUser,
  removeUser,
} from "../../Repository/Repository.js";
import { useNavigate } from "react-router-dom";
import { deleteReview } from "../Review/Repository";
import Post from "../../components/Post/Post";

function MyProfile() {
  const user = getUser();
  const reviews = getReviewsByWritter(user.username);
  const navigate = useNavigate();
  const handleUpdateClick = () => {
    navigate("/editmyprofile");
  };
  function handleUpdateReviewClick(title, rating, content, id) {
    const data = { title: title, rating: rating, content: content, id: id };
    navigate("/EditPost", { state: data });
  }
  const handleDeleteClick = () => {
    deleteReview(user.username);
    deleteUser(user.username);
    removeUser();
    navigate("/login");
  };
  return (
    <div>
      <div className="myprofile-container">
        <h1>My Profile </h1>
        <div className="myprofile-wrapper">
          <div className="myprofile-form">
            <form>
              <div className="myprofile-detail">
                <div className="myprofile-form-member">
                  <p>
                    <strong>Username: </strong>
                    <span>{user.username}</span>
                  </p>
                </div>
                <div className="myprofile-form-member">
                  <p>
                    <strong>Password: </strong>
                    <span>{user.password}</span>
                  </p>
                </div>
                <div className="myprofile-form-member">
                  <p>
                    <strong>Email: </strong>
                    <span>{user.email}</span>
                  </p>
                </div>
                <div className="myprofile-form-member">
                  <p>
                    <strong>Joining Date: </strong>
                    <span>{user.date}</span>
                  </p>
                </div>
              </div>

              <div className="myprofile-button"></div>
              <div className="myprofile-button">
                <Button onClick={handleUpdateClick}>Edit</Button>
                <Button
                  style={{ backgroundColor: "red" }}
                  className="delete-button"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this item?"
                      )
                    ) {
                      handleDeleteClick();
                    }
                  }}
                >
                  Delete
                </Button>
              </div>
            </form>
          </div>
          <div className="myprofile-post">
            {reviews.length === 0 ? (
              <span>No posts have been submitted.</span>
            ) : (
              reviews.map((review, key) => (
                <div>
                  <Post
                    title={review.title}
                    rating={review.rating}
                    content={review.content.replace(
                      /___LINE_BREAK___/g,
                      "<br />"
                    )}
                    id={key}
                  />
                  <div className="myprofile-button">
                    <Button
                      onClick={() =>
                        handleUpdateReviewClick(
                          review.title,
                          review.rating,
                          review.content,
                          key
                        )
                      }
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
