import React from 'react';
import ReactModal from 'react-modal';
import { displayModal } from './../action/modalActions';
import MovieModal from './movieModal';

const Movie = (props) => {
  const posterUrlFirstPiece = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className="movie" onClick={ () => props.dispatch(displayModal(true, props.index)) }>

      <ReactModal isOpen={props.showModal[props.index]} contentLabel="Movie Detail Modal">
        <MovieModal movieInfo={props.movieInfo} dispatch={props.dispatch} index={props.index} />
      </ReactModal>

      <img src={posterUrlFirstPiece + props.movieInfo['poster_path']} className='poster'/> <br />
      <span>Title:</span> {props.movieInfo.title} <br />
      <span>ID:</span> {props.movieInfo.id} <br />
    </div>
  )
}

export default Movie;