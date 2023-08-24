import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/nav/Button/Button";
import { setUser, verifyUser } from "../../Account/Storage.js";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../Account/Storage.js";

function Login() {
  const [fields, setFields] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState(null);

  function handleChange(event) {
    const username = event.target.name;
    const value = event.target.value;

    const temp = { username: fields.username, password: fields.password };
    temp[username] = value;
    setFields(temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (verifyUser(fields.username, fields.password)) {
      navigate("/");
      return;
    }

    const temp = { ...fields };
    temp.password = "";
    setFields(temp);
    setErrMessage("Username and / or password invalid, please try again.");
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          {errMessage !== null && <span>{errMessage}</span>}
          <form onSubmit={handleSubmit}>
            <div className="login-form-member">
              <input
                name="username"
                id="username"
                placeholder="Enter your username"
                value={fields.username}
                onChange={handleChange}
              ></input>
            </div>
            <div className="login-form-member">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={fields.password}
                onChange={handleChange}
              ></input>
            </div>
            <div className="login-form-member">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
