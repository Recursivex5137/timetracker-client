import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

import { Header, IconButton } from '../components';

class JobsScreen extends Component {

  static navigationOptions = {
    title: 'Jobs',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <View >
        <Button title='New Job' onPress={() => alert('New Job')}></Button>
      </View>
    )
  }


  constructor(props) {
    super(props);
  }

  _onPress = (item) => {
    alert(`You have pressed this: ${item.title}`);
  }

  _renderItemInList = ({ item }) => (
    <TouchableOpacity onPress={() => this._onPress(item)}>
      <Text style={styles.listText}>{item.title}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.layout}>
        <FlatList
          data={[{ title: 'title Text', key: 'item1' }, { title: 'title Text2', key: 'item2' }]}
          renderItem={this._renderItemInList}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1
  },
  headerRight: {
    paddingRight: 20
  },
  listText: {
    backgroundColor: 'whitesmoke',
    color: '#1f72ba',
    fontSize: 24,
    padding: 10,
  }
});

JobsScreen.propTypes = {

};

export default JobsScreen;


