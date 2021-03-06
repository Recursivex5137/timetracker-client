import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TodoExampleScreen from '../screens/TodoExampleScreen';
import TimeTrackerScreen from '../screens/TimeTrackerScreen';
import JobsScreen from '../screens/JobsScreen';
import CreateJobScreen from '../screens/CreateJobScreen';
import TimeEntriesScreen from '../screens/TimeEntriesScreen';
import CreateTimeEntryScreen from '../screens/CreateTimeEntryScreen';

/** 
 * TODO: TimeTab -> TimeEntriesScreen -> TimeEntry
 * 
 * TODO: JobScreen -> TimeEntriesScreen for all times associated with this Job
 * TODO: JobScreen -> TimeEntryScreen for creating time entries
 * 
 * RESEARCH: Tag system -> filtering > adminCreatedTags > userCreatedTags 
 * 
 * TODO: TimeEntryScreen fields 
 * { startDateTime, endDateTime, jobId, tags:[tag1Id,tag2Id,tag3Id]}
 * TODO: TimeEntryScreen for Android
 * TODO: TimeEntryScreen for IOS
 * 
 * DONE: Create tests for redux JobActionCreators
 * DONE: Create tests for existing reducers in jobs state
 * DONE: Create tests for the TimeEntries state
 * DONE: Create the TimeEntries state
 * TODO: Create the tags tests
 * TODO: Create the tags state
 * 
 * TODO: TagsScreen display > deletion -> TagEntryScreen 
 * 
 * TODO: TagEntryScreen > creation > modification fields ?? field description needed?
 * { id, name, description, timeEntries: [time1Id, time2Id, time3Id]}
 * 
 * 
 * RESEARCH: Sync/Export options realtime/nonrealtime automaticSync/manualSync
 * 
 * TODO: SettingsTab -> SettingsScreen > notificationEntryTimeAlarm 
 *           > BreakTime.On.OffPayroll > Sync/Export.automatic/manual 
 * 
 * RESEARCH: Check if need scheduling or notes in Jobs or tests 
 * 
 */

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const TimeEntryStack = createStackNavigator({
  TimeEntries: {
    screen: TimeEntriesScreen,
  },
  CreateTimeEntry: {
    screen: CreateTimeEntryScreen,
  }
});

TimeEntryStack.navigationOptions = {
  tabBarLabel: 'Time',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const TodoExampleStack = createStackNavigator({
  Todo: TodoExampleScreen,
});

TodoExampleStack.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const TimeTrackerStack = createStackNavigator({
  Time: TimeTrackerScreen,
});

TimeTrackerStack.navigationOptions = {
  tabBarLabel: 'Time',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

const JobStack = createStackNavigator({
  Jobs: {
    screen: JobsScreen,
  },
  CreateJob: {
    screen: CreateJobScreen,
  }
});

const FullJobStack = createStackNavigator({
  JobStack
},
  {
    mode: 'card',
    headerMode: 'none'
  });

FullJobStack.navigationOptions = {
  tabBarLabel: 'Jobs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
}

export default createBottomTabNavigator({
  FullJobStack,
  TimeEntryStack,
  HomeStack,
  SettingsStack,
  TodoExampleStack,
  TimeTrackerStack
});
