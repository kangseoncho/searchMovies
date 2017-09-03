import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';


let Header = ({dispatch}) => {
  return (
    <header>
      <div id="title">Movie Finder</div>
      <NavBar dispatch={dispatch}/>
    </header>
  )
}

Header = connect()(Header)

export default Header;