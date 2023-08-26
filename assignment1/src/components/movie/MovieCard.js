import "./Movie.css";
import React from "react";
import Button from "../nav/Button/Button";
import { useNavigate } from "react-router-dom";
import Review from "../../Pages/Review/Review";

const MovieCard = ({ movie, isBig }) => {
  const cardClass = isBig ? "movie-card big" : "movie-card";
  const navigate = useNavigate();
  const title = movie.title;
  function handleClick(){
    navigate("/review", {state : title});
  }
  return (
    <div className={cardClass}>
      <div className="img-container">
        <img src={movie.poster} alt={`${movie.title} Poster`} />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.releaseDate}</p>
      <p>{movie.description}</p>
      <div className="movie-form-member">
        
        <Button onClick={handleClick}>Feedback</Button>
      </div>
    </div>
  );
};

export default MovieCard;
