import { createGuid } from '../../utility/guid';
import { ActionConst, JobActionCreators, TimeEntryActionCreators } from '../actions';
import { initialState } from '../initialState';

describe('JobActionCreators', () => {
  it('should create an action to create a job', () => {
    const jobToAdd = { jobName: 'Mansion 4345', jobNumber: 45634 };
    const addJobTestObj = {
      type: ActionConst.ADD_JOB,
      payload: {
        id: expect.any(String),
        name: jobToAdd.jobName,
        number: jobToAdd.jobNumber,
      }
    };
    expect(JobActionCreators.addJob(jobToAdd.jobName, jobToAdd.jobNumber))
      .toEqual(
        expect.objectContaining(addJobTestObj)
      );
  });
  it('should create an action to update a job', () => {
    let updateJobTest = initialState.jobs[0];
    const updateJobTestAgainst = {
      type: ActionConst.UPDATE_JOB,
      payload: {
        id: updateJobTest.id,
        name: 'Mansion House',
        number: 787896
      }
    };
    expect(JobActionCreators.updateJob(updateJobTest.id, updateJobTestAgainst.payload.name, updateJobTestAgainst.payload.number))
      .toEqual(
        updateJobTestAgainst
      );
  });
  it('should create an action to delete a job', () => {
    const deleteJob = initialState.jobs[2];
    const deleteJobTest = {
      type: ActionConst.DELETE_JOB,
      payload: {
        id: deleteJob.id
      }
    }
    expect(JobActionCreators.deleteJob(deleteJob.id))
      .toEqual(
        deleteJobTest
      );
  });
});

// Tests for TimeEntryActionCreators
const uniqueId1 = createGuid();
const uniqueId2 = createGuid();
const timeET = {
  CTE_INPUT: {
    startDateTime: '344/3435',
    endDateTime: '434/3434/24',
    jobId: uniqueId1,
    tags: [
      { id: 'tag1' },
      { id: 'tag2' }
    ]
  },
  CTE_OUT: {
    type: ActionConst.CREATE_TIMEENTRY,
    payload: {
      startDateTime: '344/3435',
      endDateTime: '434/3434/24',
      jobId: uniqueId1,
      tags: [
        { id: 'tag1' },
        { id: 'tag2' }
      ]
    }
  },
  UTE_INPUT: {
    id: uniqueId2,
    startDateTime: '344/3435',
    endDateTime: '434/3434/24',
    jobId: uniqueId1,
    tags: [
      { id: 'tag1' },
      { id: 'tag2' }
    ]
  },
  UTE_OUT: {
    type: ActionConst.UPDATE_TIMEENTRY,
    payload: {
      id: uniqueId2,
      startDateTime: '344/3435',
      endDateTime: '434/3434/24',
      jobId: uniqueId1,
      tags: [
        { id: 'tag1' },
        { id: 'tag2' }
      ]
    }
  }
}

describe('TimeEntryActionCreators', () => {
  it('create action to for CREATE_TIMEENTRY', () => {
    expect(TimeEntryActionCreators.createTimeEntry(timeET.CTE_INPUT.startDateTime,
      timeET.CTE_INPUT.endDateTime, timeET.CTE_INPUT.jobId, timeET.CTE_INPUT.tags))
      .toEqual(timeET.CTE_OUT)
  });
  it('create action for UPDATE_TIMEENTRY', () => {
    expect(TimeEntryActionCreators.updateTimeEntry(timeET.UTE_INPUT.id,
      timeET.UTE_INPUT.startDateTime, timeET.UTE_INPUT.endDateTime,
      timeET.UTE_INPUT.jobId, timeET.UTE_INPUT.tags))
      .toEqual(timeET.UTE_OUT);
  });
  it('create action for DELETE_TIMEENTRY', () => {
    const uniqueId3 = createGuid();
    const deleteTimeEntry = {
      type: ActionConst.DELETE_TIMEENTRY,
      payload: {
        id: uniqueId3
      }
    };
    expect(TimeEntryActionCreators.deleteTimeEntry(deleteTimeEntry.payload.id))
      .toEqual(deleteTimeEntry);
  });
});


