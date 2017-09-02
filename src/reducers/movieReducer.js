const initialMovieList = JSON.parse(localStorage.getItem('allMovies'));

const searchMovie= (state, input) => {
  if (input.length === 0){
    return initialMovieList;
  }
  else {
    return state.filter((movie, index) => {
      return movie['id'].toString().includes(input.toString()) ||
        movie['title'].toLowerCase().includes(input.toLowerCase());
    });
    //return tempMovieList;
  }
}


const movieReducer = (state=initialMovieList, action) => {
  switch(action.type) {
    case 'SEARCH_MOVIE':
      return searchMovie(state, action.payload);
    default:
      return state;
  }
}

export default movieReducer;