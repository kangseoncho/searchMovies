import React from 'react';
import { connect } from 'react-redux';
import movieList from './../components/movieList';

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
    showModal: state.showModal
  }
}

const MovieContainer = connect(mapStateToProps)(movieList);

export default MovieContainer;