import {View, Text, Button, Switch, StyleSheet} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../../theme/themeContext';
import navigationStrings from '../../constant/navigationStrings';

const MainScreen = ({navigation}) => {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <SwitchWrapper>
        <DarkText>Dark Mode</DarkText>
        <Switch
          trackColor={{false: 'gray', true: '#fff'}}
          thumbColor={darkMode ? '#fff' : 'gray'}
          onValueChange={value => {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme', value);
          }}
          value={darkMode}
        />
      </SwitchWrapper>

      <Text style={[styles.text, {color: theme.color}]}>MainScreen</Text>
      <Button
        onPress={() => navigation.navigate(navigationStrings.BACK_TO_MAIN)}
        title="Go to Tabs"
      />
    </View>
  );
};

export default MainScreen;

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
    marginBottom: 20,
  },
  darkModeText: {
    fontSize: 20,
    color: 'black',
  },
});

const DarkText = styled.Text`
  color: black;
  font-size: 20px;
`;
const SwitchWrapper = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`;
