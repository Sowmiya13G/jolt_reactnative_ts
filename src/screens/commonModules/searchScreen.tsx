import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import RenderDates from '../../components/renderDates';
import SearchComponent from '../../components/searchComponent';
import Spacer from '../../components/spacer';

// constants
import { iconPathURL } from '../../constant/iconpath';
import { dashboard, PLACEHOLDERS } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from '../styles/searchScreen';

// Types
interface Trip {
  id: number;
  from: string;
  to: string;
}

interface City {
  id: number;
  city: string;
}

interface Data {
  fromLocation: string;
  toLocation: string;
}

const SearchScreen: React.FC = () => {
  // local states
  const [data, setData] = useState<Data>({
    fromLocation: '',
    toLocation: '',
  });
  const [focusedInput, setFocusedInput] = useState<'from' | 'to' | null>(null);
  console.log("🚀 ~ focusedInput:", focusedInput)

  // data
  const trips: Trip[] = [
    {id: 1, from: 'Bangalore', to: 'Chennai'},
    {id: 2, from: 'Bangalore', to: 'Coimbatore'},
    {id: 3, from: 'Delhi', to: 'Goa'},
    {id: 4, from: 'Mumbai', to: 'Pune'},
  ];

  const cityList: City[] = [
    {id: 1, city: 'Bangalore'},
    {id: 2, city: 'Bangalore'},
    {id: 3, city: 'Delhi'},
    {id: 4, city: 'Mumbai'},
  ];

  // ------------------ FUNCTIONALITIES ----------------------

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

  const handleFocusChange = (inputName: 'from' | 'to' | null) => {
    setFocusedInput(inputName);
  };

  const handleCitySelect = (city: string) => {
    if (focusedInput === 'from') {
      onChangeFromLocation(city);
    } else if (focusedInput === 'to') {
      onChangeToLocation(city);
    }
    setFocusedInput(null);
  };

  const handleTripSelect = (from: string, to: string) => {
    setData({
      fromLocation: from,
      toLocation: to,
    });
  };

  // ------------------ RENDER UI ----------------------

  const renderCityList = ({item}: {item: City}) => {
    return (
      <>
        <Spacer height={hp('1%')} />
        <TouchableOpacity
          onPress={() => handleCitySelect(item.city)}
          style={styles.view}>
          <View style={styles.row}>
            <Image source={iconPathURL.location} style={styles.location} />
            <Spacer width={wp('3%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_AB),
              ]}>
              {item.city}
            </Text>
          </View>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_AB),
            ]}>
            {dashboard.city}
          </Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
      </>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('3%')} />
        <SearchComponent
          fromValue={data.fromLocation}
          toValue={data.toLocation}
          fromPlaceHolder={PLACEHOLDERS.yourCurrentLocation}
          toPlaceHolder={PLACEHOLDERS.searchForDestination}
          swapLocation={swapLocation}
          onChangeFromLocation={onChangeFromLocation}
          onChangeToLocation={onChangeToLocation}
          onFocusChange={handleFocusChange} 
        />
        {Boolean(focusedInput) ? (
          <FlatList
            data={cityList}
            renderItem={renderCityList}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <>
            <Spacer height={hp('3%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size3, colors.black_22),
              ]}>
              {dashboard.recentTrips}
            </Text>
            <Spacer height={hp('2%')} />
            <RenderDates
              data={trips}
              isTrips={true}
              isDates={false}
              onTripSelect={handleTripSelect}
            />
            <Spacer height={hp('2%')} />
          </>
        )}
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title={dashboard.searchRoute}
        color={colors.grey_32}
      />
      <TouchableWithoutFeedback onPress={() => setFocusedInput(null)}>
        {renderBody()}
      </TouchableWithoutFeedback>
    </CustomSafeArea>
  );
};

export default SearchScreen;
