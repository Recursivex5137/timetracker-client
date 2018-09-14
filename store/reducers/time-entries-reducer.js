import { ActionConst } from '../actions';
import { findObject } from '../../utility/utility';

const initialState = {
  timeEntries: []
};

const timeEntry = {
  id: 'ioioj3434-3483948',
  startDateTime: '344/3435',
  endDateTime: '434/3434/24',
  jobId: '34324jo',
  tags: [
    { id: 'tag1' },
    { id: 'tag2' }
  ]
};

const timeEntries = (state = initialState, action) => {
  switch (action.type) {
    case ActionConst.CREATE_TIMEENTRY:
      // DONE: create tests
      return {
        ...state,
        timeEntries: state.timeEntries.concat({
          id: action.payload.id,
          number: action.payload.number,
          name: action.payload.name,
        })
      };
    case ActionConst.UPDATE_TIMEENTRY:
      // DONE: create tests
      const prevJob = findObject(state.timeEntries, 'id', action.payload.id);
      const newJob = {
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      };
      const previousIndex = state.timeEntries.indexOf(prevJob);
      return {
        ...state,
        timeEntries: state.timeEntries.slice(0, previousIndex)
          .concat([newJob])
          .concat(state.timeEntries.slice(previousIndex + 1, state.timeEntries.length))
      };

    case ActionConst.DELETE_TIMEENTRY:
      // DONE: create tests
      const deleteJob = findObject(state.timeEntries, 'id', action.payload.id);
      const deleteJobIndex = state.timeEntries.indexOf(deleteJob);
      return {
        ...state,
        timeEntries: state.timeEntries
          .slice(0, deleteJobIndex)
          .concat(state.timeEntries.slice(deleteJobIndex + 1, state.timeEntries.length))
      };
    default:
      return state;
  }
};


export default timeEntries;