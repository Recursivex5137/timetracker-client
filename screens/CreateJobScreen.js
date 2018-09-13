import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../components/GlobalStyle';

import { connect } from 'react-redux';
import { JobActionCreators } from '../store/actions';
import { findObject } from '../utility/utility';

class CreateJobScreen extends Component {

  static navigationOptions = {
    title: 'Create Job',
  }

  constructor(props) {
    super(props);

    // get nav param but provide fallback
    let jobId = this.props.navigation.getParam('jobId', '');
    this.paramJobId = jobId;
    console.log('props:  ', this.props.jobs.jobs, 'second tyr');
    if (jobId !== '' && this.props.jobs.jobs !== undefined) {
      //find obj can't run with undefined
      const updatedState = findObject(this.props.jobs.jobs, 'id', jobId);
      this.state = {
        jobId: updatedState.id,
        jobName: updatedState.name,
        jobNumber: updatedState.number
      };
      console.log('jobId: ', jobId, 'updatedState', updatedState);
    } else {
      this.state = { jobName: '', jobNumber: null };
    }

  }

  _saveJobs = (jobObj) => {
    //check if jobObj is not null or empty
    if (jobObj.jobName === '') {
      alert('Please enter a name for the job.');
      return;
    }
    if (jobObj.jobNumber === null) {
      alert('Please enter the number for the job.');
      return;
    }
    //take out whitespace at both edges of the string
    jobObj.jobName = jobObj.jobName.trim();
    // dispatch
    // check if has a jobId then do update
    if (jobObj.jobId) {
      this.props.dispatch(JobActionCreators.updateJob(jobObj.jobId, jobObj.jobName, jobObj.jobNumber));
    } else {
      this.props.dispatch(JobActionCreators.addJob(jobObj.jobName, jobObj.jobNumber));
    }
    // navigate to Jobs screen
    this.props.navigation.navigate('Jobs');
  }

  render() {
    return (
      <View style={globalStyles.columnLayout}>
        <Text>paramJobId {this.paramJobId}</Text>
        <Text style={globalStyles.textInstruction}>Please Enter your Job Name and Number</Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder='Job Name'
          onChangeText={(text) => this.setState({ jobName: text })}
          value={this.state.jobName}
        ></TextInput>

        <TextInput
          style={globalStyles.textInput}
          placeholder='Job Number'
          keyboardType='numeric'
          onChangeText={(num) => this.setState({ jobNumber: num })}
          value={this.state.jobNumber}
        ></TextInput>
        <Button
          title='Save Job'
          onPress={() => this._saveJobs(this.state)}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listText: {
    backgroundColor: 'whitesmoke',
    color: '#1f72ba',
    fontSize: 24,
    padding: 10,
  }
});

//State
const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
};

export default connect(mapStateToProps)(CreateJobScreen);