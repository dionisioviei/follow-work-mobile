import React, { useState, useEffect, Fragment } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Picker
} from 'react-native';

import styles from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import api from '../../services/api';
import getUserData from '../../utils/getUserData';
import { alertDialog } from '../../utils/alertDialog';
import {
  persistNavigationState,
  loadNavigationState
} from '../../utils/navigationState';
import Container from '../components/Container';
import Toast from 'react-native-tiny-toast';

export default function NewWork({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    workName: '',
    workDescription: '',
    workUserManager: '',
    usersManager: null,
    stepFields: [{ name: '' }]
  });

  const toastOptions = {
    containerStyle: {
      backgroundColor: '#F25000'
    },
    textStyle: {
      fontSize: 16
    },
    mask: true,
    maskColor: 'rgba(0,0,0,0.5)',
    onHidden: () => navigation.navigate('Main')
  };

  useEffect(() => {
    async function getState() {
      const data = await loadNavigationState('newwork-state');
      if (data) {
        setFields(data);
      }
    }
    getState();
  }, []);

  useEffect(() => {
    async function setLocalState() {
      await persistNavigationState(fields, 'newwork-state');
    }
    setLocalState();
  });

  async function handleSubmit() {
    if (!fields.workName) return alertDialog('Campo Nome da Obra está vazio!');
    if (!fields.usersManager || fields.usersManager === 'none')
      return alertDialog(
        'A obra precisa ter um Responsável! (se não houver, cadastre um usuário)'
      );
    if (fields.stepFields.length < 1)
      return alertDialog('Precisa ter ao menos uma Etapa!');
    setLoading(true);

    const steps = fields.stepFields.map((step, index) => {
      step.order = index + 1;
      step.done = false;
      step.img = { data: 'none', contentType: 'image/jpeg' };
      return step;
    });

    const newWork = {
      name: fields.workName,
      description: fields.workDescription,
      userManager: fields.workUserManager,
      steps
    };
    const { token } = await getUserData();
    try {
      const response = await api.post('/works', newWork, {
        headers: { 'x-access-token': token }
      });
      if (response.data.error) {
        return alertDialog(response.data.error);
      }
      setLoading(false);
      setFields({
        workName: '',
        workDescription: '',
        workUserManager: '',
        usersManager: null,
        stepFields: [{ name: '' }]
      });
      Toast.showSuccess('Cadastrado com sucesso!', toastOptions);
    } catch (e) {
      console.log(e);
      setLoading(false);
      return alertDialog('Verifique se está conectado a internet! ' + e);
    }
  }

  function handleStepField(inputname, index) {
    const values = [...fields.stepFields];
    values[index].name = inputname;
    setFields(fields => ({ ...fields, stepFields: values }));
  }

  function addStepField() {
    const values = [...fields.stepFields];
    values.push({ name: '' });
    setFields(fields => ({ ...fields, stepFields: values }));
  }
  function removeStepField(index) {
    const values = [...fields.stepFields];
    if (values.length === 1)
      return alertDialog('Precisa ter ao menos uma Etapa');

    values.splice(index, 1);
    setFields(fields => ({ ...fields, stepFields: values }));
  }

  useEffect(() => {
    async function getUsers() {
      const { token } = await getUserData();

      try {
        const response = await api.get('/users', {
          headers: { 'x-access-token': token }
        });

        if (response.data.error) {
          return alertDialog(response.data.error);
        }
        setFields(fields => ({ ...fields, usersManager: response.data }));
      } catch (e) {
        console.log(e);
        return alertDialog('Verifique se está conectado a internet! ' + e);
      }
    }
    getUsers();
  }, []);

  return (
    <Container>
      <Text style={styles.label}>Nome da Obra</Text>
      <TextInput
        value={fields.workName}
        onChangeText={workname =>
          setFields(fields => ({ ...fields, workName: workname }))
        }
        placeholder={'Ex. Casa do José'}
        style={styles.input}
        autoCapitalize={'words'}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        value={fields.workDescription}
        onChangeText={workdescription =>
          setFields(fields => ({ ...fields, workDescription: workdescription }))
        }
        placeholder={'Ex. Construção da casa do José'}
        secureTextEntry={true}
        style={styles.input}
        autoCapitalize={'none'}
        multiline={true}
      />
      <Text style={styles.label}>Selecione um Responsável</Text>
      <Picker
        selectedValue={fields.workUserManager}
        style={styles.picker}
        mode={'dropdown'}
        onValueChange={(itemValue, itemIndex) =>
          setFields(fields => ({ ...fields, workUserManager: itemValue }))
        }
      >
        {fields.usersManager ? (
          fields.usersManager.map(user => (
            <Picker.Item
              key={user.username}
              label={user.username}
              value={user.username}
            />
          ))
        ) : (
          <Picker.Item label={'nenhum'} value={'none'} />
        )}
      </Picker>
      <Text style={styles.label}>
        Etapas
        <FontAwesome5
          name={'plus-circle'}
          onPress={addStepField}
          size={40}
          color='#F25000'
        />
      </Text>
      {fields.stepFields.map((stepField, index) => (
        <Fragment key={`${stepField}-${index}`}>
          <Text style={styles.stepLabel}>{`${index + 1}ª`} Etapa</Text>
          <View style={styles.inputView}>
            {index !== 0 && (
              <FontAwesome5
                name={'minus-circle'}
                onPress={() => removeStepField(index)}
                size={40}
                color='#d11f00'
              />
            )}
            <TextInput
              value={stepField.name}
              onChangeText={name => handleStepField(name, index)}
              placeholder={'Ex. Descrição da Etapa'}
              style={
                index === 0
                  ? { ...styles.inputStep, width: '100%' }
                  : styles.inputStep
              }
              autoCapitalize={'words'}
            />
          </View>
        </Fragment>
      ))}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        {!loading ? (
          <Text style={styles.buttonText}>Cadastrar!</Text>
        ) : (
          <ActivityIndicator size='small' color='#FFFF' />
        )}
      </TouchableOpacity>
    </Container>
  );
}
