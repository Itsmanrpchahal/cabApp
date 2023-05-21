import {FlatList, Text, TouchableOpacity} from 'react-native';
// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import navigationStrings from '../../constant/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useIsFocused} from '@react-navigation/native';

// @ts-ignore
const ProfileScreen = ({navigation}) => {
  const {getDrivers} = useActions();
  const {driverData} = useTypedSelector(state => state.driverData);
  const {loginData} = useTypedSelector(state => state.loginData);
  const isFocused = useIsFocused();
  const [userID, setUserID] = useState();

  useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('userID').then(resp => {
        return setUserID(resp);
      });

      getDrivers({
        userid: loginData && loginData.data && loginData.data.user_id,
      });
    }
  }, [isFocused, userID]);
  return (
    <MainContainer>
      <TouchableOpacity
        onPress={async () => {
          // await clearAll();
          // await persistor.flush();
          // await persistor.purge();
          // store.dispatch({
          //   type: ActionType.LOGIN_INIT,
          // });
          // navigation.reset({
          //   index: 0,
          //   routes: [{name: navigationStrings.LOGIN}],
          // });
          navigation.navigate(navigationStrings.ADD_DRIVER);
        }}>
        <ButtonWrapper>Add New Driver</ButtonWrapper>
      </TouchableOpacity>

      <FlatList
        data={driverData.data}
        renderItem={({item}) => {
          return (
            <HorizontalCard>
              <IconView>
                <Icon source={{uri: driverData.baseUrl + item.photo}} />
              </IconView>
              <NameTextView>
                <FirstName>{item.email} </FirstName>
                <LastName>{item.name}</LastName>
              </NameTextView>
            </HorizontalCard>
          );
        }}
      />
    </MainContainer>
  );
};

export default ProfileScreen;

const ButtonWrapper = styled.Text`
  height: 45px;
  background-color: aquamarine;
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 10px;
  text-align: center;
  padding-top: 14px;
  color: black;
  font-weight: bold;
`;

const LastName = styled.Text`
  margin-top: 6px;
  font-size: 15px;
  color: white;
`;

const FirstName = styled.Text`
  font-size: 15px;
  color: white;
`;

const NameTextView = styled.View`
  margin-left: 8px;
`;

const Icon = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 8px;
`;

const IconView = styled.View`
  margin: 10px;
`;

const HorizontalCard = styled.View`
  flex-direction: row;
  margin-top: 8px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 10px;
  align-items: center;
  background-color: #413e3e;
`;

const MainContainer = styled.View`
  background-color: white;
  padding: 8px;
  height: 100%;
`;
