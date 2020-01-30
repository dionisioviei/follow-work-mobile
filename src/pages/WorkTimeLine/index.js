import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import TimeLineCard from '../components/TimeLineCard';

import api from '../../services/api';
import getUserData from '../../utils/getUserData';
import alertDialog from '../../utils/alertDialog';

export default function WorkTimeLine({ navigation }) {
  const [steps, setSteps] = useState(null);

  const { id } = navigation.state.params;

  /*   useEffect(() => {
    async function getSteps() {
      const { token } = await getUserData();

      try {
        const response = await api.get(`/works/${id}/steps`, {
          headers: { 'x-access-token': token }
        });

        if (response.data.error) {
          return alertDialog(response.data.error);
        }
        setSteps(response.data.steps);
      } catch (e) {
        console.log(e);
        return alertDialog('Verifique se está conectado a internet! ' + e);
      }
    }

    getSteps();
  }, []); */

  return (
    <View>
      <TimeLineCard />
    </View>
  );
}
