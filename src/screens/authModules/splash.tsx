import React, { useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';

// package
import { heightPercentageToDP } from 'react-native-responsive-screen';

// components
import Spacer from '../../components/spacer';

// styles
import styles from '../styles/splash';

// navigation
import NavigationService from '../../navigation/navigationService';

// constants
import { SCREENS } from '../../constant';
import { strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

import LOGO from '../../assets/svg/logo.svg';

const SplashScreen: React.FC = () => {
  const [progress] = useState<Animated.Value>(new Animated.Value(0));

  // ---------------- useEffect ------------------
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      NavigationService.navigate(SCREENS.ONBOARDING);
    }, 3000);
  }, [progress]);

  // --------------- Render UI Components -------------------

  return (
    <View style={styles.container}>
      <LOGO />
      <Text style={[baseStyle.txtStyleOutInterBold(sizes.size4, colors.white_FF)]}>
        {strings.joltBus}
      </Text>
      <Spacer height={heightPercentageToDP('10%')} />
      <View style={styles.loaderContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
