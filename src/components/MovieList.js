import React from 'react';
import Movie from './Movie';


const MovieList = (props) => {
  return (
    <div>
      {props.movie.map((movie, i) => {
        return <Movie key={i} movie={movie}/>
      })}
    </div>
  )
}

export default MovieList;