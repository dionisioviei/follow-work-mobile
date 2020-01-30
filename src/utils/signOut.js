import { AsyncStorage } from 'react-native';

export default async function signOut(navigation) {
  await AsyncStorage.clear();
  navigation.navigate('AuthLoading');
}
