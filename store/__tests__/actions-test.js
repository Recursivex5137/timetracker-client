import { createGuid } from '../../utility/guid';
import { JobActionCreators, ActionConst } from '../actions';
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


