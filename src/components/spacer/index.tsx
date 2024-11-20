import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  height?: number | string;
  width?: number | string;
}

const Spacer: React.FC<SpacerProps> = ({height, width}) => {
  return <View style={{height, width}} />;
};

export default Spacer;
