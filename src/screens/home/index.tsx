import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const HomeScreen = () => {
  const isFocused = useIsFocused();

  const {getHome} = useActions();
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  const data = [];
  const [pages, setPages] = useState(1);

  const {homeData, homeLoading} = useTypedSelector(state => state.homeData);

  const handleLoad = () => {
    setPages(pages + 1);
  };

  useEffect(() => {
    if (count <= pages) {
      getHome({
        page: count,
      }).then(res => {
        setPages(res.data.total_pages);
        res.data && setList(res.data.data);
        res.data && setList([...list, ...res.data.data]);
        data.push([...data, res.data.data]);
        console.log(JSON.stringify(data));
      });
    }
  }, [count]);

  useEffect(() => {
    // list.push(homeData);
  });

  return (
    <MainContainer>
      <Text style={{color: '#000000'}}>{homeLoading}</Text>
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
            <MainBox>
              <Box>
                <Hours>
                  <Text>13:00</Text>
                  <Text>2h</Text>
                  <Text>15:00</Text>
                </Hours>
                <Place>
                  <Text>Ziarkpur</Text>
                  <Text>{JSON.stringify(item)}</Text>
                </Place>
                <BIO_Con>
                  <USER></USER>

                  <PriceMain>
                    <Price>
                      <Text>Rs.250</Text>
                    </Price>
                  </PriceMain>
                </BIO_Con>
                <Time></Time>
              </Box>
              {/* <ImgStyle source={{uri: `${item.avatar}`}} /> */}
            </MainBox>
          );
        }}
        onEndReached={handleLoad}
        onEndReachedThreshold={0.5}
      />
    </MainContainer>
  );
};

export default HomeScreen;

const Place = styled.View``;

const Box = styled.View``;

const ImgStyle = styled.Image`
  width: 45px;
  height: 45px;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
`;

const Hours = styled.View`
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ImgContainer = styled.View`
  padding: 10px;
`;

const Main = styled.View`
  background-color: black;
`;
const Detail = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 12px;
  margin-bottom: 12px;
`;

const Time = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding-top: 16px;
  border-radius: 20px;
  background-color: #2a2728;
  display: flex;
  justify-content: center;
`;

const PriceMain = styled.Text`
  font-size: 15px;
  color: #fff;
`;

const Price = styled.View`
  margin-right: 90px;
`;

const USER = styled.Text`
  font-size: 30px;

  color: #2a2728;
`;

const BIO_Con = styled.View`
  width: 74%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  justify-content: space-between;
  background-color: #2a2728;
  padding-vertical: 10px;
`;

const MainBox = styled.View`
  width: 80%;
  margin-left: 20px;
  background-color: #2a2728;
  border-radius: 20px;
  margin-vertical: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MainContainer = styled.View`
  align-items: center;
  background-color: #ffff;
`;

const Load = styled.View`
  margin-top: 320px;
`;
