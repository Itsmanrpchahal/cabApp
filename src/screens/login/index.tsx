import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {withTheme} from 'styled-components/native';
import TextField from '../../components/TextField';
import FillBtn from '../../components/FillBtn';
import {icMan} from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {ScrollView, View} from 'react-native';
import {LOGIN_SCHEMA} from './helpers';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import AppLoader from '../../components/Loader';

const Login = ({navigation}) => {
  const {loginAPI} = useActions();
  const {loginData, loginLoading} = useTypedSelector(state => state.loginData);

  useEffect(() => {
    if (Object.keys(loginData).length > 0) {
      navigation.replace('Rides');
    }
  }, [loginData]);
  const handleLogin = async (values: any) => {
    await loginAPI(values)
      .then(async res => {
        if (res.data.status === '400') {
          alert(res.data.message);
        } else if (res.data.status === '200') {
          // try {
          //   await AsyncStorage.setItem('userID', res.data.data.user_id);
          //   navigation.replace('Rides');
          // } catch (error) {
          //   console.log('Error saving data:', error);
          // }
        }
        console.log('LOgin Data', res.data);
      })
      .catch(e => {
        console.log('ERR', e);
      });
  };

  return (
    <MainWrapper>
      {loginLoading ? <AppLoader /> : null}
      <ScrollView style={{width: '100%'}}>
        <MainWrapper1>
          <ImageWrapper source={icMan} />
          <TextTitle>Resources</TextTitle>
          <ContentWrapper>
            <Formik
              validationSchema={LOGIN_SCHEMA}
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={values => {
                handleLogin(values);
              }}>
              {({setFieldValue, handleSubmit, errors}) => (
                <ContentWrapper>
                  <TextField
                    onChangeText={(value: any) => {
                      setFieldValue('email', value);
                    }}
                    placeholder="Username"
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                    error={errors ? errors.email : null}
                  />

                  <TextField
                    onChangeText={(value: any) => {
                      setFieldValue('password', value);
                    }}
                    autoCapitalize={'none'}
                    placeholder="********"
                    secureTextEntry={true}
                    error={errors ? errors.password : null}
                  />
                  <ForgotPassword>Forgot Password?</ForgotPassword>

                  <FillBtn btntext={'Login'} onPress={handleSubmit} />
                </ContentWrapper>
              )}
            </Formik>
          </ContentWrapper>
        </MainWrapper1>
      </ScrollView>
    </MainWrapper>
  );
};

export default withTheme(Login);

const ForgotPassword = styled.Text`
  font-size: 16px;
  margin-top: 16px;
  color: black;
`;

const ContentWrapper = styled.View`
  margin-top: 40px;
  align-items: center;
  width: 100%;
`;

const TextTitle = styled.Text`
  font-size: 20px;
  color: black;
  margin-top: 16px;
`;

const ImageWrapper = styled.Image`
  margin-top: 50px;
  height: 100px;
  width: 100px;
`;

const MainWrapper1 = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 20px;
  padding: 16px;
`;

const MainWrapper = styled.View`
  flex: 1;
  align-items: center;
`;
