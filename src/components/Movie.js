import React from 'react';

const Movie = ({ movie }) => {
  const posterUrlFirstPiece = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div className="movie">
      <img src={posterUrlFirstPiece + movie['poster_path']} className='poster'/> <br />
      Title: {movie.title} <br /> <br />
      ID: {movie.id} <br />
    </div>
  )
}

export default Movie;