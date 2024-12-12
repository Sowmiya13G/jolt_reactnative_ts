import React, {useState} from 'react';
import {Animated, FlatList, Text, View, ViewStyle} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import BottomSheetView from '../../components/reviewSheetView';
import Spacer from '../../components/spacer';

// constants
import {SCREENS} from '../../constant';
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// prop types
import {BoardingPointRouteParams} from '../../propTypes/screenProps';

// styles
import styles from '../styles/selectSeat';
import SleepSeat from '../../components/dynamicSVG/sleepSeat';
import SingleSeat from '../../components/dynamicSVG/singleSeat';

const SelectSeat: React.FC<BoardingPointRouteParams> = props => {
  // props
  const {data} = props.route.params;
  const {
    item: {name, timePeriod},
    date,
  } = data;
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const disc = `${name} - ${timePeriod[0]}, ${formattedDate}`;

  // use state
  const [rbsheetHeight, setRbsheetHeight] = useState<string | number>(hp('9%'));
  const [borderRadius, setBorderRadius] = useState<string | number>(wp('0%'));
  const [activeTab, setActiveTab] = React.useState<string>(SCREENS.DASHBOARD);
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [selectedSeats, setSelectedSeats] = React.useState([{selectedSeat: 1}]);
  // const [selectedSeats, setSelectedSeats] = React.useState([]);

  const shadowOpacity = useState(new Animated.Value(0))[0];
  const shadowOpacitySafeArea = useState(new Animated.Value(1))[0];

  // ---------------------------------------- functionalities ----------------------------------------
  const updateShadowOpacity = (height: string | number) => {
    const opacityValue = Number(height) > hp('50%') ? 0.4 : 0;
    const safeAreaOpacityValue = Number(height) > hp('50%') ? 0.3 : 1;

    Animated.timing(shadowOpacity, {
      toValue: opacityValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(shadowOpacitySafeArea, {
      toValue: safeAreaOpacityValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // ---------------------------------------- use effects ----------------------------------------

  React.useEffect(() => {
    updateShadowOpacity(rbsheetHeight);
  }, [rbsheetHeight]);

  // ---------------------------------------- render ui ----------------------------------------

  const renderBody = () => {
    return (
      <View style={styles.paddingHorizontal}>
        <SleepSeat fillColor={colors.pink_AD} strokeColor={colors.pink_636} />
        <Spacer height={hp('3%')} />
        <SingleSeat fillColor={colors.pink_AD} borderColor={colors.pink_636} />
      </View>
    );
  };

  return (
    <CustomSafeArea
      style={styles.container as ViewStyle}
      opacity={shadowOpacitySafeArea}
      statusBarBGColor={
        Number(rbsheetHeight) > hp('70%')
          ? 'rgba(0, 0, 0, 0.5)'
          : colors.white_FF
      }>
      <Header
        goBack={() => navigationService.goBack()}
        title={`${data?.from} To ${data?.to}`}
        color={colors.black_00}
        titleDisc={disc}
        headerStyle={styles.header}
      />
      <Spacer height={hp('3%')} />
      <FlatList
        data={['SEATS']}
        renderItem={renderBody}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />

      <Animated.View
        style={[
          styles.shadowOverlay,
          {
            opacity: shadowOpacity,
          },
        ]}
      />
      <BottomSheetView
        rbsheetHeight={rbsheetHeight}
        setRbsheetHeight={setRbsheetHeight}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setBorderRadius={setBorderRadius}
      />

      {showFooter && selectedSeats?.length > 0 && (
        <View style={styles.priceDetails}>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size2,
                  colors.white_FF,
                ),
              ]}>
              ₹ 1820
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size02,
                  colors.white_FF,
                ),
              ]}>
              For 4 Seats
            </Text>
          </View>
          <View style={styles.offers}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.white_FF),
              ]}>
              Offers
            </Text>
          </View>
          <Button
            onPress={() =>
              navigationService.navigate(SCREENS.REVIEW_BOOKING, {data: data})
            }
            text={strings.next}
            buttonStyle={styles.submitButton}
            textStyle={styles.submitButtonTextStyle}
          />
        </View>
      )}
    </CustomSafeArea>
  );
};

export default SelectSeat;
