import React from 'react';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

interface ArrowIconProps {
  fill?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({fill = 'white'}) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_4140_1572)">
        <Path
          d="M11.0798 1.99332C10.7531 1.66665 10.2265 1.66665 9.89979 1.99332L4.35979 7.53332C4.09979 7.79332 4.09979 8.21332 4.35979 8.47332L9.89979 14.0133C10.2265 14.34 10.7531 14.34 11.0798 14.0133C11.4065 13.6867 11.4065 13.16 11.0798 12.8333L6.25313 7.99999L11.0865 3.16665C11.4065 2.84665 11.4065 2.31332 11.0798 1.99332Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4140_1572">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ArrowIcon;
