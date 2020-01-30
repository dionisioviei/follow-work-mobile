import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 6,
    elevation: 3,
    width: '100%',
    backgroundColor: 'rgb(19, 18, 23)',
    borderLeftColor: '#F25000',
    borderLeftWidth: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10
  },
  cardIconLeft: {
    marginHorizontal: 18,
    marginVertical: 18
  },
  cardIconRight: {
    marginVertical: 24,
    marginLeft: 'auto',
    marginRight: 25,
    zIndex: 6
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  info: {
    fontSize: 14,
    color: '#FFFFFF'
  }
});

export default styles;
