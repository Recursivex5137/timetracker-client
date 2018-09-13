import { createGuid } from '../utility/guid';

// the id needs to be a string for key rendering of the FlatList component
const JobActionCreators = {
  addJob: (name, number) => ({
    type: 'ADD_JOB',
    payload: {
      id: createGuid(),
      name: name,
      number: number
    }
  }),
  updateJob: (id, name, number) => ({
    type: 'UPDATE_JOB',
    payload: {
      id: id,
      name: name,
      number: number
    }
  }),
  deleteJob: (id) => ({
    type: 'DELETE_JOB',
    payload: {
      id: id
    }
  }),
}

const ActionConst = {
  ADD_JOB: 'ADD_JOB',
  UPDATE_JOB: 'UPDATE_JOB',
  DELETE_JOB: 'DELETE_JOB'
};


export { JobActionCreators, ActionConst };
