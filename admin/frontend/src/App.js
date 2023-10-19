import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import AdminReviews from './pages/Reviews/AdminReviews';
import AdminUsers from './pages/Users/AdminUsers';
import Films from './pages/Films/Films';
import MovieDescription from './pages/Films/MovieDescriptions';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      releaseYear: 2020,
      image: 'https://example.com/movie1.jpg',
    },
    {
      title: 'Movie 2',
      releaseYear: 2019,
      image: 'https://example.com/movie2.jpg',
    },
    // Add more movie objects as needed
  ]);

  const updateMovie = (title, newReleaseYear) => {
    // Update the movie's release year in your state or API here
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.title === title ? { ...movie, releaseYear: newReleaseYear } : movie
      )
    );
  };
  return (
    <div className="App">
      <Router>

           <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/adminreviews" element={<AdminReviews />} />
                  <Route path="/adminusers" element={<AdminUsers />} />
                  <Route path="/films" element={<Films />} />
                  <Route path="/movie/:movieTitle" element={<MovieDescription movies={movies} updateMovie={updateMovie} />} />


           </Routes>
        < Footer />
      </Router>
      
    </div>
  );
}

export default App;
