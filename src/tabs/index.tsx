// @ts-ignore
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import {TabBarIcon} from '../navigation/TabbarIcon';
import navigationStrings from '../constant/navigationStrings';
import {ProfileStack} from '../StackScreens';
import {Button, Image} from 'react-native';
import imagePath from '../navigation';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          headerTitleStyle: {color: 'white'},
        }}
        name={navigationStrings.HOME}
        component={HomeScreen}
      />

      <Tab.Screen
        options={({route}) => ({
          headerTitleStyle: {color: 'white'},
          headerShown: false,
        })}
        name={navigationStrings.PROFILE}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
