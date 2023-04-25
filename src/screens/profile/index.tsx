import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import imagePath from '../../navigation';
import navigationStrings from '../../constant/navigationStrings';

const listItems = [
  {
    id: 1,
    title: 'Apple',
  },
  {
    id: 2,
    title: 'Banana',
  },
  {
    id: 3,
    title: 'Blueberries',
  },
  {
    id: 4,
    title: 'Coconut',
  },
  {
    id: 5,
    title: 'Cranberries',
  },
  {
    id: 6,
    title: 'Date Fruit',
  },
  {
    id: 7,
    title: 'Grapes',
  },
];

const ProfileScreen = ({navigation}) => {
  return (
    <MainContainer>
      <HorizontalWrapper>
        <ProfilePicView>
          <ProfilePic source={imagePath.icProfile} />
        </ProfilePicView>
        <ProfilePicView>
          <NumberPost>58</NumberPost>
          <TextPost>Posts</TextPost>
        </ProfilePicView>
        <ProfilePicView>
          <NumberPost>449</NumberPost>
          <TextPost>Followers</TextPost>
        </ProfilePicView>
        <ProfilePicView>
          <NumberPost>736</NumberPost>
          <TextPost>Following</TextPost>
        </ProfilePicView>
      </HorizontalWrapper>
      <BioInfoContainer>
        <BioInfoText>First_Name</BioInfoText>
        <BioInfoText>Its a light What makes soul smile</BioInfoText>
        <BioInfoText>Instagram Stories</BioInfoText>
        <BioInfoText>Follow me on LinkedIn</BioInfoText>
      </BioInfoContainer>
      <EditProfile>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationStrings.EDIT_PROFILE)}>
          <EditProfileText>Edit Profile</EditProfileText>
        </TouchableOpacity>
      </EditProfile>

      <FlatList
        data={listItems}
        renderItem={({item}) => {
          return (
            <HorizontalCard>
              <IconView>
                <Icon source={imagePath.icMan} />
              </IconView>
              <NameTextView>
                <FirstName> {item.id} </FirstName>
                <LastName>{item.title}</LastName>
              </NameTextView>
            </HorizontalCard>
          );
        }}
      />
    </MainContainer>
  );
};

export default ProfileScreen;


const EditProfileText = styled.Text`
  color: white;
  text-align: center;
  padding: 12px; 0px;
`;

const EditProfile = styled.View`
  background-color: #252525;
  border-radius: 7px;
  margin: 8px; 5px; 0px; 5px;
`;

const LastName = styled.Text`
  margin-top: 6px;
  font-size: 15px;
`;

const FirstName = styled.Text`
  font-size: 15px;
`;

const NameTextView = styled.View`
  margin-left: 8px;
  margin-top: 8px;
`;

const Icon = styled.Image`
  height: 60px;
  width: 60px;
`;

const IconView = styled.View`
  margin-top: 14px;
  margin-left: 10px;
`;

const HorizontalCard = styled.View`
  flex-direction: row;
  margin-top: 8px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 10px;
  width: 97%;
  background-color: #252525;
`;

const BioInfoText = styled.Text`
  font-size: 18px;
  color: white;
`;

const BioInfoContainer = styled.View`
  width: 80%;
  margin-right: 70px;
  margin-top: 20px;
`;

const TextPost = styled.Text`
  font-size: 14px;
  color: white;
  justify-content:center;
  `;

const NumberPost = styled.Text`
  display: flex;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const ProfilePic = styled.Image`
  background-color: white;
  height: 65px;
  width: 65px;
  margin-right: 10px;
  border-radius: 50px;
`;

const ProfilePicView = styled.View`
  margin-top: 20px;
  justify-content:center;

`;

const HorizontalWrapper = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-right:8px;
  justify-content:space-between;
`;

const MainContainer = styled.View`
  background-color: black;
  padding: 8px;
  height: 100%;
`;
