import React from 'react';
import { Text, View } from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import { baseStyle, colors, sizes } from '../../../constant/theme';

// style
import styles from './styles';

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

interface BusDataCardProps {
  data: BusData;
}

const BusDataCard: React.FC<BusDataCardProps> = ({data}) => {
  const isNotUpcoming = data?.status != 'Booked';
  const isCompleted = data?.status == 'Completed';
  const isUpcoming = data?.status == 'Booked';
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <View
          style={[
            styles.statusView,
            {
              backgroundColor: isUpcoming
                ? colors.green_2F
                : isCompleted
                ? colors.blue_f5
                : colors.orange_27,
            },
          ]}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size02, colors.white_FF),
            ]}>
            {data?.status}
          </Text>
        </View>
        <Spacer height={hp('2%')} />
          <Text
            style={[
              styles.busName,
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_55),
            ]}>
            {data.bus}
          </Text>
          <Spacer height={hp('2%')} />
          <View style={styles.horizontalLineView} />
          <Spacer height={hp('2%')} />
          <View style={[styles.row]}>
            <View>
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(
                    sizes.size02,
                    colors.black_F40,
                  ),
                ]}>
                {data.routeDetails?.from}
              </Text>
              <Spacer height={hp('0.7%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size11,
                    colors.black_F40,
                  ),
                ]}>
                {data.routeDetails?.fromTime}
              </Text>
            </View>
            <Spacer width={wp('1%')} />
            <View style={styles.horizontalLine1} />
            <View style={styles.time}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size02,
                    colors.grey_55,
                  ),
                ]}>
                7h 20m
              </Text>
            </View>
            <View style={styles.horizontalLine1} />
            <Spacer width={wp('1%')} />
            <View>
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(
                    sizes.size02,
                    colors.black_F40,
                  ),
                ]}>
                {data.routeDetails?.to}
              </Text>
              <Spacer height={hp('0.7%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size11,
                    colors.black_F40,
                  ),
                ]}>
                {data.routeDetails?.toTime}
              </Text>
            </View>
          </View>
        <View style={styles.horizontalRow}>
          <View style={[styles.circleView, styles.rightCircle]} />
          <View style={[styles.circleView, styles.leftCircle]} />
        </View>
        <Spacer height={hp('3%')} />
        <View style={styles.footerView}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size02, colors.grey_67),
            ]}>
            Seat No :
          </Text>
          <Spacer width={wp('2%')} />
          <View style={styles.seat}>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size02,
                  colors.white_FF,
                ),
              ]}>
              US 1
            </Text>
          </View>
          <Spacer width={wp('2%')} />
          <View style={styles.seat}>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size02,
                  colors.white_FF,
                ),
              ]}>
              US 2
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusDataCard;
