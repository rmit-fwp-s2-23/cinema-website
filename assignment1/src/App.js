import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";
import Login from "./Pages/Login/Login";
import MyProfile from './Pages/MyProfile/MyProfile';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path='myprofile' element={<MyProfile />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
