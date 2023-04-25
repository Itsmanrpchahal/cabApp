import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../screens/MainScreen';
import Tabs from '../../tabs';
import navigationStrings from '../../constant/navigationStrings';

const Stack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={navigationStrings.MAIN_SCREEN}
        component={MainScreen}
      />
      <Stack.Screen name={navigationStrings.BACK_TO_MAIN} component={Tabs} />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
