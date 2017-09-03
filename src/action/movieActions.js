
export const setInitialState = (url) => {
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
  }
}

export const searchMovie = (input) => {
  return {
    type: 'SEARCH_MOVIE',
    payload: input
  }
}