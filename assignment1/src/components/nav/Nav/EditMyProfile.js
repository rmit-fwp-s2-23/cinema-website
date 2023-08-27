import React, { useState } from "react";
import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import { getUser, setUser } from "../../Repository/Account.js";
import { useNavigate } from "react-router-dom";
import { getReviewsByWritter } from "../../Repository/Review";
import Post from "../../components/Post/Post";
import { checkValidEmail } from "../../Repository/Account.js";
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
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [errorUsernameMessage, setErrorUsernameMessage] = useState(null);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);

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
    setErrorUsernameMessage("");
    setErrorEmailMessage("");
    setErrorPasswordMessage("");
    if (localStorage.getItem(editedData.username) !== null) {
      setErrorUsernameMessage(
        "This username is already used. Please use another username !"
      );
      return;
    }
    if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
        editedData.password
      )
    ) {
      setErrorPasswordMessage(
          "Invalid Password"
      );
      return;
    }
    if (!checkValidEmail(editedData.email)) {
      setErrorEmailMessage(
        "This email is already used. Please use another email !"
      );
      return;
    }

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
                {errorUsernameMessage !== null && (
                  <div className="form-group">
                    <span style={{ color: "red" }}>{errorUsernameMessage}</span>
                  </div>
                )}
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
                <div className="form-group">
                  {errorPasswordMessage !== null && (
                    <span style={{ color: "red" }}>{errorPasswordMessage}</span>
                  )}
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
                <div className="form-group">
                  {errorEmailMessage !== null && (
                    <span style={{ color: "red" }}>{errorEmailMessage}</span>
                  )}
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
        <div className="myprofile-post">
          {reviews.length === 0 ? (
            <span>No posts have been submitted.</span>
          ) : (
            reviews.map((review, key) => (
              <Post
                title={review.title}
                rating={review.rating}
                content={review.content.replace(/___LINE_BREAK___/g, "<br>")}
                id={key}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default EditMyProfile;
