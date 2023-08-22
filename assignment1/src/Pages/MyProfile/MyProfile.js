import "./MyProfile.css";
import Button from "../../components/nav/Button/Button";
import {getUser} from "../../Account/Storage.js";
function MyProfile(props) {
  const data = getUser();
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
              <strong>Username:</strong>{data.username}
            </p>
          </div>
          <div>
            <p>
              <strong>Password:</strong>{data.password}
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
