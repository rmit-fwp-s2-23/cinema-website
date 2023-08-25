import './Movie.css';
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-layout">
      <MovieCard key={movies[0].id} movie={movies[0]} isBig={true} />
      <MovieCard key={movies[1].id} movie={movies[1]} />
      <MovieCard key={movies[2].id} movie={movies[2]} />
      <MovieCard key={movies[3].id} movie={movies[3]} />
      <MovieCard key={movies[4].id} movie={movies[4]} />
      <MovieCard key={movies[5].id} movie={movies[5]} />
      <MovieCard key={movies[6].id} movie={movies[6]} />
    </div>
  );
};

export default MovieList;


