import { createGuid } from '../utility/guid';

// TODO: refactor the actionCreators

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
  DELETE_JOB: 'DELETE_JOB',
  CREATE_TIMEENTRY: 'CREATE_TIMEENTRY',
  UPDATE_TIMEENTRY: 'UPDATE_TIMEENTRY',
  DELETE_TIMEENTRY: 'DELETE_TIMEENTRY'
};

const TimeEntryActionCreators = {
  createTimeEntry: (startDateTime, endDateTime, jobId, tags) => ({
    type: ActionConst.CREATE_TIMEENTRY,
    payload: {
      startDateTime,
      endDateTime,
      jobId,
      tags
    }
  }),
  updateTimeEntry: (id, startDateTime, endDateTime, jobId, tags) => ({
    type: ActionConst.UPDATE_TIMEENTRY,
    payload: {
      id,
      startDateTime,
      endDateTime,
      jobId,
      tags
    }
  }),
  deleteTimeEntry: (id) => ({
    type: ActionConst.DELETE_TIMEENTRY,
    payload: {
      id,
    }
  }),
}


export { ActionConst, JobActionCreators, TimeEntryActionCreators };
