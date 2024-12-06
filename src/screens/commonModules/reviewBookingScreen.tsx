import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, ViewStyle} from 'react-native';

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
import DropDown from '../../components/dropDown';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constants
import {SCREENS} from '../../constant';
import {genderData} from '../../constant/staticData';
import {account, selectSeat, strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// prop types
import {BoardingPointRouteParams} from '../../propTypes/screenProps';

// styles
import styles from '../styles/reviewBooking';

// svg imports
import CHECK from '../../assets/svg/check.svg';
import FEMALE from '../../assets/svg/female.svg';
import MALE from '../../assets/svg/male.svg';
import UN_CHECK from '../../assets/svg/unCheck.svg';

interface Passenger {
  no: string;
}

const ReviewBooking: React.FC<BoardingPointRouteParams> = props => {
  // props
  const {data} = props.route.params;
  const {
    item: {name, timePeriod, duration},
    date,
  } = data;
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const disc = `${name} - ${timePeriod[0]}, ${formattedDate}`;
  const [newPassengerName, setNewPassengerName] = useState('');
  const [newPassengerAge, setNewPassengerAge] = useState('');
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [check, setCheck] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const isMale = selectedGender == 'male';
  const isFemale = selectedGender == 'female';

  const seats = [{no: 'DL1'}, {no: 'MB1'}];

  // use state

  // ---------------------------------------- functionalities ----------------------------------------

  // ---------------------------------------- use effects ----------------------------------------

  // ---------------------------------------- render ui ----------------------------------------

  const renderInputView = ({item, index}: Passenger) => {
    return (
      <>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.black_00),
          ]}>
          {`Passenger ${index + 1}`}
        </Text>
        <Spacer height={hp('1%')} />
        <View style={styles.passengerView}>
          <View style={styles.input}>
            <TextInputComponent
              value={newPassengerName}
              onChangeText={text => {
                const name = text.replace(/[^a-zA-Z\s]/g, '');
                setNewPassengerName(name);
              }}
              placeholderTextColor={colors.grey_95}
              placeholder={account.fullName}
            />
          </View>
          <Spacer width={wp('3%')} />
          <View style={styles.ageInput}>
            <TextInputComponent
              value={newPassengerAge}
              onChangeText={setNewPassengerAge}
              placeholderTextColor={colors.grey_95}
              placeholder={account.age}
              maxLength={3}
              keyboardType="numeric"
            />
          </View>
          <Spacer width={wp('3%')} />
          <TouchableOpacity
            style={{
              borderColor: isMale ? colors.green_2F : colors.grey_DD,
              borderWidth: 1,
              padding: wp('2.5%'),
              borderRadius: wp('2%'),
              backgroundColor: isMale ? colors.green_C1 : colors.transparent,
            }}
            onPress={() => setSelectedGender('male')}>
            <MALE height={wp('7.5%')} width={wp('7%')} />
          </TouchableOpacity>
          <Spacer width={wp('3%')} />
          <TouchableOpacity
            style={{
              borderColor: isFemale ? colors.green_2F : colors.grey_DD,
              borderWidth: 1,
              padding: wp('2.5%'),
              borderRadius: wp('2%'),
              backgroundColor: isFemale ? colors.green_C1 : colors.transparent,
            }}
            onPress={() => setSelectedGender('female')}>
            <FEMALE height={wp('7.5%')} width={wp('7%')} />
          </TouchableOpacity>
        </View>
        <Spacer height={hp('2%')} />
      </>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.margin}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_00),
          ]}>
          Yolo Bus
        </Text>
        <Spacer height={hp('1%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_55),
          ]}>
          {name}
        </Text>
        <Spacer height={hp('2%')} />
        <View style={styles.horizontalLine} />
        <View style={styles.rowView}>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.grey_67),
            ]}>
            {timePeriod[0]}
          </Text>
          <View style={styles.horizontalLineView} />
          <View style={styles.duration}>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size02,
                  colors.grey_55,
                ),
              ]}>
              {duration}
            </Text>
          </View>
          <View style={styles.horizontalLineView} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.grey_67),
            ]}>
            {timePeriod[1]}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.rowWithPadding}>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.grey_67),
            ]}>
            Selected Seat
          </Text>
          <Spacer width={wp('2%')} />
          {seats.map((x, y) => (
            <View style={styles.orangeView}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(
                    sizes.size2,
                    colors.white_FF,
                  ),
                ]}>
                {x?.no}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.rowView}>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_00),
            ]}>
            Traveler Details
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.red_18),
            ]}>
            {`0/${seats?.length} Seats Added`}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <Spacer height={hp('2%')} />
        <FlatList
          data={seats}
          renderItem={renderInputView}
          keyExtractor={item => item.no}
        />
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_00),
          ]}>
          Contact Details
        </Text>
        <Spacer height={hp('1%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size02, colors.black_00),
          ]}>
          We’ll send your ticket here
        </Text>
        <Spacer height={hp('2%')} />
        <View style={styles.horizontalLine} />
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.grey_37),
          ]}>
          Email Address
        </Text>
        <Spacer height={hp('1%')} />
        <TextInputComponent
          value={newPassengerName}
          onChangeText={text => {
            const name = text.replace(/[^a-zA-Z\s]/g, '');
            setNewPassengerName(name);
          }}
          placeholderTextColor={colors.grey_95}
          placeholder={'Email Address'}
        />
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.grey_37),
          ]}>
          Phone Number
        </Text>
        <Spacer height={hp('1%')} />
        <TextInputComponent
          value={newPassengerName}
          onChangeText={text => {
            const name = text.replace(/[^a-zA-Z\s]/g, '');
            setNewPassengerName(name);
          }}
          placeholderTextColor={colors.grey_95}
          placeholder={account.fullName}
        />
        <Spacer height={hp('4%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_00),
          ]}>
          Your State
        </Text>
        <Spacer height={hp('1%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size02, colors.black_00),
          ]}>
          Requierd for GST purpose on your tax invoice
        </Text>
        <Spacer height={hp('2%')} />
        <View style={styles.horizontalLine} />
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.grey_37),
          ]}>
          Select State
        </Text>
        <Spacer height={hp('1%')} />
        <DropDown
          placeholder={'Select State'}
          dropdownData={genderData}
          value={selectedState}
          onSelectItem={() => {}}
        />
        <Spacer height={hp('2%')} />
        <View style={styles.checkRow}>
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
            ]}>
            Confirm and save these details to your Account
          </Text>
        </View>
        <Spacer height={hp('5%')} />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.priceDetails}>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.white_FF),
            ]}>
            ₹ 1820
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.white_FF),
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
          onPress={() => navigationService.navigate(SCREENS.REVIEW_BOOKING)}
          text={strings.next}
          buttonStyle={styles.submitButton}
          textStyle={styles.submitButtonTextStyle}
        />
      </View>
    );
  };
  return (
    <CustomSafeArea
      style={styles.container as ViewStyle}
      statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => navigationService.goBack()}
        title={selectSeat.reviewBooking}
        color={colors.black_00}
        titleDisc={`${data?.from} To ${data?.to}`}
        headerStyle={styles.header}
      />
      <Spacer height={hp('3%')} />
      <FlatList
        data={['REVIEW_BOOKING']}
        renderItem={renderBody}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
      />
      {renderFooter()}
    </CustomSafeArea>
  );
};

export default ReviewBooking;
