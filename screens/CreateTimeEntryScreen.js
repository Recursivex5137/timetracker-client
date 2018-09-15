import React, { Component } from 'react';
import { globalStyles } from '../components/GlobalStyle';

import { View, Text, StyleSheet, Modal, Button, FlatList, TimePickerAndroid, DatePickerAndroid, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
// import actions here

import DateFns from 'date-fns';

class CreateTimeEntryScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'CreateTimeEntryScreen',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button title='Hi' onPress={() => alert('Hello!')}></Button>
      ),
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      startDateTime: '',
      endDateTime: '',
      jobId: '',
    }
  }

  _onPress = (item) => {
    alert(`You have pressed this: item`);
  }

  _setModal(visible) {
    this.setState({ modalVisible: visible });
  }

  async _captureTime(field) {
    let modalV = this.state.modalVisible;
    let dt = {};

    // datePickerAndroid
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        dt.year = year;
        dt.month = month;
        dt.day = day;
      }
      // don't continue if datePicker is dismissed
      return;
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
      return;
    }
    // timePickerAndroid
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        dt.hour = hour;
        dt.minute = minute;
      }
      // don't continue if timePicker is dismissed
      return;
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
      return;
    }
    // update state
    console.log('dt obj', dt);
    if (field === 'startDateTime') {
      this.setState(
        {
          modalVisible: modalV,
          startDateTime: new Date(dt.year, dt.month, dt.day, dt.hour, dt.minute)
        });
    }
    if (field === 'endDateTime') {
      this.setState(
        {
          modalVisible: modalV,
          endDateTime: new Date(dt.year, dt.month, dt.day, dt.hour, dt.minute)
        });
    }
  }

  _formatDateTime = (dateTime) => {
    return DateFns.format(dateTime, 'YYYY/MM/DD');
  }

  render() {
    let entry = {
      id: 'ioioj3434-3483948',
      startDateTime: new Date('2018-03-23T07:15:00'),
      endDateTime: new Date('2018-03-23T07:24:00'),
      jobId: '8lj98j',
      tags: [
        { id: 'tag1' },
        { id: 'tag2' }
      ]
    }
    return (
      <View style={globalStyles.columnLayout}>
        <Text style={globalStyles.listText}>Hello There!</Text>
        <Button title='Start Time' onPress={() => this._captureTime('startDateTime')}></Button>
        <Text style={globalStyles.listText}>{this._formatDateTime(this.state.startDateTime)}</Text>
        <Button title='End Time' onPress={() => this._captureTime('endDateTime')}></Button>
        <Text style={globalStyles.listText}>{this._formatDateTime(this.state.endDateTime)}</Text>

        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}>
          <View style={globalStyles.paddingTop20}>
            <View></View>
          </View>
        </Modal>
      </View>
    );
  }
}

// State 
const mapStateToProps = (state) => {
  return {
    items: state.items
  }
};

// connect is a higher order function that takes in a 
// function that takes in state and maps 
// them to the passed in class 
export default connect(mapStateToProps)(CreateTimeEntryScreen);
