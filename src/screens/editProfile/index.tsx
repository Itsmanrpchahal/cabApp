import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const EditProfile = () => {
  /* For Camera Launch */

  const uploadImage = () => {
    let options = {
      title: 'Choose Photo',
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the Image');
      } else if (response.error) {
        console.log('Image Picker error : ', response.error);
      } else if (response.customButton) {
        console.log('user tapped custom button : ', response.customButton);
      } else {
        console.log('Uploaded success');
      }
    });
  };

  /* For Camera Launch */
  const Camera = () => {
    let options = {
      title: 'launch camera',
      path: 'images',
      mediaType: 'photo',
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Image Uploaded success');
      }
    });
  };
  return (
    <MainWrapper>
      <MainContainer>
        <GalleryButton>
          <TouchableOpacity onPress={uploadImage}>
            <TextGallery>Upload from gallery</TextGallery>
          </TouchableOpacity>
        </GalleryButton>
        <CameraButton>
          <TouchableOpacity onPress={Camera}>
            <TextCamera>Click Image</TextCamera>
          </TouchableOpacity>
        </CameraButton>
      </MainContainer>
    </MainWrapper>
  );
};

export default EditProfile;

const TextCamera = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #fff;
  text-align: center;
`;

const CameraButton = styled.View`
  width: 200px;
  height: 50px;
  background-color: #3740ff;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 12px;
`;

const GalleryButton = styled.View`
  width: 200px;
  height: 50px;
  background-color: #3740ff;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-bottom: 12px;
`;

const TextGallery = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #fff;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const MainWrapper = styled.View`
  height: 110%;
`;
