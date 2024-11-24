import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

//packages
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import PersonCount from '../../components/personCount';
import RenderDates from '../../components/renderDates';
import SearchComponent from '../../components/searchComponent';
import Spacer from '../../components/spacer';

// constant
import { SCREENS } from '../../constant';
import { dashboard, PLACEHOLDERS, strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

// utils
import { getNextDates, getSessionText } from '../../utils/helperFunctions';

// styles
import styles from '../styles/homeScreen';
// svg imports
import SEARCH from "../../assets/svg/search.svg";

const HomeScreen = () => {
  //props

  // local states
  const [data, setData] = useState({
    fromLocation: '',
    toLocation: '',
  });
  const [count, setCount] = useState(0);

  // use effects

  // ------------------ FUNCTIONALITIES ----------------------

  const headerData = {
    session: getSessionText(),
    user: dashboard.name,
  };

  const swapLocation = () => {
    setData(prevData => ({
      fromLocation: prevData.toLocation,
      toLocation: prevData.fromLocation,
    }));
  };

  const onChangeFromLocation = (value: string) => {
    setData(prevData => ({
      ...prevData,
      fromLocation: value,
    }));
  };

  const onChangeToLocation = (value: string) => {
    setData(prevData => ({
      ...prevData,
      toLocation: value,
    }));
  };

  const onFocusChange = (value: string | null) => {
    console.log('Focus changed:', value);
  };
  // ------------------ RENDER UI ----------------------

  const renderBody = () => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('3%')} />
        <SearchComponent
          fromValue={data.fromLocation}
          toValue={data.toLocation}
          fromPlaceHolder={PLACEHOLDERS.yourCurrentLocation}
          toPlaceHolder={PLACEHOLDERS.searchForDestination}
          swapLocation={() => swapLocation()}
          onChangeFromLocation={onChangeFromLocation}
          onChangeToLocation={onChangeToLocation}
          onFocusChange={onFocusChange}
        />
        <Spacer height={hp('3%')} />
        <View style={styles.horizontalLine} />
        <PersonCount count={count} setCount={setCount} />
        <View style={styles.horizontalLine} />
        <Spacer height={hp('3%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size3, colors.black_22),
          ]}>
          {dashboard.availableDates}
        </Text>
        <Spacer height={hp('2%')} />
        <RenderDates data={getNextDates()} isDates={true} isTrips={false} />
        <Spacer height={hp('5%')} />
        <Button
          onPress={() => {
            navigationService.navigate(SCREENS.SEARCH_SCREEN);
          }}
          text={dashboard.searchBus}
          buttonStyle={styles.button}
          textStyle={styles.textStyle}
          icon={SEARCH}
        />
        <Spacer height={hp('3%')} />
        <Text
          onPress={() =>
            navigationService.navigate(SCREENS.SEARCH_BUS_SCREEN, {
              data: {from: 'Chennai', to: 'Bangalore', date: '2024-11-15'},
            })
          }
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size02, colors.black_22),
            styles.texAlign,
          ]}>
          GO TO SEATS
        </Text>
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title={strings.forgotPasswordTitle}
        color={colors.black_28}
        isLeftIcon={false}
        isCommonHeader={false}
        titleData={headerData}
        isHomeHeader={true}
        sessionColor={colors.grey_085}
      />
      <FlatList
        data={['HOME_SCREEN']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};
export default HomeScreen;
