import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/tabs';
import {Provider} from 'react-redux';
import {store} from '../MyApp/src/store/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from './src/screens/editProfile';
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default AppWrapper;
