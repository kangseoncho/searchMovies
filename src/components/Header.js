import React from 'react';
import NavBar from './navBar';
import { connect } from 'react-redux';


let Header = ({ dispatch }) => {
  return (
    <header>
      <div id="title">Movie Finder</div>
      <NavBar dispatch={dispatch}/>
    </header>
  )
}

Header = connect()(Header)

export default Header;