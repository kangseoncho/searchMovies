import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk)

const store = createStore(
  reducers,
  middleware
)

export default store;