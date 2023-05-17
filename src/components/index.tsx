import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

const HeaderComp = ({goBack, text}) => {
  const navigation = useNavigation();
  return (
    <MainContainer>
      {!!goBack ? (
        <TouchableOpacity
          onPress={!!goBack ? goBack : () => navigation.goBack()}>
          <GoBackText>GoBack</GoBackText>
        </TouchableOpacity>
      ) : (
        <Text />
      )}
      <Text>{text}</Text>
      <Text />
    </MainContainer>
  );
};

export default HeaderComp;

const GoBackText = styled.Text``;

const MainContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 42px;
`;
