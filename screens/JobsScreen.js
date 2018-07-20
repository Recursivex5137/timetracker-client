import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { globalStyles } from '../components/GlobalStyle';

import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';


class JobsScreen extends Component {

  static navigationOptions = {
    title: 'Jobs',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <View >
        <Button title='New Job' onPress={() => alert('Hi stinker')}></Button>
      </View>
    )
  }

  _onPressNavigate = (navigateToRoute) => {
    this.props.navigation.navigate(navigateToRoute);
  }


  constructor(props) {
    super(props);

    // this._onPressNavigate = this._onPressNavigate.bind(this);
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
        <Button title='New Job' onPress={() => this._onPressNavigate('CreateJob')}></Button>
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


