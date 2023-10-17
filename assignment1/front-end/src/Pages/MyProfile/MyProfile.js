import "./MyProfile.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { deleteSecurity } from "../../Repository/Security";
import Post from "../../components/Post/Post";
import {useState, useEffect} from 'react';
import { getUser, deleteUser, removeUser } from "../../Repository/user";
import { getPosts, deletePost } from "../../Repository/post";
import { updateRating } from "../../Repository/film";
function MyProfile() {
  const navigate = useNavigate();
  //get the user from local storage
  const user = getUser();
  const [reviews, setReviews] = useState([]);

  //click the edit button which will direct to edit profile
  const handleUpdateClick = () => {
    navigate("/editmyprofile");
  };

  const fetchReviews = async () =>{
    const reviewsData = await getPosts(user.username);
    setReviews(reviewsData);
  }

  useEffect(()=> {
    fetchReviews();
  },[]);

  //this change handler will direct to edit a specific post
  function handleUpdateReviewClick(review) {
    navigate("/EditPost", { state: review });
  }

  async function handleRemoveReviewClick(review){
    await deletePost(review.post_id);
    await fetchReviews();
    await updateRating(review.film.title);
  }
  
  //this change handler will delete all the information related to this account from local storage
  const handleDeleteClick = () => {
    reviews.map(async (review) => {
     await deletePost(review.post_id);
     await fetchReviews();
     await updateRating(review.film.title);
    })
    deleteSecurity(user);
    deleteUser(user.username);
 
    //after delete all information from localStorage, it also remove this account from localStorage and navigate to log in page
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
                    title={review.film.title}
                    writer={user.username}
                    rating={review.rating}
                    content={review.content}
                    id={key}
                  />
                  <div className="myprofile-button">
                    <Button
                      onClick={() =>
                        handleUpdateReviewClick(
                          review
                        )
                      }
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ backgroundColor: "red" }}
                      className="delete-button"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you wish to delete this review?"
                          )
                        ) {
                          handleRemoveReviewClick(review);
                        }
                      }}
                    >
                      Delete
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
