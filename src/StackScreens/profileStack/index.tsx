import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../../screens/editProfile';
import navigationStrings from '../../constant/navigationStrings';
import ProfileScreen from '../../screens/profile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={navigationStrings.PROFILE_STACK}
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.EDIT_PROFILE}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
