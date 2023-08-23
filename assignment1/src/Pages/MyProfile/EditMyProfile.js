import React, { useState } from "react";
import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import { getUser } from "../../Account/Storage.js";
import { useNavigate } from "react-router-dom";

function EditMyProfile(props) {
//   const userData = getUser(getUser);
  const { userData, setUserData } = getUser(getUser);
  const navigate = useNavigate ();
  const [editedData, setEditedData] = useState({
    username: userData?.username || "", // Initialize with existing username
    password: userData?.password || "", // Initialize with existing password
    email: userData?.email || "",       // Initialize with existing email
  });

//   // State to track the edited data
//   const [editedData, setEditedData] = useState({
//     username: userData.username,
//     password: userData.password,
//     email: userData.email,
//   });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle the update button click
  const handleUpdateClick = () => {
    // You can implement the logic here to update the user data
    // For this example, let's just log the edited data
    navigate ("/myprofile ")
    console.log("Edited Data:", editedData);
  };

  return (
    <div className="Myprofile">
      <h1>My Profile</h1>
      <div className="Myprofile-form">
        <div className="Myprofile-avatar">
          <img src="" alt="User Avatar" />
          <p>a image</p>
        </div>
        <div className="Myprofile-detail">
          <div>
            <p>
              <strong>Username:</strong>
              <input
                type="text"
                name="username"
                value={editedData.username}
                onChange={handleInputChange}
              />
            </p>
          </div>
          <div>
            <p>
              <strong>Password:</strong>
              <input
                type="password"
                name="password"
                value={editedData.password}
                onChange={handleInputChange}
              />
            </p>
          </div>
          <div>
            <p>
              <strong>Email:</strong>
              <input
                type="email"
                name="email"
                value={editedData.email}
                onChange={handleInputChange}
              />
            </p>
          </div>
        </div>
        <div className="Myprofile-button">
          <Button onClick={handleUpdateClick}>Update</Button>
        </div>
      </div>
    </div>
  );
}

export default EditMyProfile;
