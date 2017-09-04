let allMovieLength = JSON.parse(localStorage.getItem('allMovies')).length;
const initialState = [];

for (let i = 0; i < allMovieLength; i += 1) {
  initialState.push(false);
}

const displayModal = (state, action) => {
  return state.map((display, i) => {
    if(action.payloadIndex === i) display = action.payload;
    return display;
  })
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'DISPLAY_MODAL':
      return displayModal(state, action);

    default:
      return state;
  }
}

export default modalReducer;