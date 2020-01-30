import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

import Card from '../components/Card';
import styles from './styles';
import api from '../../services/api';
import getUserData from '../../utils/getUserData';
import alertDialog from '../../utils/alertDialog';

export default function Works({ navigation }) {
  const [works, setWorks] = useState(null);

  useEffect(() => {
    async function getWorks() {
      const { token } = await getUserData();

      try {
        const response = await api.get('/works', {
          headers: { 'x-access-token': token }
        });

        if (response.data.error) {
          return alertDialog(response.data.error);
        }
        setWorks(response.data);
      } catch (e) {
        console.log(e);
        return alertDialog('Verifique se está conectado a internet! ' + e);
      }
    }

    getWorks();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <Text style={styles.title}>Suas Obras</Text>
        {works ? (
          works.map(work => {
            return (
              <Card
                key={work._id}
                id={work._id}
                name={work.name}
                userManager={work.userManager}
                date={work.createdAt}
                navigateTo={() =>
                  navigation.navigate('WorkTimeLine', {
                    id: work._id
                  })
                }
              />
            );
          })
        ) : (
          <ActivityIndicator size={100}></ActivityIndicator>
        )}
      </ScrollView>
    </View>
  );
}
