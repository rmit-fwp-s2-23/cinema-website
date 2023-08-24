import React, { useState } from "react";
import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import { getUser, setUser } from "../../Account/Repository.js";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/nav/Nav/Nav";
function EditMyProfile() {
  const userData = getUser();
  const navigate = useNavigate();
  const [editedData, setEditedData] = useState({
    username: userData?.username || "", // Initialize with existing username
    password: userData?.password || "", // Initialize with existing password
    email: userData?.email || "", // Initialize with existing email
    date: userData.date
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
        <div className="myprofile-data">
          <div className="myprofile-avatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2IU5Ms2W9aAfftphuUY9ISdst9nzyq3xW5RNu2IeJuMuOtYL-h3W5v7GfpWlxAc21ng&usqp=CAU"
              alt="User Avatar"
            />
          </div>
          <div className="myprofile-form">
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
              <Button type="Submit" onClick={handleUpdateClick}>Update</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMyProfile;
