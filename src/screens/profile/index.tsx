import {View, Text, Image} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import imagePath from '../../navigation';

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
    </MainContainer>
  );
};

export default ProfileScreen;

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
 align-items: center;
 background-color: black;
 border-radius: 10px;
 margin: 8px; 8px; 0px; 8px;
 padding:8px;
 height: 100%;
 
`;
