import React from 'react';
import {Text, View} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

//constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

//style
import styles from './styles';

// prop types

import CURRENT from '../../../assets/svg/current.svg';
import DESTINATION from '../../../assets/svg/destination.svg';
import ORANGE_BUS from '../../../assets/svg/orangeBus.svg';
import {ticketDetails} from '../../../constant/strings';

//constant
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

interface RouteDetailsCardProps {
  data: Trip;
}

const RouteDetailsCard: React.FC<RouteDetailsCardProps> = ({data}) => {
  return (
    <View style={styles.viewContainer}>
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
        ]}>
        {ticketDetails.journey}
      </Text>
      <Spacer height={hp('4%')} />
      <View style={styles.row}>
        <CURRENT height={wp('5.5%')} width={wp('5.5%')} />
        <Spacer width={wp('5%')} />
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_28),
            ]}>
            Chennai
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_67),
            ]}>
            Thu,16 Jan 2024 - 24:00
          </Text>
        </View>
      </View>
      <Spacer height={hp('2%')} />
      <View style={styles.row}>
        <DESTINATION height={wp('5.5%')} width={wp('5.5%')} />
        <Spacer width={wp('5%')} />

        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_28),
            ]}>
            Bangalore
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_67),
            ]}>
            Thu,17 Jan 2024 - 18:35
          </Text>
        </View>
      </View>

      <Spacer height={hp('2%')} />
      <View style={styles.separatorLine} />
      <Spacer height={hp('2%')} />
      <View style={styles.rowView}>
        <View style={styles.row}>
          <View style={styles.green} />
          <Spacer width={wp('2%')} />

          <ORANGE_BUS height={wp('5%')} width={wp('5%')} />
          <Spacer width={wp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.orange_05),
            ]}>
            {ticketDetails.busArrival}
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_67),
              ]}>
              {` in`}
            </Text>
          </Text>
          <Spacer width={wp('1%')} />

          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_67),
            ]}>
            10:55
          </Text>
          <Spacer width={wp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_67),
            ]}>
            at New Bus Stand
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RouteDetailsCard;
