import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import fitnessTrackerReducer from './reducer/fitnessTrackerReducer';

const store = createStore(fitnessTrackerReducer, applyMiddleware(thunk));
export default store;
