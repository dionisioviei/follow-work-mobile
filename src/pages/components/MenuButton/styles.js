import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'roboto-light': require('../../../assets/fonts/Roboto-Light.ttf')
  });
}
loadFonts();
const styles = StyleSheet.create({
  menuButton: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    paddingVertical: 50,
    borderRadius: 10,
    width: '90%',
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#F25000',
    backgroundColor: '#F25000',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4
    },
    elevation: 2
  },
  menuButtonText: {
    color: '#FFFF',
    fontSize: 32,
    marginLeft: 20,
    fontFamily: 'roboto-light'
  }
});

export default styles;
