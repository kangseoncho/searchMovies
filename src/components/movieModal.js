import React from 'react';
import { displayModal } from './../action/modalActions';


const MovieModal = ({ movieInfo, dispatch, index }) => {
  // console.log(movieInfo)
  const PosterUrlFirstPiece = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div className='modal'>
      <div>
        <img className="modalPoster" src={PosterUrlFirstPiece + movieInfo['poster_path']} />
      </div>
      <div className="movieInformation">
        <div>
          <span>Title:</span> {movieInfo.title}
        </div>
        <div>
        <span>ID:</span> {movieInfo.id}
        </div>
        <div>
        <span>Movie Overview:</span> {movieInfo.overview}
        </div>
        <div>
        <span>Release Date:</span> {movieInfo['release_date']}
        </div>
      </div>
      <div className='exitModal'>
        <button className="exitModalButton" onClick={() => dispatch(displayModal(false, index))}>X</button>
      </div>
    </div>
  )
}

export default MovieModal;