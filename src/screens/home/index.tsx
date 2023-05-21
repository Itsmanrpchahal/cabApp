// @ts-ignore
import React, {useState, useEffect} from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import {FlatList, TouchableOpacity} from 'react-native';
import {useActions} from '../../hooks/useActions';
import imagePath from '../../navigation';
import navigationString from '../../constant/navigationStrings';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const {getHome} = useActions();
  const {loginData} = useTypedSelector(state => state.loginData);

  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  const data = [];
  const [pages, setPages] = useState(1);
  const isFocused = useIsFocused();
  const [userID, setUserID] = useState(0);

  useEffect(() => {
    if (isFocused) {
      AsyncStorage.getItem('userID').then(resp => {
        return setUserID(resp);
      });
      if (count <= pages) {
        // @ts-ignore
        getHome({
          userid: loginData && loginData.data && loginData.data.user_id,
          type: 1,
          page: count,
        })
          .then(res => {
            setPages(res.data.totalpages);
            // @ts-ignore
            res.data && setList(...res.data.data);
            res.data && setList([...list, ...res.data.data]);
            data.push([...data, res.data.data]);
          })
          .catch(e => {});
      }
    }
  }, [isFocused, count, userID]);

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
          var date = new Date(item.date_time);
          var hours = date.getHours();
          var minutes = date.getMinutes();
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(navigationString.ITEM_DETAIL, {item: item});
              }}>
              <HorizontalWrapper>
                <VerticalWrapper>
                  <TextWrapper>{hours + ':' + minutes}</TextWrapper>
                  {/* <TextWrapper0>2h40</TextWrapper0> */}
                  {/* <TextWrapper>15:40</TextWrapper> */}
                  {/* <ProfilePic source={{uri: icMan}} /> */}
                </VerticalWrapper>
                <LineWrapper>
                  <DividerPic source={imagePath.icCirlce} />
                  <DividerPic source={imagePath.icCirlce} />
                </LineWrapper>
                <VerticalWrapper>
                  <TextWrapper2>{item.tour_from}</TextWrapper2>
                  <EmojisView>
                    <ImageView1 source={imagePath.icWalk} />
                    <ImageView1 source={imagePath.icWalk} />
                  </EmojisView>
                  <TextWrapLudView>
                    <TextWrapper2>{item.tour_to}</TextWrapper2>
                    <EmojisView>
                      <ImageView1 source={imagePath.icWalk} />
                      <ImageView1 source={imagePath.icWalk} />
                    </EmojisView>
                  </TextWrapLudView>
                  <NameWrapper>
                    <TextWrapper2>{item.first_name}</TextWrapper2>
                    <GradeView>
                      <Star source={imagePath.icStar} />
                      <Point>{item.type}</Point>
                    </GradeView>
                  </NameWrapper>
                </VerticalWrapper>
                <PriceTag>
                  <PriceWrapper>
                    <TextWrapper>
                      {item.currency + ' ' + item.price}
                    </TextWrapper>
                  </PriceWrapper>
                  <InfoView>
                    <LightningPic source={imagePath.icLight} />
                    <InfoPic source={imagePath.icInfo} />
                  </InfoView>
                </PriceTag>
              </HorizontalWrapper>
            </TouchableOpacity>
          );
        }}
        onEndReachedThreshold={0.5}
      />
    </MainContainer>
  );
};

export default HomeScreen;

const DividerPic = styled.Image`
  background-color: white;
  border-radius: 25px;
  height: 10px;
  width: 10px;
`;

const LineWrapper = styled.View`
  align-items: center;
`;

const PriceWrapper = styled.View`
  width: auto;
  margin-bottom: 100px;
`;

const PriceTag = styled.View`
  width: auto;
`;

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
  color: white;
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
  justify-content: center;
  margin-top: 5px;
`;

const VerticalWrapper = styled.View``;

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
  background-color: #413e3e;
  border-radius: 10px;
  justify-content:space-between;
  margin: 8px; 8px; 0px; 8px;
  padding:8px;
`;

const MainContainer = styled.View``;
