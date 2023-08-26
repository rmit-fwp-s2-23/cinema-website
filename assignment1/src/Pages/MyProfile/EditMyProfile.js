import React, { useState } from "react";
import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import { getUser, setUser } from "../../Repository/Repository.js";
import { useNavigate } from "react-router-dom";
import { getReviewsByWritter } from "../../Pages/Review/Repository";
import Post from "../../components/Post/Post";

function EditMyProfile() {
  const data = getUser();
  const reviews = getReviewsByWritter(data.username);
  const navigate = useNavigate();
  const [editedData, setEditedData] = useState({
    username: data?.username || "", // Initialize with existing username
    password: data?.password || "", // Initialize with existing password
    email: data?.email || "", // Initialize with existing email
    date: data.date,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle the update button click
  const handleUpdateClick = (event) => {
    event.preventDefault();
    setUser(editedData);
    // You can implement the logic here to update the user data
    alert("Update successfully !");
    navigate("/myprofile");
    return;
  };

  return (
    <div>
      <div className="myprofile-container">
        <h1>My Profile</h1>
        <div className="myprofile-wrapper">
          <div className="myprofile-post">
            {reviews.length === 0 ? (
              <span>No posts have been submitted.</span>
            ) : (
              reviews.map((review) => (
                <Post
                  title={review.filmTitle}
                  rating={review.rating}
                  content={review.content.replace(/___LINE_BREAK___/g, "<br>")}
                />
              ))
            )}
          </div>
          <div className="myprofile-form">
            <form onSubmit={handleUpdateClick}>
              <div className="myprofile-detail">
                <div>
                  <p className="myprofile-form-member">
                    <strong>Username:</strong>
                    <input
                      type="text"
                      name="username"
                      value={editedData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </p>
                </div>
                <div className="myprofile-form-member">
                  <p>
                    <strong>Password:</strong>
                    <input
                      type="text"
                      name="password"
                      value={editedData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </p>
                </div>
                <div className="myprofile-form-member">
                  <p>
                    <strong>Email:</strong>
                    <input
                      type="email"
                      name="email"
                      value={editedData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </p>
                </div>
              </div>
              <div className="myprofile-button">
                <Button type="Submit">Update</Button>
                <Button
                  style={{ backgroundColor: "grey" }}
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to cancel this form ?"
                      )
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
      </div>
    </div>
  );
}

export default EditMyProfile;
