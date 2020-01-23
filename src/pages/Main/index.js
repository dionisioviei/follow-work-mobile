import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import MenuButton from '../components/MenuButton';
import api from '../../services/api';
import styles from './styles';

export default function Main({ navigation }) {
  const [userData, setUserData] = useState({});

  async function signOut() {
    console.log('saiu');
    await AsyncStorage.clear();
    navigation.navigate('AuthLoading');
  }

  useEffect(() => {
    async function getUserData() {
      const token = await AsyncStorage.getItem('userToken');
      const type = await AsyncStorage.getItem('userType');
      const username = await AsyncStorage.getItem('userName');

      setUserData({
        token,
        type,
        username
      });
    }
    getUserData();
  }, []);
  return (
    <View style={styles.container}>
      {userData.username && (
        <Text style={styles.welcomeMessage}>
          Bem vindo {userData.username} !
        </Text>
      )}
      <MenuButton title={'Nova Obra'} icon={'drafting-compass'} />
      <MenuButton title={'Acompanhar Obra'} icon={'building'} />
      <MenuButton title={'Usuários'} icon={'users'} />
      <TouchableOpacity onPress={signOut} style={styles.logout}>
        <FontAwesome5 name={'sign-out-alt'} size={30} color='#F25000' />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
