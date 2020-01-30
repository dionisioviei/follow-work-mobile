import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

import styles from './styles';

export default function Card(props) {
  const formatedDate = format(
    parseISO(props.date),
    "dd 'de' MMMM', às ' HH:mm'h'",
    { locale: pt }
  );
  return (
    <TouchableOpacity style={styles.container} onPress={props.navigateTo}>
      <View style={styles.cardIconLeft}>
        <FontAwesome5 name={'building'} size={40} color='#d6d6d6' />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.info}>{`Responsável: ${props.userManager}`}</Text>
        <Text style={styles.info}>{`Criado em ${formatedDate}`}</Text>
      </View>
      <TouchableOpacity
        style={styles.cardIconRight}
        onPress={() => console.log('excluir')}
      >
        <FontAwesome5 name={'trash-alt'} size={30} color='#c70000' />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
