import "./Movie.css";
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const numDescending = [...movies].sort(
    (a, b) => b.averageRating - a.averageRating
  );
  const highestRatedMovie = numDescending[0];
  return (
    <div className="movie-layout">
      <div className="hottest">
        <p>
          <strong>Hottest</strong><span>&#128293;</span>
        </p>
      </div>
      <MovieCard
        key={highestRatedMovie.id}
        movie={highestRatedMovie}
        isBig={true}
      />
      <div className="trending">
        <p>
          Trending<span></span>
        </p>
      </div>
      {numDescending.map((movie, key) => {
        return (
          <div className="movie-layout">
            <MovieCard order={key + 1} key={movie.id} movie={movie} />
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
