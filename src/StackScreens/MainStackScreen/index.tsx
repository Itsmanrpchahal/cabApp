// @ts-ignore
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {clearAll} from '../../storage';
import Tabs from '../../tabs';
import navigationStrings from '../../constant/navigationStrings';
import ItemDetail from '../../screens/itemDetail';
import AddDriver from '../../screens/addDriver';
import login from '../../screens/login';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../../navigation/RootNavigation';
import {icLogout} from '../../assets';
import {Image, TouchableOpacity} from 'react-native';
import {persistor, store} from '../../store';
import {ActionType} from '../../store/login/actions-types';
import navigation from '../../navigation';

const Stack = createStackNavigator();

function MainStackScreen({navigation}) {
  const {loginData} = useTypedSelector(state => state.loginData);
  const [id, setId] = useState();

  useEffect(() => {
    loginData.data && setId(loginData.data.user_id);
    console.log('TEST DATA', loginData.data);
  }, [id, loginData]);
  return (
    <NavigationContainer independent={true} ref={navigationRef}>
      <Stack.Navigator initialRouteName={navigationStrings.LOGIN}>
        <Stack.Screen
          options={{
            headerShown: true,
            headerRight: (route: any) => {
              return (
                <TouchableOpacity
                  onPress={async () => {
                    await clearAll();
                    await persistor.flush();
                    await persistor.purge();
                    store.dispatch({
                      type: ActionType.LOGIN_GET_FAILED,
                    });
                    navigationRef.current.reset({
                      index: 0,
                      routes: [{name: navigationStrings.LOGIN}],
                    });
                  }}>
                  <Image
                    style={{height: 26, width: 26, marginRight: 16}}
                    source={icLogout}
                  />
                </TouchableOpacity>
              );
            },
          }}
          name={navigationStrings.RIDES}
          component={Tabs}
        />

        <Stack.Screen
          name={navigationStrings.ITEM_DETAIL}
          component={ItemDetail}
        />

        <Stack.Screen
          name={navigationStrings.ADD_DRIVER}
          component={AddDriver}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name={navigationStrings.LOGIN}
          component={login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackScreen;
