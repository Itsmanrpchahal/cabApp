import {TouchableOpacity} from 'react-native';
// @ts-ignore
import React from 'react';
import styled from 'styled-components/native';

type FillBtnProps = {
  btntext?: string;
  onPress: Function;
};
const FillBtn: React.FC<FillBtnProps> = ({btntext, onPress}) => {
  return (
    <MainWrapper>
      <TouchableOpacity onPress={() => onPress()}>
        <BtnRound>
          <BtnRoundText>{btntext}</BtnRoundText>
        </BtnRound>
      </TouchableOpacity>
    </MainWrapper>
  );
};

export default FillBtn;

const BtnRoundText = styled.Text`
  color: white;
`;

const BtnRound = styled.View`
  width: 200px;
  height: 48px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  background-color: gray;
`;

const MainWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
