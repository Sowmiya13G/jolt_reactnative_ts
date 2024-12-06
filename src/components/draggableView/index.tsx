import React from 'react';
import {
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// svg Imports
import CLOSE from '../../assets/svg/cancel.svg';

// contants
import { colors } from '../../constant/theme';

// styles
import styles from './styles';

interface DraggableViewProps {
  rbsheetHeight: string | number;
  setRbsheetHeight: React.Dispatch<React.SetStateAction<string | number>>;
  setBorderRadius: React.Dispatch<React.SetStateAction<string | number>>;
  children?: React.ReactNode;
  onCancelPress?: () => void;
  customStyle?: StyleProp<ViewStyle>;
}

const DraggableView: React.FC<DraggableViewProps> = ({
  rbsheetHeight,
  setRbsheetHeight,
  setBorderRadius,
  children,
  onCancelPress,
  customStyle,
}) => {
  const handleCancelPress = () => {
    setRbsheetHeight(hp('10%'));
    setBorderRadius(wp('0%'));
    if (onCancelPress) {
      onCancelPress();
    }
  };

  return (
    <View>
      {Number(rbsheetHeight) > hp('50%') && (
        <TouchableOpacity
          style={styles.closeIconView}
          onPress={handleCancelPress}>
          <CLOSE fill={colors.white_FF} height={wp('3%')} width={wp('3%')} />
        </TouchableOpacity>
      )}
      <View
        style={[
          {
            height: rbsheetHeight,
            borderTopLeftRadius:
              Number(rbsheetHeight) > hp('50%') ? wp('7%') : 0,
            borderTopRightRadius:
              Number(rbsheetHeight) > hp('50%') ? wp('7%') : 0,
          },
          customStyle,
          styles.container,
        ]}>
        <View style={{flex: 1}}>{children}</View>
      </View>
    </View>
  );
};

export default DraggableView;
