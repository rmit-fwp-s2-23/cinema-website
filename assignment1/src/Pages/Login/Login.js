import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/nav/Button/Button";
import {verifyUser} from "../../Account/Storage.js";
import { useNavigate, Redirect } from "react-router-dom";

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
      
      alert("hi")
      
    }

    const temp = { ...fields };
    temp.password = "";
    setFields(temp);
    setErrMessage("Username and / or password invalid, please try again.");
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          {errMessage !== null && <div>{errMessage}</div>}
          <div>
            <input
              name="username"
              id="username"
              placeholder="Enter your username"
              value={fields.username}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={fields.password}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <Button type="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
