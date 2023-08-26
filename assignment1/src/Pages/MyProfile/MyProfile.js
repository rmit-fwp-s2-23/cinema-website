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
  const data = getUser();
  const reviews = getReviewsByWritter(data.username);
  const navigate = useNavigate();
  const handleUpdateClick = () => {
    navigate("/editmyprofile");
  };

  const handleDeleteClick = () => {
    deleteReview(data.username);
    deleteUser(data.username);
    removeUser();
    navigate("/login");
  };
  return (
    <div>
      <div className="myprofile-container">
        <h1>My Profile </h1>
        <div className="myprofile-wrapper">
          <div className="myprofile-post">
            {reviews.length === 0 ? (
              <span>No posts have been submitted.</span>
            ) : (
              reviews.map((review) => (
                <Post
                  title={review.filmTitle}
                  rating={review.rating}
                  content={review.post.replace(/___LINE_BREAK___/g, '<br>')}
                />
              ))
            )}
          </div>
          <div className="myprofile-form">
            <div className="myprofile-detail">
              <div className="myprofile-form-member">
                <p>
                  <strong>Username</strong>
                  <span>{data.username}</span>
                </p>
              </div>
              <div className="myprofile-form-member">
                <p>
                  <strong>Password</strong>
                  <span>{data.password}</span>
                </p>
              </div>
              <div className="myprofile-form-member">
                <p>
                  <strong>Email</strong>
                  <span>{data.email}</span>
                </p>
              </div>
              <div className="myprofile-form-member">
                <p>
                  <strong>Joining Date</strong>
                  <span>{data.date}</span>
                </p>
              </div>
            </div>
            <div className="myprofile-button">
              <Button onClick={handleUpdateClick}>Edit</Button>
            </div>
            <div className="myprofile-button">
              <Button
                style={{ backgroundColor: "red" }}
                className="delete-button"
                onClick={() => {
                  if (
                    window.confirm("Are you sure you wish to delete this item?")
                  ) {
                    handleDeleteClick();
                  }
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
