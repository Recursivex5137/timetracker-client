import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { globalStyles } from '../components/GlobalStyle';

import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';


class JobsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Jobs',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button title='New Job' onPress={() => navigation.navigate('CreateJob')}></Button>
      )
    }
  }


  constructor(props) {
    super(props);
  }

  _onPress = (item) => {
    alert(`You have pressed this: ${item.title}`);
  }

  _renderItemInList = ({ item }) => (
    <TouchableOpacity onPress={() => this._onPress(item)}>
      <Text style={globalStyles.listText}>{item.title}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={globalStyles.columnLayout}>
        <FlatList
          data={[{ jobName: 'Custom Trim', jobNumber: 3324, key: 'item1' }, { title: 'Southern Blvd', jobNumber: 33234, key: 'item2' }]}
          renderItem={this._renderItemInList}
        />
      </View>
    );
  }
}

JobsScreen.propTypes = {

};

export default JobsScreen;


