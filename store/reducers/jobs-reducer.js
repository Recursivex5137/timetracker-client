import { ActionConst } from '../actions';
import { findObject } from '../../utility/utility';

const initialState = {
  jobs: []
};

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.ADD_JOB:
      // DONE: create test
      return {
        ...state,
        jobs: state.jobs.concat({
          id: action.payload.id,
          number: action.payload.number,
          name: action.payload.name,
        })
      };
    case ActionConst.UPDATE_JOB:
      // DONE: create test
      const prevJob = findObject(state.jobs, 'id', action.payload.id);
      const newJob = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      const previousIndex = state.jobs.indexOf(prevJob);
      return {
        ...state,
        jobs: state.jobs.slice(0, previousIndex)
          .concat([newJob])
          .concat(state.jobs.slice(previousIndex + 1, state.jobs.length))
      };

    case ActionConst.DELETE_JOB:
      // DONE: create test
      const deleteJob = findObject(state.jobs, 'id', action.payload.id);
      const deleteJobIndex = state.jobs.indexOf(deleteJob);
      return {
        ...state,
        jobs: state.jobs
          .slice(0, deleteJobIndex)
          .concat(state.jobs.slice(deleteJobIndex + 1, state.jobs.length))
      };
    default:
      return state;
  }
};


export default jobs;
