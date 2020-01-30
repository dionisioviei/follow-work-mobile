import { AsyncStorage } from 'react-native';

const persistNavigationState = async (navState, persistenceKey) => {
  try {
    await AsyncStorage.setItem(persistenceKey, JSON.stringify(navState));
  } catch (err) {
    console.log(err);
  }
};

const loadNavigationState = async persistenceKey => {
  const jsonString = await AsyncStorage.getItem(persistenceKey);
  return JSON.parse(jsonString);
};

export { persistNavigationState, loadNavigationState };
