
const searchMovie = (state, input) => {
  const initialMovieList = JSON.parse(localStorage.getItem('allMovies'));

  if (input.length === 0){
    return initialMovieList;
  }
  else {

    return initialMovieList.filter((movie, index) => {
      return movie['id'].toString().includes(input.toString()) ||
        movie['title'].toLowerCase().includes(input.toLowerCase());
    });
  }
}


const movieReducer = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_MOVIE':
      return searchMovie(state, action.payload);

    case 'SET_INITIALSTATE':
      return action.payload;

    default:
      return state;
  }
}

export default movieReducer;