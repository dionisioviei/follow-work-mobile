import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center'
  },
  welcomeMessage: {
    fontSize: 24,
    color: '#FFFF',
    padding: 15
  },
  logoutText: {
    color: '#F25000',
    fontSize: 20,
    marginLeft: 20
  },
  logout: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width: '90%',
    maxHeight: 50,
    borderWidth: 1,
    borderColor: '#FFFF',
    backgroundColor: '#FFFF'
  }
});

export default styles;
