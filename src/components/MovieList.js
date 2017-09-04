import React from 'react';
import Movie from './movie';

let MovieList = (props) => {

  return (
    <div className="movieList">
      {props.movie.map((movieInfo, i) => {
        return <Movie dispatch={props.dispatch} key={i} movieInfo={movieInfo} index={i} />
      })}
    </div>
  )
}

export default MovieList;