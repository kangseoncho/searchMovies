import React from 'react';
import { searchMovie } from './../action/movieActions';
import { connect } from 'react-redux';

const NavBar = ({dispatch}) => {
  let input;

  return (
    <nav>
      <input type="text" placeholder="search" ref={node => input = node}/>
      <button onClick={() => dispatch(searchMovie(input.value))}>Search</button>
    </nav>
  )
}

export default NavBar;