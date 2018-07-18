import React, { Component } from 'react';
import { View, Text, DatePickerIOS, StyleSheet, Button, Alert } from 'react-native';

export default class TimeTrackerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  saveButton() {
    Alert.alert("Hello you have pressed the save button");
  }

  render() {
    return (
      <View styles={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        ></DatePickerIOS>
        <Button onPress={() => this.saveButton()} title="Save" color="#841584"></Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});