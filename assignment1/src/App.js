import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<Register />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
