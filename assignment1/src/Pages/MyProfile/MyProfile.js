import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import { getUser, deleteUser, removeUser } from "../../Account/Repository.js";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const data = getUser();
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/editmyprofile");
  };

  const handleDeleteClick = () => {
    deleteUser(data.username);
    removeUser();
    navigate("/login");
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
                style={{ backgroundColor: "red"}}
                className = "delete-button"
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
