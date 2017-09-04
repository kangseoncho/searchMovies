import React from 'react';
import Movie from './movie';
// import ModalContainer from './../containers/modalContainer';

let MovieList = (props) => {
  return (
    <div className="movieList">
      {props.movie.map((movieInfo, i) => {
        return <Movie showModal={props.showModal} dispatch={props.dispatch} key={i} movieInfo={movieInfo} index={i} />
      })}
    </div>
  )
}

export default MovieList;