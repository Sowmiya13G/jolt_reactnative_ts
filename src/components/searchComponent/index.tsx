import React, {useState} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';

// components
import TextInputComponent from '../textInput';

// constant
import {colors} from '../../constant/theme';

// style
import styles from './styles';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import CURRENT from '../../assets/svg/current.svg';
import DESTINATION from '../../assets/svg/destination.svg';
import ARROW_SWAP from '../../assets/svg/swapArrow.svg';

interface SearchComponentProps {
  fromValue: string;
  toValue: string;
  fromPlaceHolder: string;
  toPlaceHolder: string;
  swapLocation?: () => void;
  onChangeFromLocation: (text: string) => void;
  onChangeToLocation: (text: string) => void;
  onFocusChange: (inputName: 'from' | 'to' | null) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  fromValue,
  toValue,
  fromPlaceHolder,
  toPlaceHolder,
  swapLocation = () => {},
  onChangeFromLocation,
  onChangeToLocation,
  onFocusChange,
}) => {
  const [rotation] = useState(new Animated.Value(0));
  const [focusedInput, setFocusedInput] = useState<'from' | 'to' | null>(null);
  const [rotated, setRotated] = useState(false);

  // Interpolate the rotation value
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  // Function to animate the swap icon
  const rotateIcon = () => {
    setRotated(prev => !prev);
    rotation.setValue(0);

    Animated.timing(rotation, {
      toValue: rotated ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleSwapLocation = () => {
    rotateIcon();
    swapLocation();
  };

  const handleFocus = (inputName: 'from' | 'to') => {
    setFocusedInput(inputName);
    onFocusChange(inputName);
  };

  return (
    <View style={styles.viewContainer}>
      <TextInputComponent
        value={fromValue}
        placeholderTextColor={colors.grey_95}
        placeholder={fromPlaceHolder}
        CustomStyle={styles.input}
        backgroundColor={colors.white_FB}
        icon={CURRENT}
        onChangeText={onChangeFromLocation}
        onFocus={() => handleFocus('from')}
      />
      <View style={styles.lineView}>
        <View style={styles.verticalLine} />
        <View style={styles.horizontalLine} />
        <TouchableOpacity style={styles.arrowView} onPress={handleSwapLocation}>
          <Animated.View
            style={[
              styles.swapIcon,
              {transform: [{rotate: rotateInterpolate}]},
            ]}>
            <ARROW_SWAP
              height={widthPercentageToDP('4%')}
              width={widthPercentageToDP('4%')}
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <TextInputComponent
        value={toValue}
        placeholderTextColor={colors.grey_95}
        placeholder={toPlaceHolder}
        CustomStyle={styles.input}
        backgroundColor={colors.white_FB}
        icon={DESTINATION}
        onChangeText={onChangeToLocation}
        onFocus={() => handleFocus('to')}
      />
    </View>
  );
};

export default SearchComponent;
