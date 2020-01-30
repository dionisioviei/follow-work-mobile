import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import getUserData from '../../utils/getUserData';
import signOut from '../../utils/signOut';
import { FontAwesome5 } from '@expo/vector-icons';
import MenuButton from '../components/MenuButton';
import styles from './styles';

export default function Main({ navigation }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function loadData() {
      const userData = await getUserData();
      setUserData(userData);
    }

    loadData();
  }, []);

  if (Object.keys(userData).length === 0)
    return <ActivityIndicator size={'large'} />;

  return (
    <View style={styles.container}>
      {userData.username && (
        <Text style={styles.welcomeMessage}>
          Bem vindo {userData.username} !
        </Text>
      )}
      <MenuButton
        title={'Nova Obra'}
        icon={'drafting-compass'}
        visible={{ to: 'admin', userRole: userData.type }}
        navigateTo={() => navigation.navigate('NewWork')}
      />
      <MenuButton
        title={'Acompanhar Obra'}
        icon={'building'}
        visible={{ to: 'all', userRole: userData.type }}
        navigateTo={() => navigation.navigate('Works')}
      />
      <MenuButton
        title={'Usuários'}
        icon={'users'}
        visible={{ to: 'admin', userRole: userData.type }}
      />
      <TouchableOpacity
        onPress={() => signOut(navigation)}
        style={styles.logout}
      >
        <FontAwesome5 name={'sign-out-alt'} size={30} color='#F25000' />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
