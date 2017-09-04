import React from 'react';
import { displayDetail } from './../action/movieActions';


const MovieModal = ({ movieInfo, dispatch, index }) => {
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
        <button className="exitModalButton" onClick={() => dispatch(displayDetail(false, index))}>X</button>
      </div>
    </div>
  )
}

export default MovieModal;