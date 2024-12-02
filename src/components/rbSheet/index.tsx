import React, { ReactNode } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// constants
import { colors } from '../../constant/theme';

// TypeScript types
interface RBSheetComponentProps {
  refRBSheet: React.RefObject<RBSheet>; 
  children: ReactNode;
  height?: number;
  closeOnPressMask?: boolean;
  onClose?: () => void;
  customStyles?: object;
}

const RBSheetComponent: React.FC<RBSheetComponentProps> = ({
  refRBSheet,
  children,
  height = heightPercentageToDP('40%'),
  closeOnPressMask = false,
  onClose,
  customStyles,
}) => {
  return (
    <RBSheet
      ref={refRBSheet}
      onClose={onClose}
      height={height}
      closeOnPressMask={closeOnPressMask}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,.6)',
        },
        draggableIcon: {
          backgroundColor: colors.grey_DD,
        },
        container: {
          borderTopLeftRadius: heightPercentageToDP('3%'),
          borderTopRightRadius: heightPercentageToDP('3%'),
        },
        ...customStyles,
      }}
    >
      {children}
    </RBSheet>
  );
};

export default RBSheetComponent;
