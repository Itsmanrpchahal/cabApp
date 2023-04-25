import PropTypes from 'prop-types';
import React from 'react';
import {Image} from 'react-native';
import {icHome, icMessage, icProfile,icEmail} from '../assets';
import navigationStrings from '../constant/navigationStrings';

const tabIcon = {
  [navigationStrings.HOME]: icHome,
  [navigationStrings.MESSAGE]: icMessage,
  [navigationStrings.PROFILE]: icProfile,
};

type TabBarIconProps = {
  color: string;
  routeName: string;
};

export const TabBarIcon: React.FC<TabBarIconProps> = ({color, routeName}) => {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{tintColor: color}}
    />
  );
};

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
