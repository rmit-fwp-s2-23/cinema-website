import './Movie.css';
import React from 'react';
import Button from '../nav/Button/Button';

const MovieCard = ({ movie, isBig }) => {
  const cardClass = isBig ? 'movie-card big' : 'movie-card';

  return (
    <div className={cardClass}>
      <div className="img-container">
        <img src={movie.poster} alt={`${movie.title} Poster`} />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.releaseDate}</p>
      <p>{movie.description}</p>
      <div className='movie-form-member'>

        <Button>Feedback</Button>
      </div>
    </div>
  );
};

export default MovieCard;



