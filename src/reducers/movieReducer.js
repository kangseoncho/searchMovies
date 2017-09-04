
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

const displayDetail = (state, action) => {
  return state.map((movieInfo, i) => {
    if(action.payloadIndex === i) movieInfo['showMoreDetail'] = action.payload;
    return movieInfo;
  })
}


const movieReducer = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_MOVIE':
      return searchMovie(state, action.payload);

    case 'SET_INITIALSTATE':
      return action.payload;

    case 'DISPLAY_DETAIL':
      return displayDetail(state, action);

    default:
      return state;
  }
}

export default movieReducer;