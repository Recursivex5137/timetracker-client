import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  columnLayout: {
    flex: 1,
    flexDirection: 'column'
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
    color: '#1f72ba'
  }
});

export { globalStyles }