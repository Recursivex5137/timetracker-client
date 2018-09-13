import jobsReducer from '../reducers/jobs-reducer';
import { ActionConst } from '../actions';
import { createGuid } from '../../utility/guid';

const initialState = {
  jobs: []
};

const initialStateFull = {
  jobs: [
    {
      id: 'lasdofhis-sdfjsof9u09324',
      name: 'test1',
      number: 43424,
    },
    {
      id: 'lasdofhis-oiyihoih8098',
      name: 'test2',
      number: 253545,
    },
    {
      id: 'sdfdf3f3-2j34hhuiho',
      name: 'test3',
      number: 42434,
    }
  ]
};

const uniqueId = createGuid();

const testActions = {
  addJob: {
    type: ActionConst.ADD_JOB,
    payload: {
      id: uniqueId,
      name: 'addJobTest',
      number: 44545
    }
  },
  addJobFinalState: {
    jobs: [
      {
        id: uniqueId,
        name: 'addJobTest',
        number: 44545
      }
    ]
  },
  updateJob: {
    type: ActionConst.UPDATE_JOB,
    payload: {
      id: 'lasdofhis-oiyihoih8098',
      name: 'updateJobTest',
      number: 33334
    }
  },
  updateJobFinalState: {
    jobs: [
      {
        id: 'lasdofhis-sdfjsof9u09324',
        name: 'test1',
        number: 43424,
      },
      {
        id: 'lasdofhis-oiyihoih8098',
        name: 'updateJobTest',
        number: 33334,
      },
      {
        id: 'sdfdf3f3-2j34hhuiho',
        name: 'test3',
        number: 42434,
      }
    ]
  },
  deleteJob: {
    type: ActionConst.DELETE_JOB,
    payload: {
      id: 'lasdofhis-oiyihoih8098',
    }
  },
  deleteJobFinalState: {
    jobs: [
      {
        id: 'lasdofhis-sdfjsof9u09324',
        name: 'test1',
        number: 43424,
      },
      {
        id: 'sdfdf3f3-2j34hhuiho',
        name: 'test3',
        number: 42434,
      }
    ]
  }
};

describe('JobsReducer', () => {
  it('should return the initial state', () => {
    expect(jobsReducer(undefined, {}))
      .toEqual({
        jobs: []
      });
  });
  it('should handle ADD_JOB', () => {
    expect(jobsReducer(initialState, testActions.addJob))
      .toEqual(testActions.addJobFinalState);
  });
  it('should handle UPDATE_JOB', () => {
    expect(jobsReducer(initialStateFull, testActions.updateJob))
      .toEqual(testActions.updateJobFinalState);
  });
  it('should handle DELETE_JOB', () => {
    expect(jobsReducer(initialStateFull, testActions.deleteJob))
      .toEqual(testActions.deleteJobFinalState);
  });
});


