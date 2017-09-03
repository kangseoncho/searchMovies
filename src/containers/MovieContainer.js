import React from 'react';
import { connect } from 'react-redux';
import MovieList from './../components/movieList';

const mapStateToProps = (state) => {
  return {
    movie: state.movie
  }
}

const MovieContainer = connect(mapStateToProps)(MovieList);

export default MovieContainer;