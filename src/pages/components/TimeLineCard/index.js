import React from 'react';

import {
  Container,
  Line,
  Circle,
  ObjectContainer,
  Box,
  Title,
  MiddleBox,
  Footer,
  FooterTextDate,
  FooterText,
  PhotoBox,
  PhotoButton
} from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TimeLineCard(props) {
  return (
    <Container>
      <ObjectContainer>
        <Circle done={props.done} />
        <Line />
      </ObjectContainer>
      <Box disabled={props.state !== 'done' && props.state !== 'next'}>
        <Title>Assentamento do Piso</Title>
        {props.state === 'done' ? (
          <>
            <MiddleBox></MiddleBox>
            <Footer>
              <FooterText fontSize={14}>
                <FontAwesome5 name={'user-alt'} color='#9f9c9c' /> dionisioviei
              </FooterText>
              <FooterTextDate>
                <FontAwesome5 name={'check-circle'} color='#FD5000' /> 27 de
                Janeiro de 2019
              </FooterTextDate>
            </Footer>
          </>
        ) : (
          <PhotoBox>
            {props.state === 'next' ? (
              <>
                <PhotoButton>
                  <FontAwesome5 name={'camera'} size={45} color='#FFFF' />
                </PhotoButton>
                <FooterText fontSize={15}>
                  Clique no icone da câmera para adicionar uma foto
                </FooterText>
              </>
            ) : (
              <>
                <FooterText fontSize={22}>
                  Termine o passo anterior para poder adicionar uma foto
                </FooterText>
              </>
            )}
          </PhotoBox>
        )}
      </Box>
    </Container>
  );
}
