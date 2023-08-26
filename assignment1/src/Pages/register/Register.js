import "./Register.css";
import React, { useState } from "react";
import { Link as RouterLink, useHistory, useNavigate } from "react-router-dom";
import Button from "../../components/nav/Button/Button";
import { createUser, checkValidEmail } from "../../Repository/Repository.js";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [date, setDate] = useState("");
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [errorUsernameMessage, setErrorUsernameMessage] = useState(null);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButton = () => {
    const date = new Date().toLocaleDateString();
    setDate(date);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorUsernameMessage("");
    setErrorEmailMessage("");
    // Save form data to local storage
    if (localStorage.getItem(formData.username) !== null) {
      setErrorUsernameMessage(
        "This username is already used. Please use another username !"
      );
    }
    if (!checkValidEmail(formData.email)) {
      setErrorEmailMessage(
        "This email is already used. Please use another email !"
      );
    }
    if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
        formData.password
      )
    ) {
      setErrorPasswordMessage(
        <div>
          <p>A password must contain:</p>
          <p>-at least 8 characters</p>
          <p>-one lowercase and upercase letter</p>
          <p>-one digit</p>
          <p>-one special character</p>
        </div>
      );
    } else {
      createUser(formData.username, formData, date);
      alert("Register successfully !");
      navigate("/login");
      return;
    }
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-wrapper">
          <h1>Register</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="register-form-member">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            {errorUsernameMessage !== null && (
              <div className="form-group">
                <span style={{ color: "red" }}>{errorUsernameMessage}</span>
              </div>
            )}
            <div className="register-form-member">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {errorEmailMessage !== null && (
              <div className="form-group">
                <span style={{ color: "red" }}>{errorEmailMessage}</span>
              </div>
            )}
            <div className="register-form-member">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {errorPasswordMessage !== null && (
              <div className="form-group">
                <span style={{ color: "red" }}>{errorPasswordMessage}</span>
              </div>
            )}
            <div className="register-form-member">
              <Button type="Register" onClick={handleButton}>
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
