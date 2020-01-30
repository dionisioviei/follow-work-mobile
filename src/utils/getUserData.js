import { AsyncStorage } from 'react-native';

export default async function getUserData() {
  const token = await AsyncStorage.getItem('userToken');
  const type = await AsyncStorage.getItem('userType');
  const username = await AsyncStorage.getItem('userName');

  return {
    token,
    type,
    username
  };
}
