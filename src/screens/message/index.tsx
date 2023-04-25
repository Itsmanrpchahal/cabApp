import {View, Text, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import styled from 'styled-components/native';
import ThemeContext from '../../theme/themeContext';

const MessageScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Text style={[styles.text, {color: theme.color}]}>
        This is Message Screen
      </Text>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

const TextMessage = styled.Text``;
const MessageView = styled.View``;
