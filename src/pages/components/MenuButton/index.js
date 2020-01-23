import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

export default function MenuButton({ title, icon }) {
  return (
    <TouchableOpacity style={styles.menuButton}>
      <FontAwesome5 name={icon} size={40} color='#FFF' />
      <Text style={styles.menuButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}
