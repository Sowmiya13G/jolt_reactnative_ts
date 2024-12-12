import React from 'react';
import {Svg, Rect} from 'react-native-svg';
import {colors} from '../../constant/theme';

interface SleepSeatProps {
  fillColor: string;
  strokeColor: string;
}

const SleepSeat: React.FC<SleepSeatProps> = ({fillColor,strokeColor}) => {

  return (
    <Svg width="30" height="64" viewBox="0 0 30 64" fill="none">
      <Rect
        x="0.25"
        y="0.25"
        width="29.5"
        height="63.5"
        rx="3.75"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="0.5"
      />
      <Rect x="4" y="55" width="22" height="5" rx="2.5" fill="#DDDDDD" />
    </Svg>
  );
};

export default SleepSeat;
