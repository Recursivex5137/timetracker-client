import { combineReducers } from 'redux';
import jobs from './jobs-reducer';
import timeEntries from './time-entries-reducer';

export default combineReducers({
  jobs,
  timeEntries
});
