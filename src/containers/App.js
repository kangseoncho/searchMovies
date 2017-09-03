import React, { Component } from 'react';
import Header from './../components/header';
import MovieContainer from './moviecontainer';
import { setInitialState } from './../action/movieActions';
import { connect } from 'react-redux';
const port = 3000;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.dispatch(setInitialState(`http://localhost:${port}/api`))
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

export default connect()(App);