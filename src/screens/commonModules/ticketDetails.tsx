import React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import BusDataCard from '../../components/cards/busDataCard';
import PaymentDetails from '../../components/cards/paymentDetails';
import RouteDetailsCard from '../../components/cards/routeDeatilsCard';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constants
import {ticketDetails} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from '../styles/ticketDetails';

// SVG Imports
import CANCEL from '../../assets/svg/calncelBtn.svg';
import CHAT from '../../assets/svg/chat.svg';
import MAP from '../../assets/svg/map.svg';
import OPTIONS from '../../assets/svg/options.svg';
import QR from '../../assets/svg/qr.svg';
import {TouchableOpacity} from 'react-native';
import {SCREENS} from '../../constant';

interface RouteDetails {
  from: string;
  fromTime: string;
  to: string;
  toTime: string;
}

interface BusData {
  status: string;
  bus: string;
  routeDetails: RouteDetails;
}

interface Trip {
  name: string;
  bus: string;
  routeDetails: {
    from: string;
    fromTime: string;
    to: string;
    toTime: string;
  };
  status: string;
  passengerName: string;
  seatNo: string;
  fare: number;
  bookedOn?: string;
}
interface BusData {
  status: string;
  bus: string;
  routeDetails: RouteDetails;
}

// Example RouteDetails structure
interface RouteDetails {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
}

interface PaymentDetailsProps {
  data: {
    price: string;
    discount: string;
    tax: string;
    convenience: string;
  };
}
interface TicketDetailsProps {
  route: {
    params: {
      details: object;
    };
  };
}
const paymentDetails: PaymentDetailsProps = {
  data: {
    price: '1030',
    discount: '530',
    tax: '100',
    convenience: '30',
  },
};

const TicketDetails: React.FC<TicketDetailsProps> = ({route}) => {
  // props
  const {details} = route.params;

  // Render Body
  const renderBody = ({item}: ListRenderItemInfo<string>) => {
    return (
      <View style={styles.subContainer}>
        <View style={styles.marginHorizontal}>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, colors.black_28),
              styles.texAlign,
            ]}>
            {ticketDetails.eTicket}
          </Text>
          <Spacer height={hp('2%')} />
          <View style={styles.alignSelf}>
            <QR height={wp('40%')} width={wp('40%')} />
          </View>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.grey_085),
              styles.texAlign,
            ]}>
            {ticketDetails.code}
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size3, colors.black_28),
              styles.texAlign,
            ]}>
            BUS01150224
          </Text>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_085),
              styles.texAlign,
            ]}>
            {ticketDetails.scanCode}
          </Text>
        </View>
        <Spacer height={hp('3%')} />
        <View style={styles.horizontalLine} />
        <Spacer height={hp('3%')} />

        <BusDataCard data={details as BusData} />
        <Spacer height={hp('2%')} />
        <RouteDetailsCard data={details as Trip} />
        <View style={styles.horizontalLine} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
            styles.marginHorizontal,
          ]}>
          {ticketDetails.trackBus}
        </Text>
        <Spacer height={hp('2%')} />
        <TouchableOpacity
          onPress={() => navigationService.navigate(SCREENS.TRACK_BUS)}
          style={styles.mapView}>
          <MAP />
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
            styles.marginHorizontal,
          ]}>
          {ticketDetails.passengerInfo}
        </Text>
        <Spacer height={hp('2%')} />
        <View style={styles.borderView}>
          <View style={styles.column}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Mobile
            </Text>
            <Spacer height={hp('2%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Email
            </Text>
          </View>
          <View style={styles.column60}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              +6282198761234
            </Text>
            <Spacer height={hp('2%')} />

            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              oliviarhye@gmail.com
            </Text>
          </View>
        </View>
        <Spacer height={hp('2%')} />
        <View style={styles.borderView2}>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Passenger 1
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              Olivia Rhye
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Male, 32
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Seat(s)
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              US2
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Shared Upper single
            </Text>
          </View>
        </View>
        <Spacer height={hp('2%')} />
        <View style={styles.borderView2}>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Passenger 1
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              Olivia Rhye
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Male, 32
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Seat(s)
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
                styles.marginHorizontal,
              ]}>
              US2
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
                styles.marginHorizontal,
              ]}>
              Shared Upper single
            </Text>
          </View>
        </View>
        <Spacer height={hp('2%')} />
        <View style={styles.horizontalLine} />
        <PaymentDetails data={paymentDetails.data} />
        <View style={styles.horizontalLine} />
        <View style={styles.marginHorizontal}>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
              styles.marginHorizontal,
            ]}>
            Help
          </Text>
          <Spacer height={hp('2.5%')} />
          <View style={styles.btnContainer}>
            <Button
              onPress={() => {}}
              text={'Chat With Us'}
              icon={CHAT}
              textColor={colors.black_00}
              buttonStyle={styles.chat}
              textStyle={baseStyle.txtStyleOutInterRegular(
                sizes.size02,
                colors.black_00,
              )}
              spaceBetween={wp('2%')}
            />
            <Button
              onPress={() => {}}
              text={'Cancel Ticket'}
              spaceBetween={wp('2%')}
              icon={CANCEL}
              textColor={colors.white_FF}
              buttonStyle={styles.cancel}
              textStyle={baseStyle.txtStyleOutInterRegular(
                sizes.size02,
                colors.white_FF,
              )}
            />
          </View>
        </View>
        <Spacer height={hp('10%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.black_28),
            styles.texAlign,
          ]}>
          Happy Journey!
        </Text>
        <Spacer height={hp('1%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.black_28),
            styles.texAlign,
          ]}>
          All rights reserved by JoltBus®
        </Text>
        <Spacer height={hp('5%')} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        isRightIcon={true}
        rightIcon={OPTIONS}
        rightIconView={styles.iconView}
        rightIconPress={() => {}}
        title={ticketDetails.ticketDetail}
      />
      <FlatList
        data={['MY_TRIP']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default TicketDetails;

{
  /* <Spacer height={hp('3%')} />
<View style={styles.horizontalLine} /> */
}
