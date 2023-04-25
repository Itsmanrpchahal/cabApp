import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import MessageScreen from '../screens/message';
import {TabBarIcon} from '../navigation/TabbarIcon';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../screens/editProfile';
import navigationStrings from '../constant/navigationStrings';
import {ProfileStack} from '../StackScreens';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
        tabBarActiveTintColor: '#ffff',
        headerStyle: {backgroundColor: '#252525'},
        tabBarStyle: {backgroundColor: '#252525'},
      })}>
      <Tab.Screen
        options={{
          headerTitleStyle: {color: 'white'},
        }}
        name={navigationStrings.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerTitleStyle: {color: 'white'},
        }}
        name={navigationStrings.MESSAGE}
        component={MessageScreen}
      />
      <Tab.Screen
        options={({route}) => ({
          tabBarStyle: {
            backgroundColor: 'black',

            display: getTabBarVisibility(route),
          },
          headerTitleStyle: {color: 'white'},
        })}
        name={navigationStrings.PROFILE}
        component={ProfileStack}
      />
      <Tab.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          headerTitleStyle: {color: 'white'},
          tabBarButton: () => (
            <TouchableOpacity onPress={() => EditProfile()} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log(routeName);
  if (routeName === 'Edit Profile') {
    return 'none';
  } else {
    return 'flex';
  }
};

export default Tabs;
