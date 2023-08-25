import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import Login from "./Pages/Login/Login";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Home from "./Pages/Home/Home";
import EditMyProfile from "./Pages/MyProfile/EditMyProfile";
import NavigationBar from "./components/nav/Nav/Nav";
import Review from "./Pages/Review/Review";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <NavigationBar />
          <main role="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="myprofile" element={<MyProfile />} />
              <Route path="editmyprofile" element={<EditMyProfile />} />
              <Route path="review" element={<Review />} />

              {/* Add other routes here */}
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
