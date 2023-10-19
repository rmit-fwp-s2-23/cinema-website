import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>

           <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
           </Routes>
        < Footer />
      </Router>
      
    </div>
  );
}

export default App;
