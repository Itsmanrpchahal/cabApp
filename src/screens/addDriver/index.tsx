import React, {useEffect, useState} from 'react';
import {Platform, ScrollView, TouchableOpacity, View} from 'react-native';
import styled, {withTheme} from 'styled-components/native';
import TextField from '../../components/TextField';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {Formik} from 'formik';
import {ADD_DRIVER_SCHEMA} from './helpers';
import FillBtn from '../../components/FillBtn';
import {useActions} from '../../hooks/useActions';
import {navigationRef} from '../../navigation/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import AppLoader from '../../components/Loader';
import {date} from 'yup';

const AddDriver = () => {
  const [profileURI, setProfileURI] = useState('');
  const [licenseURI, setLicenceURI] = useState('');
  const [profileData, setProfileData] = useState({});
  const [licenseData, setLicenceData] = useState({});
  const [imagePath, setImagePath] = useState<any>(null);
  const [userID, setUserID] = useState();
  const {addDrivers} = useActions();
  const {loginData, loginLoading} = useTypedSelector(state => state.loginData);
  const {adddriverData, adddriverLoading} = useTypedSelector(
    state => state.adddriverData,
  );

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {
    AsyncStorage.getItem('userID').then(resp => {
      return setUserID(resp);
    });
  }, [userID]);
  const saveImage = async (values: any) => {
    if (profileURI && licenseURI === null) {
      alert('Image path error');
    } else {
      const formData = new FormData();
      const formData1 = new FormData();
      let osPath =
        Platform.OS === 'android'
          ? profileURI
          : profileURI.replace('file://', '');

      let osPath1 =
        Platform.OS === 'android'
          ? licenseURI
          : licenseURI.replace('file://', '');
      formData.append('userid', loginData.data.user_id);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('photo', JSON.stringify(profileData));
      formData.append('driver_license', JSON.stringify(licenseData));

      addDrivers(formData)
        .then(res => {
          console.log('Response ===> ', res.data);
          if (res.data.status === '200') {
            alert('Driver Added Succesfully');
            navigationRef.current.goBack();
          }
        })

        .catch(e => {
          console.log('e ===> ', JSON.stringify(e));
        });
    }
  };
  return (
    <MainContainer>
      {/* {adddriverLoading === false ? <AppLoader /> : null} */}
      <ScrollView style={{padding: -16}}>
        <Formik
          validationSchema={ADD_DRIVER_SCHEMA}
          initialValues={{
            email: '',
            name: '',
            phone: '',
            photo: profileURI,
            driver_license: licenseURI,
          }}
          onSubmit={values => {
            saveImage(values);
          }}>
          {({setFieldValue, handleSubmit, errors}) => (
            <View style={{height: '100%'}}>
              <TextField
                accessibilityLabel="Name"
                onChangeText={(value: any) => {
                  setFieldValue('name', value);
                }}
                placeholder="Name"
                autoCapitalize={'none'}
                error={errors ? errors.name : null}
              />

              <TextField
                accessibilityLabel="Email"
                onChangeText={(value: any) => {
                  setFieldValue('email', value);
                }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize={'none'}
                error={errors ? errors.email : null}
              />
              <TextField
                accessibilityLabel="Phone"
                onChangeText={(value: any) => {
                  setFieldValue('phone', value);
                }}
                placeholder="Phone"
                keyboardType="numeric"
                autoCapitalize={'none'}
              />

              {profileURI ? (
                <ImageWrapper source={{uri: profileURI}}></ImageWrapper>
              ) : null}
              <TouchableOpacity
                onPress={() => {
                  ImagePicker.openPicker({
                    cropping: false,
                    compressImageQuality: Platform.OS === 'android' ? 1 : 0.8,
                    mediaType: 'photo',
                    forceJpg: true,
                  }).then(async image => {
                    console.log('image', JSON.stringify(image));
                    let osPath =
                      Platform.OS === 'android'
                        ? image.path
                        : image.path.replace('file://', '');
                    setProfileURI(osPath);
                    setProfileData(image);
                  });
                }}>
                <ButtonWrapper>Add Driver Photo</ButtonWrapper>
              </TouchableOpacity>
              {/* {profileURI === '' && (
                <ErrorWrapper>
                  <ErrorWrapper__Text>
                    Profile Image is required
                  </ErrorWrapper__Text>
                </ErrorWrapper>
              )} */}

              {licenseURI ? (
                <ImageWrapper source={{uri: licenseURI}}></ImageWrapper>
              ) : null}
              <TouchableOpacity
                onPress={() => {
                  ImagePicker.openPicker({
                    cropping: false,
                    compressImageQuality: Platform.OS === 'android' ? 1 : 0.8,
                    mediaType: 'photo',
                    forceJpg: true,
                  }).then(async image => {
                    let osPath =
                      Platform.OS === 'android'
                        ? image.path
                        : image.path.replace('file://', '');

                    setLicenceURI(osPath);
                    setLicenceData(image);
                  });
                }}>
                <ButtonWrapper>Add Driver License</ButtonWrapper>
              </TouchableOpacity>
              {/* {licenseURI === '' && (
                <ErrorWrapper>
                  <ErrorWrapper__Text>
                    Driver License Image is required
                  </ErrorWrapper__Text>
                </ErrorWrapper>
              )} */}

              <FillBtn btntext={'Add Driver'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </MainContainer>
  );
};

export default withTheme(AddDriver);

const ErrorWrapper = styled.View`
  margin-top: 3px;
  padding-left: 2px;
`;

const ErrorWrapper__Text = styled.Text`
  color: red;
`;

const ImageWrapper = styled.Image`
  height: 120px;
  width: 120px;
  margin-top:16px
  border-radius: 16px;
`;

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

const MainContainer = styled.View`
  padding: 16px;
  flex: 1;
  height: 100%;
`;
