import { createStore } from 'redux';
import Actions from './actions';
import AllReducers from './reducers/index';
import { initialState } from './initialState';


const store = () => {
  return createStore(AllReducers);
};

export {
  Actions,
  store
};

