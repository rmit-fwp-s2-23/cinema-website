import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import { getUser } from "../../Account/Repository.js";
import { useNavigate } from "react-router-dom";

function MyProfile(props) {
  const data = getUser();
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/editmyprofile");
  };

  return (
    <div>
      <div className="myprofile-container">
        <h1>My Profile</h1>
        <div className="myprofile-data">
          <div className="myprofile-avatar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2IU5Ms2W9aAfftphuUY9ISdst9nzyq3xW5RNu2IeJuMuOtYL-h3W5v7GfpWlxAc21ng&usqp=CAU" alt="User Avatar" />
          </div>
          <div className="myprofile-form">
            <div className="myprofile-detail">
              <div className="myprofile-form-member">
                <p>
                  <strong>Username</strong>
                  {data.username}
                </p>
              </div>
              <div className="myprofile-form-member">
                <p>
                  <strong>Password</strong>
                  {data.password}
                </p>
              </div>
              <div className="myprofile-form-member">
                <p>
                  <strong>Email</strong>
                  {data.email}
                </p>
              </div>
            </div>
            <div className="myprofile-button">
              <Button onClick={handleUpdateClick}>Edit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
