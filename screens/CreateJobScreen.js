import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../components/GlobalStyle';

class CreateJobScreen extends Component {

  static navigationOptions = {
    title: 'Create Job',
    headerLeft: (
      <Button style={globalStyles.paddingLeft20} title='Cancel' onPress={() => alert('Back')}></Button>
    ),
    headerRight: (
      <Button style={globalStyles.paddingRight20} title='Save Job' onPress={() => alert('Save Job')}></Button>
    )
  }

  constructor(props) {
    super(props);
    this.state = { jobName: '', jobNumber: null };
  }


  render() {
    return (
      <View style={globalStyles.columnLayout}>
        <Text style={globalStyles.textInstruction}>Please Enter your Job Name and Number</Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder='Job Name'
          onChangeText={(text) => this.setState({ jobName: text })}
          value={this.state.text}
        ></TextInput>

        <TextInput
          style={globalStyles.textInput}
          placeholder='Job Number'
          keyboardType='numeric'
          onChangeText={(num) => this.setState({ jobNumber: num })}
          value={this.state.text}
        ></TextInput>
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

export default CreateJobScreen;