import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import imagePath from '../../navigation';
import {SwipeListView} from 'react-native-swipe-list-view';

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

const ProfileScreen = () => {
  return (
    <MainContainer>
      <HorizontalWrapper>
        <ProfilePicView>
          <ProfilePic source={imagePath.icProfile} />
        </ProfilePicView>
        <PostView>
          <NumberPost>58</NumberPost>
          <TextPost>Posts</TextPost>
        </PostView>
        <FollowerView>
          <NumberFollower>449</NumberFollower>
          <TextFollower>Followers</TextFollower>
        </FollowerView>
        <FollowingView>
          <NumberFollowing>736</NumberFollowing>
          <TextFollowing>Following</TextFollowing>
        </FollowingView>
      </HorizontalWrapper>
      <BioInfoContainer>
        <BioInfoText>First_Name</BioInfoText>
        <BioInfoText>Its a light What makes soul smile</BioInfoText>
        <BioInfoText>Instagram Stories</BioInfoText>
        <BioInfoText>Follow me on LinkedIn</BioInfoText>
      </BioInfoContainer>
      <EditProfile>
        <TouchableOpacity>
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
        leftOpenValue={75}
        rightOpenValue={-150}
      />
    </MainContainer>
  );
};

export default ProfileScreen;

const Container = styled.View``;

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

const Email = styled.Text`
  margin-top: 6px;
  font-size: 15px;
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

const TextFollowing = styled.Text`
  font-size: 20px;
  color: white;
`;

const NumberFollowing = styled.Text`
  display: flex;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const FollowingView = styled.View`
  width: 25%;
  margin-top: 30px;
`;

const TextFollower = styled.Text`
  font-size: 20px;
  color: white;
`;

const NumberFollower = styled.Text`
  display: flex;
  margin-left: 15px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const FollowerView = styled.View`
  width: 25%;
  margin-top: 30px;
`;

const TextPost = styled.Text`
  font-size: 20px;
  color: white;
`;

const NumberPost = styled.Text`
  display: flex;
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const PostView = styled.View`
  width: 25%;
  margin-top: 30px;
`;

const ProfilePic = styled.Image`
  background-color: white;
  height: 65px;
  width: 65px;
  margin-right: 10px;
  border-radius: 50px;
`;

const ProfilePicView = styled.View`
  width: 25%;
  margin-left: 10px;
  margin-top: 20px;
`;

const HorizontalWrapper = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const MainContainer = styled.View`
  background-color: black;
  padding: 8px;
  height: 100%;
`;
