import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import MessageScreen from '../screens/message';
import ProfileScreen from '../screens/profile';
import {TabBarIcon} from '../navigation/TabbarIcon';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
      })}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Message'} component={MessageScreen} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
