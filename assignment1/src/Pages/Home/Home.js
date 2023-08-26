import React from 'react';
import MovieList from '../../components/movie/MovieList';
import movieData from '../../components/movie/MovieData'; // Import your movie data here
import ReleaseComponent from '../../components/movie/Release';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to 77 Movies</h1>
      <MovieList movies={movieData} />
      <ReleaseComponent/>
    </div>
  );
};

export default Home;