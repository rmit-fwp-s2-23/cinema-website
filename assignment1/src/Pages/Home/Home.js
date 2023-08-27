import React from "react";
import MovieList from "../../components/movie/MovieList";
import movieData from "../../components/movie/MovieData"; // Import your movie data here
import ReleaseComponent from "../../components/movie/Release";
import { getAverageRating } from "../../Repository/Review";
const Home = () => {
  //calculate the averageRating of each movie
  movieData.map((movie) => {
    movie.averageRating = getAverageRating(movie.title);
  });
  return (
    <div className="home">
      <h1>Welcome to Loop Cinemas</h1>
      <MovieList movies={movieData} />
      <ReleaseComponent />
    </div>
  );
};

export default Home;
