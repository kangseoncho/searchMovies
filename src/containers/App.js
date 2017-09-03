import React, { Component } from 'react';
import Header from './../components/header';
import MovieContainer from './moviecontainer';
const port = 3000;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`http://localhost:${port}/api`)
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('allMovies', JSON.stringify(json));
      })
  }

  render() {
    return (
      <div>
        <Header />
        <MovieContainer />
      </div>
    )
  }
}

export default App;