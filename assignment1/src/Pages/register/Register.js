import "./Register.css";
import React, { useState } from "react";
import { Link as RouterLink, useHistory, useNavigate } from "react-router-dom";
import Button from "../../components/nav/Button/Button";
import { createUser } from "../../Account/Storage";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save form data to local storage
    if (localStorage.getItem(formData.username) === null) {
      createUser(formData.username, formData);
      alert("Register successfully !");
      navigate("/login");
      return;
    }
    alert("This username is already used. Please use another username !");
  };

  return (
    <div>
      <div className="register-container">
        <div className="register-form">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
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
            <div className="register-form-member">
            <Button type="Register">Register</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
