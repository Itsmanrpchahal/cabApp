import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
// @ts-ignore
import styled, {withTheme} from 'styled-components/native';
import {Divider} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const ItemDetail = (props: any) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const [open, setOpen] = useState(false);
  var date1 = new Date(props.route.params.item.date_time);
  var hours = date1.getHours();
  var minutes = date1.getMinutes();
  var date2 = date1.getDate();
  var month = date1.getMonth();
  var year = date1.getFullYear();

  return (
    <ScrollView>
      <MainWrapper>
        <TitleWrapper>Oneway Tour Booking Details</TitleWrapper>
        <Divider />
        <HorizontalWrapper>
          <TextWrapper>Going From:</TextWrapper>
          <DividerWrapper />
          <TextWrapper>{props.route.params.item.tour_from}</TextWrapper>
        </HorizontalWrapper>

        <HorizontalWrapper>
          <TextWrapper>Going To:</TextWrapper>
          <DividerWrapper />
          <TextWrapper>{props.route.params.item.tour_to}</TextWrapper>
        </HorizontalWrapper>

        <HorizontalWrapper>
          <TextWrapper>Selected Cab:</TextWrapper>
          <DividerWrapper />
          <TextWrapper>Delhi</TextWrapper>
        </HorizontalWrapper>

        <HorizontalWrapper>
          <TextWrapper>Cab Price:</TextWrapper>
          <DividerWrapper />
          <TextWrapper>
            {props.route.params.item.currency +
              ' ' +
              props.route.params.item.price}
            /-
          </TextWrapper>
        </HorizontalWrapper>

        <TitleWrapper>Oneway Tour Booking Details</TitleWrapper>

        <BorderText>{props.route.params.item.name}</BorderText>

        <BorderText>{props.route.params.item.phone}</BorderText>

        <HorizontalWrapper>
          <TouchableOpacity
            style={{width: '48%'}}
            onPress={() => {
              setOpen(true);
            }}>
            <BorderText1>{hours + ':' + minutes}</BorderText1>
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: '48%'}}
            onPress={() => {
              setOpenTime(true);
            }}>
            <BorderText1>{date2 + '-' + month + '-' + year}</BorderText1>
          </TouchableOpacity>
        </HorizontalWrapper>

        <BorderText>
          Pick Up Address {props.route.params.item.pickup_address}
        </BorderText>

        <BorderText>Cab {props.route.params.item.cab}</BorderText>

        <BorderText>Type {props.route.params.item.type}</BorderText>

        <ButtonWrapper>Assign To Driver</ButtonWrapper>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <DatePicker
          modal
          mode={'time'}
          open={openTime}
          date={time}
          onConfirm={date => {
            setOpenTime(false);
            setTime(date);
          }}
          onCancel={() => {
            setOpenTime(false);
          }}
        />
      </MainWrapper>
    </ScrollView>
  );
};

// @ts-ignore
export default withTheme(ItemDetail);

const ButtonWrapper = styled.Text`
  height: 45px;
  background-color: aquamarine;
  border-radius: 10px;
  margin-top: 16px;
  text-align: center;
  padding-top: 14px;
  color: black;
  font-weight: bold;
`;

const BorderText1 = styled.Text`
  height: 45px;
  border-radius: 5px;
  border-width: 1px;
  border-color: gray;
  padding-left: 5px;
  padding-top: 12px;
`;

const BorderText = styled.Text`
  height: 45px;
  margin-top: 16px;
  border-radius: 5px;
  border-width: 1px;
  border-color: gray;
  padding-left: 5px;
  padding-top: 12px;
`;

const DividerWrapper = styled.View`
  height: 1px;
  background-color: gray;
  width: 40%;
`;

const TextWrapper = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const HorizontalWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  margin-top: 16px;
`;

const TitleWrapper = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MainWrapper = styled.View`
  padding: 10px;
  background-color: white;
  height: 120%;
`;
