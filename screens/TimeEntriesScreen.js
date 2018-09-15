import React, { Component } from 'react';
import { globalStyles } from '../components/GlobalStyle';

import { View, Text, StyleSheet, Modal, Button, FlatList, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { JobActionCreators } from '../store/actions';
import format from 'date-fns/format';
import DateFns from 'date-fns';


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
    alert(`You have pressed this: ${item}`);
  }

  _formatDateTime = (dateTime) => {
    return DateFns.format(dateTime, 'YYYY/MM/DD');
  }

  _differenceInTime = (earlierDateT, laterDateT) => {
    const differenceDays = DateFns.differenceInDays(laterDateT, earlierDateT);
    const differenceHours = DateFns.differenceInHours(laterDateT, earlierDateT);
    const differenceMinutes = DateFns.differenceInMinutes(laterDateT, earlierDateT);

    return differenceDays > 0 ? `Days ${differenceDays}, Hrs ${differenceHours}, Min ${differenceMinutes}` :
      `Hrs ${differenceHours} Min ${differenceMinutes}`;
  }

  _renderTimeEntriesInList = ({ item }) => (
    <TouchableOpacity onPress={() => this._onPress(`the job id: ${item.jobId}`)}>
      <Text style={globalStyles.dateTimeText}>{this._differenceInTime(item.startDateTime, item.endDateTime)}</Text>
    </TouchableOpacity>
  );

  render() {

    const data = [
      {
        id: 'ioioj3434-3483948',
        startDateTime: new Date('2018-03-23T07:15:00'),
        endDateTime: new Date('2018-03-23T07:24:00'),
        jobId: '8lj98j',
        tags: [
          { id: 'tag1' },
          { id: 'tag2' }
        ]
      },
      {
        id: 'ojijofishh-joiohih',
        startDateTime: new Date('2018-03-23T07:34:00'),
        endDateTime: new Date('2018-03-23T07:54:00'),
        jobId: '34324jo',
        tags: [
          { id: 'tag1' },
          { id: 'tag2' }
        ]
      },
      {
        id: 'dfsdfsdfij8-8989uj8',
        startDateTime: new Date('2018-03-23T07:12:00'),
        endDateTime: new Date('2018-03-23T07:25:00'),
        jobId: 'sdfsdf34',
        tags: [
          { id: 'tag1' },
          { id: 'tag2' }
        ]
      },
    ];

    return (
      <View style={globalStyles.columnLayout}>
        <FlatList
          data={data}
          renderItem={this._renderTimeEntriesInList}
          keyExtractor={(item, index) => item.id}
        />
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
