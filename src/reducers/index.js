import {reducer as form} from 'redux-form';
import {combineReducers} from 'redux'
import app from './appReducers';
import search from './searchReducers';

export default combineReducers({
  app,
  search,
  form
})
