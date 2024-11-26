import React, {useState} from 'react';
import {
  Animated,
  PanResponder,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// svg Imports
import CLOSE from '../../assets/svg/cancel.svg';

// contants
import {baseStyle, colors} from '../../constant/theme';

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
  const pan = useState(new Animated.Value(0))[0];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      let newHeight = Number(rbsheetHeight) - gestureState.dy;
      if (newHeight < hp('20%')) newHeight = hp('20%');
      if (newHeight > hp('85%')) newHeight = hp('85%');

      setRbsheetHeight(newHeight);

      if (newHeight > hp('50%')) {
        setBorderRadius(wp('5%'));
      } else {
        setBorderRadius(wp('0%'));
      }
    },
    onPanResponderRelease: () => {
      if (Number(rbsheetHeight) > hp('30%')) {
        setRbsheetHeight(hp('85%'));
      } else {
        setRbsheetHeight(hp('10%'));
      }
    },
  });

  const handleCancelPress = () => {
    setRbsheetHeight(hp('10%'));
    setBorderRadius(wp('0%'));
    if (onCancelPress) {
      onCancelPress();
    }
  };

  return (
    <View style={{}}>
      {Number(rbsheetHeight) > hp('50%') && (
        <TouchableOpacity
          style={styles.closeIconView}
          onPress={handleCancelPress}>
          <CLOSE fill={colors.white_FF} height={wp('3%')} width={wp('3%')} />
        </TouchableOpacity>
      )}
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            height: rbsheetHeight,
            borderTopLeftRadius:
              Number(rbsheetHeight) > hp('50%') ? hp('5%') : 0,
            borderTopRightRadius:
              Number(rbsheetHeight) > hp('50%') ? hp('5%') : 0,
          },
          customStyle,
          styles.container,
        ]}>
        <View style={{flex: 1, padding: 10}}>{children}</View>
      </Animated.View>
    </View>
  );
};

export default DraggableView;
