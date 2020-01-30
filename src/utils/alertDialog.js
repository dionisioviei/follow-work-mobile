import { Alert } from 'react-native';

export const alertDialog = message => {
  return Alert.alert('Atenção', message, [{ text: 'OK' }], {
    cancelable: false
  });
};
