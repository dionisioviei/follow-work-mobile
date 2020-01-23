import React, { useState, useEffect } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

import api from '../../services/api';
import styles from './styles';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getToken() {
      const userToken = await AsyncStorage.getItem('userToken');
      userToken && navigation.navigate('Main');
    }

    getToken();
  }, []);

  async function handleSubmit() {
    if (!username || !password) {
      return Alert.alert(
        'Atenção',
        'Alguns campos estão em branco!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    }
    setLoading(true);
    try {
      const response = await api.post('/sessions', {
        username,
        password
      });

      if (response.data.error) {
        setLoading(false);
        return setWarning(response.data.error);
      }

      await AsyncStorage.setItem('userToken', response.data.token);
      await AsyncStorage.setItem('userType', response.data.type);
      await AsyncStorage.setItem('userName', response.data.username);
      setLoading(false);
      navigation.navigate('Main');
    } catch (e) {
      setLoading(false);
      console.log(e);
      return Alert.alert(
        'Erro de conexão!',
        'Verifique se está conectado a internet! ' + e,
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
      <Text style={styles.warningText}>{warning}</Text>
      <TextInput
        value={username}
        onChangeText={username => setUsername(username)}
        placeholder={'Usuário'}
        style={styles.input}
        autoCapitalize={'none'}
      />
      <TextInput
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder={'Senha'}
        secureTextEntry={true}
        style={styles.input}
        autoCapitalize={'none'}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        {!loading ? (
          <Text style={styles.buttonText}>Entrar</Text>
        ) : (
          <ActivityIndicator size='small' color='#FFFF' />
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
