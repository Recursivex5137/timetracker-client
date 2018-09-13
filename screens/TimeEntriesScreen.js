import React, { Component } from 'react';
import { globalStyles } from '../components/GlobalStyle';

import { View, Text, StyleSheet, Modal, Button, FlatList, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { JobActionCreators } from '../store/actions';

class TimeEntriesScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'TimeEntriesScreen',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button title='New Time' onPress={() => navigation.navigate('CreateTimeEntry')}></Button>
      ),
    }
  }

  constructor(props) {
    super(props);
  }

  _onPress = (item) => {
    alert(`You have pressed this: item`);
  }

  render() {
    return (
      <View style={globalStyles.columnLayout}>
        <Text>Hello There!</Text>
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
export default connect(mapStateToProps)(TimeEntriesScreen);
