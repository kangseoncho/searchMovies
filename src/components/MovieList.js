import React from 'react';
import Movie from './movie';


const MovieList = (props) => {
  return (
    <div className="movieList">
      {props.movie.map((movie, i) => {
        return <Movie key={i} movie={movie}/>
      })}
    </div>
  )
}

export default MovieList;