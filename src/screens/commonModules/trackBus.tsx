import React from 'react';
import {Text, View} from 'react-native';

// packages
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// navigation
import navigationService from '../../navigation/navigationService';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';

// prop types
import {AccountScreenProps} from '../../propTypes/screenProps';

// SVG Imports
import BACKGROUND from '../../assets/svg/background.svg';
import GREY_ARROW from '../../assets/svg/greyArrowBack.svg';
import BUS from '../../assets/svg/whiteBus.svg';

// styles
import StopDetailsCard from '../../components/cards/stopDetails';
import Spacer from '../../components/spacer';
import styles from '../styles/trackBus';

const routeDataSample = {
  routes: [
    {place: 'K.K.Nagar', time: '9:30', total: 12, in: 12, out: 12},
    {place: 'Sriperumbudur', time: '11:30', total: 12, in: 12, out: 12},
    {place: 'Kolar', time: '2:00', total: 12, in: 12, out: 12},
    {place: 'Vellore', time: '3:00', total: 12, in: 12, out: 12},
    {place: 'Kirshnarajapuram', time: '3:00', total: 12, in: 12, out: 12},
    {place: 'Bangalore', time: '3:00', total: 12, in: 12, out: 12},
    {place: 'Majestic Bus Stand', time: '7:30', total: 12, out: 12},
  ],
  kiloMeter: 654,
  time: '04.27',
  currentStop: 'Vellore',
};

const TrackBus: React.FC<AccountScreenProps> = () => {
  // props

  // use state

  // ---------------------------------------- functionalities ----------------------------------------

  // ---------------------------------------- render ui ----------------------------------------

  return (
    <CustomSafeArea
      style={styles.container}
      statusBarBGColor={colors.orange_05}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        leftIconView={styles.leftIconView}
        leftIcon1={GREY_ARROW}
        containerStyle={{
          zIndex: 10,
          position: 'absolute',
        }}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: '100%',
        }}>
        <BACKGROUND />
      </View>
      <View
        style={{
          zIndex: 100,
          position: 'absolute',
          top: '7%',
          flex: 1,
          marginHorizontal: '5%',
          width: '90%',
        }}>
        <Spacer height={heightPercentageToDP('2%')} />
        <View
          style={{
            alignSelf: 'center',
            transform: [{scaleX: -1}],
            right: '2%',
          }}>
          <BUS />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, colors.white_FF),
            ]}>
            Chennai
          </Text>
          <Spacer width={widthPercentageToDP('2%')} />
          <View style={[styles.dot]} />
          {Array.from(
            {length: widthPercentageToDP('1.7%')},
            (_, index) => index + 1,
          ).map((x, y) => {
            return <View key={y} style={styles.horizontalLineView1} />;
          })}
          <View style={[styles.dot]} />
          <Spacer width={widthPercentageToDP('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, colors.white_FF),
            ]}>
            Bangalore
          </Text>
        </View>
        <Spacer height={heightPercentageToDP('2%')} />
        <StopDetailsCard data={routeDataSample} viewMap={() => {}} />
      </View>
      <Spacer height={heightPercentageToDP('5%')} />
    </CustomSafeArea>
  );
};

export default TrackBus;
