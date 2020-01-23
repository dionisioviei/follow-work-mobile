import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

// import { Container } from './styles';

export default function pages({ navigation }) {
  useEffect(() => {
    async function bootstrapAsync() {
      const userToken = await AsyncStorage.getItem('userToken');
      navigation.navigate(userToken ? 'App' : 'Auth');
    }

    bootstrapAsync();
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
      <StatusBar barStyle='default' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center'
  }
});
