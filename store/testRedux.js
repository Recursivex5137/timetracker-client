import { createStore } from 'redux';
import { combineReducers } from 'redux';


// ActionConst
const JobActions = {
  ADD_JOB: 'ADD_JOB',
  DELETE_JOB: 'DELETE_JOB',
  UPDATE_JOB: 'UPDATE_JOB'
};

// Actions  
let nextJobId = 0;
const addJob = (number, name) => ({
  type: 'ADD_JOB',
  payload: {
    id: nextJobId++,
    number: number,
    name: name
  }
});
const deleteJob = (id) => ({
  type: 'DELETE_JOB',
  payload: {
    id: id
  }
});
const updateJob = (id, number, name) => ({
  type: 'UPDATE_JOB',
  payload: {
    id: id,
    number: number,
    name: name
  }
})

// Action Creators store.dispatch actions
// not done and not totally sure about doing it this way do I even need this
const JobActionCreator = {
  addJob: () => {
    return {
      type: JobActions.ADD_JOB
    }
  },

}

//Reducer
const initialState = {
  jobs: []
};

const reducer = (state = initialState, action => {
  switch (action.type) { // action.type prop is undefined
    case JobActions.ADD_JOB:
      return {
        ...state,
        jobs: state.jobs.concat({
          id: action.id,
          number: action.number,
          name: action.name,
        })
      };
    case JobActions.DELETE_JOB:
      return {
        ...state
      };
    default:
      return state;
  }
});

// put all reducers together
const rootReducer = combineReducers({
  reducer
});


// Store
const configureStore = () => {
  return createStore(rootReducer);
};

// export action, consts and store
export { addJob, JobActions, configureStore };
