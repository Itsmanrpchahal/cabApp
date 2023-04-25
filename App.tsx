import {View, Text, useColorScheme} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme as LightTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../MyApp/src/store/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackScreen} from './src/StackScreens';
import {EventRegister} from 'react-native-event-listeners';
import {Theme} from './src/theme/theme';
import ThemeContext from './src/theme/themeContext';
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', data => {
      setDarkMode(data);
      // console.log(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={darkMode === true ? Theme.dark : Theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : LightTheme}>
        <MainStackScreen />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default AppWrapper;
