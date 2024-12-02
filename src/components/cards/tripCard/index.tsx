import React from 'react';
import {Text, View,TouchableOpacity} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// components
import Button from '../../button';
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';

// SVG Imports
import BUS from '../../../assets/svg/busIcon.svg';
import STAR from '../../../assets/svg/star.svg';
interface TripCardType {
  data: {
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
  };
  bookAgain: () => void;
  addReview: () => void;
  onClick: () => void;

}

  const TripCard: React.FC<TripCardType> = ({data, bookAgain,
  onClick,
  addReview}) => {
  const isNotUpcoming = data?.status != 'Booked';
  const isCompleted = data?.status == 'Completed';
  const isUpcoming = data?.status == 'Booked';

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
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
        <View style={styles.routeDetails}>
          <View style={styles.row}>
            <View style={styles.imageIcon} />
            <View>
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(
                    sizes.size3,
                    colors.black_F40,
                  ),
                  styles.paddingHorizontal,
                ]}>
                {data.name}
              </Text>
              <Spacer height={hp('1%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size11,
                    colors.grey_55,
                  ),
                  styles.paddingHorizontal,
                ]}>
                {data.bus}
              </Text>
            </View>
          </View>
          <Spacer height={hp('3%')} />
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
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size11,
                    colors.black_F40,
                  ),
                ]}>
                {data.routeDetails?.fromTime}
              </Text>
            </View>
            <Spacer width={widthPercentageToDP('1%')} />
            <View style={styles.smallEclipse} />
            <View style={styles.horizontalLine1} />
            <BUS
              height={widthPercentageToDP('10%')}
              width={widthPercentageToDP('10%')}
            />
            <View style={styles.horizontalLine1} />
            <View style={styles.smallEclipse} />
            <Spacer width={widthPercentageToDP('1%')} />
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
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size11,
                    colors.black_F40,
                  ),
                ]}>
                {data.routeDetails?.toTime}
              </Text>
            </View>
          </View>
        </View>

        <Spacer height={hp('2%')} />
        <View style={styles.horizontalRow}>
          <View style={[styles.circleView, styles.rightCircle]} />

          {Array.from(
            {length: widthPercentageToDP('7%')},
            (_, index) => index + 1,
          ).map((x, y) => {
            return <View key={y} style={styles.horizontalLineView1} />;
          })}
          <View style={[styles.circleView, styles.leftCircle]} />
        </View>

        <Spacer height={hp('2%')} />
        <View style={styles.passengerData}>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_7D),
              ]}>
              Passenger Name
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_67),
              ]}>
              {data?.passengerName}
            </Text>
          </View>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_7D),
              ]}>
              Seat No
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_67),
              ]}>
              {data?.seatNo}
            </Text>
          </View>
          <View>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_7D),
              ]}>
              Ticket fare
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(sizes.size1, colors.grey_67),
              ]}>
              ₹ {data?.fare}
            </Text>
          </View>
        </View>
        <Spacer height={hp('2%')} />
        {isNotUpcoming && (
          <View style={styles.footerContainer}>
            <Spacer height={hp('1.5%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size02,
                  colors.grey_67,
                ),
              ]}>
              {data?.bookedOn}
            </Text>
            <Spacer height={hp('1.5%')} />
            <View style={styles.horizontalLineView} />
            <Spacer height={hp('1.5%')} />
            <View style={styles.footerView}>
              <Button
                onPress={bookAgain}
                text={'Book Again'}
                buttonStyle={styles.bookAgain}
                textStyle={baseStyle.txtStyleOutInterMedium(
                  sizes.size02,
                  colors.grey_054,
                )}
              />
              <Button
                onPress={addReview}
                text={'Add Review'}
                buttonStyle={styles.addReview}
                textStyle={baseStyle.txtStyleOutInterMedium(
                  sizes.size02,
                  colors.white_FF,
                )}
                icon={STAR}
              />
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;
