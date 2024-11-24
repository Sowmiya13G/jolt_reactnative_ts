import React, {useEffect, useRef} from 'react';
import {Animated, Image, ImageSourcePropType, Text, View} from 'react-native';

// packages
import {heightPercentageToDP} from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from './styles';
import {SvgProps} from 'react-native-svg';

interface PopUpProps {
  icon: React.ElementType<SvgProps>;
  title: string;
  disc: string;
}

const AnimatedSuccessIcon: React.FC<PopUpProps> = ({
  icon: Icon,
  title,
  disc,
}) => {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scale]);

  return (
    <View style={styles.subContainer}>
      <Animated.View style={{transform: [{scale}]}}>
        {Boolean(Icon) && (
          <View style={[styles.image]}>{Icon && <Icon />}</View>
        )}
      </Animated.View>
      <Spacer height={heightPercentageToDP('10%')} />
      <Text
        style={[baseStyle.txtStyleOutInterMedium(sizes.size4, colors.grey_32)]}>
        {title}
      </Text>
      <Spacer height={heightPercentageToDP('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
          styles.texAlign,
        ]}>
        {disc}
      </Text>
    </View>
  );
};

export default AnimatedSuccessIcon;
