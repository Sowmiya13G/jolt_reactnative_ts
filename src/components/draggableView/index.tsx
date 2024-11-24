import React, {useState} from 'react';
import {
  Animated,
  PanResponder,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CLOSE from '../../assets/svg/cancel.svg';
import {colors} from '../../constant/theme';

interface DraggableViewProps {
  rbsheetHeight: number;
  setRbsheetHeight: React.Dispatch<React.SetStateAction<number>>;
  setBorderRadius: React.Dispatch<React.SetStateAction<number>>;
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
      let newHeight = rbsheetHeight - gestureState.dy;
      if (newHeight < hp('20%')) newHeight = hp('20%');
      if (newHeight > hp('85%')) newHeight = hp('85%');

      setRbsheetHeight(newHeight);

      // Change border radius based on height
      if (newHeight > hp('50%')) {
        setBorderRadius(hp('5%'));
      } else {
        setBorderRadius(0);
      }
    },
    onPanResponderRelease: () => {
      if (rbsheetHeight > hp('30%')) {
        setRbsheetHeight(hp('85%'));
      } else {
        setRbsheetHeight(hp('10%'));
      }
    },
  });

  const handleCancelPress = () => {
    setRbsheetHeight(hp('10%')); // Reset height
    setBorderRadius(0); // Reset border radius
    if (onCancelPress) {
      onCancelPress(); // Call optional callback
    }
  };

  return (
    <>
      {rbsheetHeight > hp('50%') && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            zIndex: 2,
            backgroundColor: 'transparent',
          }}
          onPress={handleCancelPress}>
          <CLOSE fill={colors.black_00} />
        </TouchableOpacity>
      )}
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            height: rbsheetHeight,
            backgroundColor: colors.green_2F,
            borderTopLeftRadius: rbsheetHeight > hp('50%') ? hp('5%') : 0,
            borderTopRightRadius: rbsheetHeight > hp('50%') ? hp('5%') : 0,
            position: 'relative',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          },
          customStyle,
        ]}>
        <View style={{flex: 1, padding: 10}}>{children}</View>
      </Animated.View>
    </>
  );
};

export default DraggableView;
