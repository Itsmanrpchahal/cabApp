import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme as LightTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import {store} from './src/store';
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
    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
    const listener = EventRegister.addEventListener('ChangeTheme', data => {
      setDarkMode(data);
    });
    return () => {
      // @ts-ignore
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
