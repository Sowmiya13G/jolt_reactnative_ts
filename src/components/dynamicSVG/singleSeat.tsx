import React from 'react';
import {Mask, Path, Rect, Svg} from 'react-native-svg';

interface SingleSeatProps {
  borderColor: string;
  fillColor: string;
}

const SingleSeat: React.FC<SingleSeatProps> = ({borderColor, fillColor}) => {
  return (
    <Svg width="30" height="36" viewBox="0 0 30 36" fill="none">
      <Mask id="path-1-inside-1_4409_5675" fill={fillColor}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0C6.79086 0 5 1.79086 5 4V11H4C1.79086 11 0 12.7909 0 15V26C0 28.2091 1.79086 30 4 30H26C28.2091 30 30 28.2091 30 26V15C30 12.7909 28.2091 11 26 11H25V4C25 1.79086 23.2091 0 21 0H9ZM25 11H5V21C5 23.2091 6.79086 25 9 25H21C23.2091 25 25 23.2091 25 21V11Z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C6.79086 0 5 1.79086 5 4V11H4C1.79086 11 0 12.7909 0 15V26C0 28.2091 1.79086 30 4 30H26C28.2091 30 30 28.2091 30 26V15C30 12.7909 28.2091 11 26 11H25V4C25 1.79086 23.2091 0 21 0H9ZM25 11H5V21C5 23.2091 6.79086 25 9 25H21C23.2091 25 25 23.2091 25 21V11Z"
        fill={fillColor}
        fillOpacity="0.4"
      />
      <Path
        d="M5.5 4C5.5 2.067 7.067 0.5 9 0.5V-0.5C6.51472 -0.5 4.5 1.51472 4.5 4H5.5ZM5.5 11V4H4.5V11H5.5ZM4 11.5H5V10.5H4V11.5ZM0.5 15C0.5 13.067 2.067 11.5 4 11.5V10.5C1.51472 10.5 -0.5 12.5147 -0.5 15H0.5ZM0.5 26V15H-0.5V26H0.5ZM4 29.5C2.067 29.5 0.5 27.933 0.5 26H-0.5C-0.5 28.4853 1.51472 30.5 4 30.5V29.5ZM26 29.5H4V30.5H26V29.5ZM29.5 26C29.5 27.933 27.933 29.5 26 29.5V30.5C28.4853 30.5 30.5 28.4853 30.5 26H29.5ZM29.5 15V26H30.5V15H29.5ZM26 11.5C27.933 11.5 29.5 13.067 29.5 15H30.5C30.5 12.5147 28.4853 10.5 26 10.5V11.5ZM25 11.5H26V10.5H25V11.5ZM24.5 4V11H25.5V4H24.5ZM21 0.5C22.933 0.5 24.5 2.067 24.5 4H25.5C25.5 1.51472 23.4853 -0.5 21 -0.5V0.5ZM9 0.5H21V-0.5H9V0.5ZM5 11.5H25V10.5H5V11.5ZM5.5 21V11H4.5V21H5.5ZM9 24.5C7.067 24.5 5.5 22.933 5.5 21H4.5C4.5 23.4853 6.51472 25.5 9 25.5V24.5ZM21 24.5H9V25.5H21V24.5ZM24.5 21C24.5 22.933 22.933 24.5 21 24.5V25.5C23.4853 25.5 25.5 23.4853 25.5 21H24.5ZM24.5 11V21H25.5V11H24.5Z"
        fill={borderColor}
        mask="url(#path-1-inside-1_4409_5675)"
      />
      <Rect
        x="5.25"
        y="17.25"
        width="19.5"
        height="18.5"
        rx="3.75"
        fill="#DDDDDD"
        stroke="#ABABAB"
        strokeWidth="0.5"
      />
    </Svg>
  );
};

export default SingleSeat;
