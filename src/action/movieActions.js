
export const setInitialMovieState = (url) => {
  return (dispatch) => {
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('allMovies', JSON.stringify(json));
      return dispatch({
        type: 'SET_INITIALSTATE',
        payload: json
      })
    })
    .catch((err) => console.log(err))
  }
}

export const searchMovie = (input) => {
  return {
    type: 'SEARCH_MOVIE',
    payload: input
  }
}

export const displayDetail = (bool, index) => {
  return {
    type: 'DISPLAY_DETAIL',
    payload: bool,
    payloadIndex: index
  }
}