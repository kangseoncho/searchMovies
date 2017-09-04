import React from 'react';
import ReactModal from 'react-modal';
import { displayDetail } from './../action/movieActions';
import MovieModal from './movieModal';

const Movie = (props) => {
  const posterUrlFirstPiece = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className="movie" onClick={ () => props.dispatch(displayDetail(true, props.index)) }>

      <ReactModal isOpen={props.movieInfo['showMoreDetail']} contentLabel="Movie Detail Modal">
        <MovieModal movieInfo={props.movieInfo} dispatch={props.dispatch} index={props.index} />
      </ReactModal>

      <img src={posterUrlFirstPiece + props.movieInfo['poster_path']} className='poster'/> <br />
      <span>Title:</span> {props.movieInfo.title} <br />
      <span>ID:</span> {props.movieInfo.id} <br />
    </div>
  )
}

export default Movie;