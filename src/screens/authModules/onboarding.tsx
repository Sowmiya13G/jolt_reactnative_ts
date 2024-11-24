import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Text, View } from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// navigation
import navigationService from '../../navigation/navigationService';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Spacer from '../../components/spacer';

// constants
import { SCREENS } from '../../constant';
import { onboardingData } from '../../constant/staticData';
import { strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from '../styles/onboarding';

// svg
import LOGO from '../../assets/svg/logo.svg';

const OnboardingScreen: React.FC = props => {
  // ref
  const flatListRef = useRef<FlatList<any>>(null);
  const animation = useRef(new Animated.Value(0)).current;

  // local states
  const [sliderState, setSliderState] = useState<{currentPage: number}>({
    currentPage: 0,
  });

  // variables
  const {width, height} = Dimensions.get('window');
  const {currentPage: pageIndex} = sliderState;

  // ---------------------------------------- Functionalities ----------------------------------------

  const setSliderPage = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);

    if (indexOfNextScreen !== sliderState.currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });

      Animated.timing(animation, {
        toValue: indexOfNextScreen,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleCompleteSlider = () => {
    navigationService.navigate(SCREENS.LOGIN);
  };

  const goToNextPage = () => {
    const nextPage = sliderState.currentPage + 1;
    if (nextPage < onboardingData.length) {
      setSliderState({
        ...sliderState,
        currentPage: nextPage,
      });

      Animated.timing(animation, {
        toValue: nextPage,
        duration: 300,
        useNativeDriver: false,
      }).start();

      flatListRef.current?.scrollToIndex({index: nextPage});
    }
    if (nextPage === onboardingData?.length) {
      handleCompleteSlider();
    }
  };

  // ---------------------------------------- render ui ----------------------------------------

  return (
    <CustomSafeArea style={styles.container}>
      <Spacer height={hp('5%')} />
      <View style={[styles.iconView, styles.marginHorizontal]}>
        <View style={styles.logoView}>
          <LOGO height={wp('12%')} width={wp('12%')} style={styles.logo} />
        </View>
        <Spacer width={wp('3%')} />
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, colors.black_00),
            ]}>
            {strings.joltBus}
          </Text>
          <Spacer height={hp('0.5%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.black_00),
            ]}>
            {strings.futureTransportation}
          </Text>
        </View>
      </View>
      <FlatList
        data={onboardingData}
        ref={flatListRef}
        renderItem={({item}) => (
          <View style={{width, height: '100%'}}>
            <View style={[styles.wrapper, styles.marginHorizontal]}>
              <Spacer height={hp('10%')} />
              <View style={styles.imageStyle}>{item.image}</View>
              <Spacer height={hp('3%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(
                    sizes.size3,
                    colors.black_00,
                  ),
                  styles.textAlign,
                ]}>
                {item.title}
              </Text>
              <Spacer height={hp('3%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.black_00,
                  ),
                  styles.textAlign,
                ]}>
                {item.disc}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onScroll={event => {
          setSliderPage(event);
        }}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
      />
      <Spacer height={hp('2%')} />
      <View style={styles.paginationWrapper}>
        {onboardingData.map((_, index) => {
          const backgroundColor = animation.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [colors.grey_DD, colors.green_7D, colors.grey_DD],
            extrapolate: 'clamp',
          });

          const width = animation.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [wp('2.5%'), wp('8%'), wp('2.5%')],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.paginationDots,
                {
                  backgroundColor,
                  width,
                },
              ]}
            />
          );
        })}
      </View>

      <Spacer height={hp('10%')} />
      <View style={[styles.buttonView, styles.marginHorizontal]}>
        <Button
          onPress={() => navigationService.navigate(SCREENS.BOTTOM_TAB_NAV)}
          text={strings.skip}
          textColor={colors.grey_50}
          buttonStyle={styles.skipButton}
        />
        <Button
          onPress={() => goToNextPage()}
          text={pageIndex === 0 ? strings.getStart : strings.next}
          textColor={colors.white_FF}
          buttonStyle={styles.nextButton}
        />
      </View>
      <Spacer height={hp('10%')} />
    </CustomSafeArea>
  );
};

export default OnboardingScreen;
