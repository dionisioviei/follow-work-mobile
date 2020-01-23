import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingView: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2f3236',
    marginBottom: 10,
    color: '#FFF',
    fontSize: 18
  },
  button: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2f3236',
    backgroundColor: '#2f3236',
    marginBottom: -200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFF'
  },
  loadingText: {
    fontSize: 24,
    color: '#FFFF'
  },
  warningText: {
    fontSize: 18,
    color: '#e30606',
    marginBottom: 10
  },
  image: {
    zIndex: 5,
    position: 'absolute',
    top: 130
  }
});

export default styles;
