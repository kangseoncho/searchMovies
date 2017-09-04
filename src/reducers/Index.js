import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
  movie: movieReducer,
  showModal: modalReducer
});

export default reducers;