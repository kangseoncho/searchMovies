import movieReducer from './movieReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  movie: movieReducer
});

export default reducers;