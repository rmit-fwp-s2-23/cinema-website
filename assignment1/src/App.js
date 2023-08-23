import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import Login from "./Pages/Login/Login";
import MyProfile from './Pages/MyProfile/MyProfile';
import Home from './Pages/Home/Home';
import EditMyProfile from './Pages/MyProfile/EditMyProfile';


function App() {
  return (
    <div className="App">
     

      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="signup" element= {<Register />} />
          <Route path="login" element={<Login />} />
          <Route path='myprofile' element={<MyProfile />} />
          <Route path='editmyprofile' element={<EditMyProfile />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
