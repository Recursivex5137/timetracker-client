import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { globalStyles } from '../components/GlobalStyle';

import { View, Text, StyleSheet, Modal, Button, FlatList, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { JobActionCreators } from '../store/actions';

class JobsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Jobs',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button title='New Job' onPress={() => navigation.navigate('CreateJob')}></Button>
      ),
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedJob: { id: '', name: '', number: null }
    };
  }

  _setModal(visible, item, actionToTake) {
    // close modal and edit job
    if (visible === false && actionToTake === 'update') {
      this.setState({
        modalVisible: visible,
        selectedJob: { id: '', name: '', number: null }
      });
      this._navigateToJob(item)
    }
    // close modal and delete the job that is currently selected
    if (visible === false && actionToTake === 'delete') {
      // set state empty
      this.setState({
        modalVisible: visible,
        selectedJob: { id: '', name: '', number: null }
      });
      //navigate
      this._deleteJob(item);
    }

    // if item passed means we wanted to set selectedJob 
    // if not probably just closing the modal
    if (item) {
      this.setState({ modalVisible: visible, selectedJob: item });
    } else {
      this.setState({
        modalVisible: visible,
        selectedJob: { id: '', name: '', number: null }
      });
    }
  }

  _printData(data) {
    console.log('data : ', data);
    return data
  }

  _navigateToJob = (item) => {
    this.props.navigation.navigate('CreateJob', { jobId: item.id });
  }

  _deleteJob = (item) => {
    this.props.dispatch(JobActionCreators.deleteJob(item.id));
  }

  _onPress = (item) => {
    alert(`You have pressed this: ${item.name}`);
  }

  _renderItemInList = ({ item }) => (
    <TouchableOpacity onPress={() => this._setModal(true, item)}>
      <Text style={globalStyles.listText}>{item.name}</Text>
      <Text style={globalStyles.listText}>{item.number}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={globalStyles.columnLayout}>
        <FlatList
          data={this.props.jobs.jobs}
          renderItem={this._renderItemInList}
          keyExtractor={(item, index) => item.id}
        />
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}
        >
          <View style={globalStyles.paddingTop20}>
            <View>
              <Text>Hello there!</Text>
              <Text>{this.state.selectedJob.id}</Text>
              <Text>{this.state.selectedJob.name}</Text>
              <Text>{this.state.selectedJob.number}</Text>
              <Button
                title='Edit Job'
                onPress={() => this._setModal(false, this.state.selectedJob, 'update')}
              ></Button>
              <Button
                title='Delete Job'
                onPress={() => this._setModal(false, this.state.selectedJob, 'delete')}
              ></Button>
              <Button
                title='Close Modal'
                onPress={() => this._setModal(false)}
              ></Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}


// State 
const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
};

// connect is a higher order function that takes in a function that takes in state and maps 
// them to the passed in class
// export default connect(mapStateToProps)(JobsScreen);
export default connect(mapStateToProps)(JobsScreen);

