import React from 'react';
import MovieList from '../../components/movie/MovieList';
import movieData from '../../components/movie/MovieData'; // Import your movie data here

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to 77 Movie</h1>
      <MovieList movies={movieData} />
    </div>
  );
};

export default Home;