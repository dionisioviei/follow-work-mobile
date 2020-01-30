import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  height: 220px;
  background: #1d1d1d;
`;

export const ObjectContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const Line = styled.View`
  border-left-color: #414141;
  border-left-width: 6px;
  height: 120%;
  margin-top: -1px;
`;

export const Circle = styled.View`
  width: 12px;
  height: 12px;
  background: ${props => (props.done ? '#FD5000' : '#44434B')};
  z-index: 1;
  border-radius: 50px;
`;

export const Box = styled.View`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #292929;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-right-color: #fd5000;
  border-right-width: 6px;
  box-shadow: 10px 5px 5px black;
  elevation: 6;
  shadow-offset: 5px 5px;
  shadow-color: #000;
  shadow-opacity: 0.5;
  shadow-radius: 10px;
  padding-left: 20px;
  padding-right: 13px;
  padding-top: 10px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const MiddleBox = styled.View`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #ffff;
`;

export const Footer = styled.View`
  width: 100%;
  height: 45px;
  flex-shrink: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.Text`
  color: #9f9c9c;
  font-size: ${props => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: normal;
  text-align: center;
`;

export const FooterTextDate = styled(FooterText)`
  font-size: 16px;
`;
export const PhotoBox = styled.View`
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

export const PhotoButton = styled.TouchableOpacity`
  width: 81px;
  height: 81px;
  flex-shrink: 1;
  margin-bottom: 20px;
  background: #fd5000;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
