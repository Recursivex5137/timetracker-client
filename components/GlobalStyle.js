import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  columnLayout: {
    flex: 1,
    flexDirection: 'column'
  },
  paddingTop20: {
    paddingTop: 20
  },
  paddingRight20: {
    paddingRight: 20
  },
  paddingLeft20: {
    paddingLeft: 20
  },
  padding10: {
    padding: 10
  },
  textInput: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    fontSize: 24,
  },
  textInstruction: {
    padding: 10,
    fontSize: 16,
    color: '#1f72ba' // should be different color to denote instruction
  },
  listText: {
    backgroundColor: 'whitesmoke',
    color: '#1f72ba',
    fontSize: 24,
    padding: 10,
  }
});

export { globalStyles }