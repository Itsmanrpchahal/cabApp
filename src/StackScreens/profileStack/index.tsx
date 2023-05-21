// @ts-ignore
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../../constant/navigationStrings';
import ProfileScreen from '../../screens/profile';
import {Image, TouchableOpacity} from 'react-native';
import {icLogout} from '../../assets';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationStrings.PROFILE_STACK}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
