import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useIsFocused} from '@react-navigation/native';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {useActions} from '../../hooks/useActions';
import imagePath from '../../navigation';
const HomeScreen = () => {
  const isFocused = useIsFocused();

  const {getHome} = useActions();
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  const data = [];
  const [pages, setPages] = useState(1);

  useEffect(() => {
    if (count <= pages) {
      getHome({
        page: count,
      }).then(res => {
        setPages(res.data.total_pages);
        res.data && setList(...res.data.data);
        res.data && setList([...list, ...res.data.data]);
        data.push([...data, res.data.data]);
      });
    }
  }, [count]);

  return (
    <MainContainer>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        onScroll={e => {
          let paddingToBottom = 10;
          paddingToBottom += e.nativeEvent.layoutMeasurement.height;
          var currentOffset = e.nativeEvent.contentOffset.y;
          var direction =
            currentOffset > e.nativeEvent.contentOffset.y ? 'down' : 'up';
          if (direction === 'up') {
            if (
              e.nativeEvent.contentOffset.y >=
              e.nativeEvent.contentSize.height - paddingToBottom
            ) {
              setCount(count + 1);
            }
          }
        }}
        renderItem={({item}) => {
          return (
            <HorizontalWrapper>
              <VerticalWrapper>
                <TextWrapper>13:00</TextWrapper>
                <TextWrapper0>2h40</TextWrapper0>
                <TextWrapper>15:40</TextWrapper>
                <ProfilePic source={{uri: item.avatar}} />
              </VerticalWrapper>
             
              <LineWrapper>
              <DividerPic source ={imagePath.icCirlce}/>
              <Line>
              </Line>
              <DividerPic source ={imagePath.icCirlce}/>
              </LineWrapper>
              <VerticalWrapper>
                <TextWrapper2>Zirakpur</TextWrapper2>
                <EmojisView>
                  <ImageView1 source={imagePath.icWalk} />
                  <ImageView1 source={imagePath.icWalk} />
                </EmojisView>
                <TextWrapLudView>
                  <TextWrapper2>Ludhiana</TextWrapper2>
                  <EmojisView>
                    <ImageView1 source={imagePath.icWalk} />
                    <ImageView1 source={imagePath.icWalk} />
                  </EmojisView>
                </TextWrapLudView>
                <NameWrapper>
                  <TextWrapper2>{item.first_name}</TextWrapper2>
                  <GradeView>
                    <Star source={imagePath.icStar} />
                    <Point>3.8</Point>
                  </GradeView>
                </NameWrapper>
              </VerticalWrapper>
              <PriceTag>
                <PriceWrapper>
                  <TextWrapper> Rs.250:00</TextWrapper>
                </PriceWrapper>
                <InfoView>
                  <LightningPic source={imagePath.icLight} />
                  <InfoPic source={imagePath.icInfo} />
                </InfoView>
              </PriceTag>
            </HorizontalWrapper>
          );
        }}
        onEndReachedThreshold={0.5}
      />
    </MainContainer>
  );
};

export default HomeScreen;

const Line = styled.View`
width:2px;
height:50px;
justify-content:center;
background-color:white`;

const DividerPic = styled.Image`
  background-color: white;
  border-radius: 25px;
  height: 10px;
  width: 10px;
`;

const LineWrapper = styled.View`
align-items:center;
`;

const PriceWrapper = styled.View`
width:auto;
  margin-bottom: 100px;
`;

const PriceTag = styled.View`
width:auto;`;

const InfoPic = styled.Image`
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 25px;
  margin-left: 13px;
`;

const LightningPic = styled.Image`
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 25px;
`;

const InfoView = styled.View`
  flex-direction: row;
  margin-left: 15px;
  margin-top: 20px;
`;

const TextWrapLudView = styled.View`
  margin-top: 9px;
`;

const Star = styled.Image`
  background-color: white;
  border-radius: 20px;
  height: 18px;
  width: 18px;
`;

const Point = styled.Text`
  margin-left: 10px;
`;

const GradeView = styled.View`
  flex-direction: row;
  margin-left: 8px;
  margin-top: 5px;
`;

const NameWrapper = styled.View`
  margin-top: 20px;
  margin-right: 2px;
`;

const TextWrapper0 = styled.Text`
  font-size: 14px;
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ProfilePic = styled.Image`
  background-color: white;
  border-radius: 25px;
  margin-top: 40px;
  height: 50px;
  width: 50px;
`;

const ImageView1 = styled.Image`
  background-color: white;
  width: 12px;
  height: 21px;
  width: 21px;
  border-radius: 10px;
  margin-right: 5px;
  margin-left: 8px;
`;

const EmojisView = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

const VerticalWrapper = styled.View`
`;

const TextWrapper2 = styled.Text`
  display: flex;
  margin: 1px;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  color: white;
`;


const TextWrapper = styled.Text`
  display: flex;
  margin: 1px;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const HorizontalWrapper = styled.View`
  flex-direction: row;
  background-color: #252525;
  border-radius: 10px;
  justify-content:space-between;
  margin: 8px; 8px; 0px; 8px;
  padding:8px;
`;

const MainContainer = styled.View`
 
`;
