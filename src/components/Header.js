import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';


let Header = ({dispatch}) => {
  return (
    <header>
      Movie Finder
      <NavBar dispatch={dispatch}/>
    </header>
  )
}

Header = connect()(Header)

export default Header;