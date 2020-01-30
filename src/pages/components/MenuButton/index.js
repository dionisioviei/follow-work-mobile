import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

export default function MenuButton({ title, icon, visible, navigateTo }) {
  if (visible.to !== visible.userRole && visible.to !== 'all') return null;
  return (
    <TouchableOpacity onPress={navigateTo} style={styles.menuButton}>
      <FontAwesome5 name={icon} size={40} color='#FFF' />
      <Text style={styles.menuButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}
