import "./MyProfile.css";
import Button from "../Button/Button";

function MyProfile(props) {
  return (
    <div className="Myprofile">
      <h1>My Profile</h1>
      <div className="Myprofile-form">
        <div className="Myprofile-avatar">
          <img src=""></img>
          <p>a image</p>
        </div>
        <div className="Myprofile-detail">
          <div>
            <p>
              <strong>Username:</strong>123{props.username}
            </p>
          </div>
          <div>
            <p>
              <strong>Password:</strong>123{props.password}
            </p>
          </div>
          <div>
            <p>
              <strong>Email:</strong>123{props.email}
            </p>
          </div>
        </div>
        <div className="Myprofile-button">
          <Button type="Update" />
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
