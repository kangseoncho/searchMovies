import React from 'react';

const Movie = ({movie}) => {
  const posterUrlFirstPiece = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div>
      <img src={posterUrlFirstPiece + movie['poster_path']} className='poster'/> <br />
      {movie.id} <br />
      {movie.title} <br /> <br />
    </div>
  )
}

export default Movie;