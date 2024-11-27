import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Platform} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import SearchComponent from '../searchComponent';
import Spacer from '../spacer';

// constants
import {account, PLACEHOLDERS, strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

import styles from './styles';

import CHECK from '../../assets/svg/check.svg';
import UN_CHECK from '../../assets/svg/unCheck.svg';
import GREY_ARROW from '../../assets/svg/greyArrow.svg';
import RenderDates from '../renderDates';

import {Trip} from '../../propTypes/screenProps';

interface AddRouteProps {
  enableEdit: boolean;
  onEdit: () => void;
}

const trips: Trip[] = [
  {id: 1, from: 'Bangalore', to: 'Chennai'},
  {id: 2, from: 'Bangalore', to: 'Coimbatore'},
  {id: 3, from: 'Delhi', to: 'Goa'},
  {id: 4, from: 'Mumbai', to: 'Pune'},
];

const AddRoute: React.FC<AddRouteProps> = ({enableEdit, onEdit}) => {
  const [locations, setLocations] = useState({
    fromLocation: '',
    toLocation: '',
  });
  const [check, setCheck] = useState<boolean>(false);

  // Swap locations functionality
  const swapLocation = () => {
    setLocations(prev => ({
      fromLocation: prev.toLocation,
      toLocation: prev.fromLocation,
    }));
  };

  // Input change handlers
  const onChangeLocation = (
    field: 'fromLocation' | 'toLocation',
    value: string,
  ) => {
    setLocations(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTripSelect = (from: string, to: string) => {
    setLocations({
      fromLocation: from,
      toLocation: to,
    });
  };

  // Placeholder function for focus change
  const onFocusChange = (field: string | null) => {
    console.log(`${field} field focused`);
  };

  const handleAddRoute = () => {};

  return (
    <View>
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_054),
        ]}>
        {account.route}
      </Text>
      <Spacer height={hp('1%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size011, colors.grey_054),
        ]}>
        {account.addRouteDisc}
      </Text>
      <Spacer height={hp('2%')} />
      <SearchComponent
        fromValue={locations.fromLocation}
        toValue={locations.toLocation}
        fromPlaceHolder={PLACEHOLDERS.fromCity}
        toPlaceHolder={PLACEHOLDERS.toCity}
        swapLocation={() => swapLocation()}
        onChangeFromLocation={value => onChangeLocation('fromLocation', value)}
        onChangeToLocation={value => onChangeLocation('toLocation', value)}
        onFocusChange={onFocusChange}
      />
      <Spacer height={hp('2%')} />
      <View style={styles.row}>
        <TouchableOpacity onPress={() => setCheck(!check)}>
          {Boolean(check) ? (
            <CHECK height={wp('4.5%')} width={wp('4.5%')} />
          ) : (
            <UN_CHECK height={wp('4.5%')} width={wp('4.5%')} />
          )}
        </TouchableOpacity>
        <Spacer width={wp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_37),
            styles.texAlign,
          ]}>
          {strings.iAgree}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.blue_F4),
            ]}>
            {strings.policy}{' '}
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_37),
            ]}>
            {strings.and}{' '}
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.blue_F4),
            ]}>
            {strings.terms}
          </Text>
        </Text>
      </View>
      <Spacer height={hp('2%')} />

      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_054),
        ]}>
        {account.suggestions}
      </Text>
      <Spacer height={hp('1.5%')} />
      <RenderDates
        data={trips}
        isTrips={true}
        isDates={false}
        onTripSelect={handleTripSelect}
        textStyleTrip={baseStyle.txtStyleOutInterRegular(
          sizes.size01,
          colors.grey_085,
        )}
        customStylesTrip={{
          marginHorizontal: Platform?.OS == 'ios' ? wp('1%') : wp('0.5%'),
          paddingVertical: wp('1%'),
          paddingHorizontal: Platform?.OS == 'ios' ? wp('1.5%') : wp('1%'),
          // backgroundColor: isSelected ? colors.green_2F : colors.white_FF,
          borderColor: colors.grey_085,
          borderRadius: wp('6%'),
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: wp('0.2%'),
          marginBottom: wp('2.5%'),
        }}
        arrowIcon={GREY_ARROW}
      />
      <Spacer height={hp('1.5%')} />
      <TouchableOpacity style={styles.addPassengerBtn} onPress={handleAddRoute}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.orange_05),
          ]}>
          {account.addRoute}
        </Text>
      </TouchableOpacity>
      {enableEdit ? <Text></Text> : <Text></Text>}
    </View>
  );
};

export default AddRoute;
