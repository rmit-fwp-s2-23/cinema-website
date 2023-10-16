import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import Login from "./Pages/Login/Login";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Home from "./Pages/Home/Home";
import EditMyProfile from "./Pages/MyProfile/EditMyProfile";
import NavigationBar from "./components/nav/Nav.js";
import Review from "./Pages/Review/Review";
import { initReview } from "./Repository/Review";
import EditPost from "./Pages/EditPost/EditPost";
import Footer from "./components/footer/Footer";
import { initSecurity } from "./Repository/Security";
import MovieData from "./components/movie/MovieData";
import MovieDescription from "./Pages/MovieDescription/MovieDescription"
// import movieData from "./components/movie/MovieData";
function App() {
  initReview();
  initSecurity();
  return (
    <div>
      <div className="App">
        <div className="content">
          <Router>
            <div className="nav">
              <NavigationBar />
            </div>
            <div className="body">
              <main role="main">
                <Routes>
                  <Route path="/" element={<Home movies={MovieData}  />} />
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                  <Route path="myprofile" element={<MyProfile />} />
                  <Route path="editmyprofile" element={<EditMyProfile />} />
                  <Route path="review" element={<Review />} />
                  <Route path="editpost" element={<EditPost />} />
                  <Route path="movie/:id" element={<MovieDescription movies={MovieData} />} />
                  <Route path="movie/:ids" element={<MovieDescription movies={MovieData} />} />
                  {/* <Route path="movie/:id" element={<MovieDescription  />} /> */}
                  {/* Add other routes here */}
                </Routes>
              </main>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
