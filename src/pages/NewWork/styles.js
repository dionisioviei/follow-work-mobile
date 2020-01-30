import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 60,
    width: '100%'
  },
  loadingView: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#7777',
    borderStyle: 'solid',
    borderRadius: 10,
    borderColor: 'rgb(37, 36, 44)',
    padding: 10,
    borderWidth: 2,
    borderColor: '#666666',
    marginBottom: 10,
    color: '#FFF',
    fontSize: 18
  },
  inputStep: {
    width: 400,
    height: 50,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666666',
    backgroundColor: '#7777',
    marginBottom: 10,
    color: '#FFF',
    fontSize: 18
  },
  picker: {
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#666666',
    backgroundColor: '#7777',
    marginBottom: 10,
    color: '#FFF'
  },
  button: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#F25000',
    backgroundColor: '#F25000',
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
  label: {
    fontSize: 22,
    color: '#FFF',
    marginBottom: 15
  },
  stepLabel: {
    fontSize: 16,
    color: '#F25000',
    marginBottom: 5
  }
});

export default styles;
