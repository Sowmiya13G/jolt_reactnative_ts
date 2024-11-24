import React from 'react';
import {Text, View} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import Spacer from '../../spacer';
// components

//constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

//style
import styles from './styles';

//constant
import POINT from '../../../assets/svg/point.svg';

interface ReviewContent {
  name: string;
  comment: string;
  date: string;
  points: number;
}

interface ReviewCardProps {
  data: ReviewContent;
}

const ReviewCard: React.FC<ReviewCardProps> = ({data}) => {
  const pointsArray = Array.from(
    {length: 5},
    (_, index) => index < data?.points,
  );

  const getTintColor = (filled: boolean): string => {
    return filled ? colors.yellow_00 : colors.grey_DD;
  };

  return (
    <>
      <View style={styles.viewContainer}>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_23),
          ]}>
          {data?.name}
        </Text>
        <Spacer height={hp('1%')} />
        <View style={styles.row}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.black_23),
            ]}>
            {data?.comment}
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.black_23),
            ]}>
            {data?.date}
          </Text>
        </View>
        <Spacer height={hp('1%')} />
        <View style={styles.rowView}>
          {pointsArray.map((filled, index) => (
            <POINT
              key={index}
              style={[styles.point]}
              fill={getTintColor(filled)}
            />
          ))}
          <Spacer width={widthPercentageToDP('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.black_23),
            ]}>
            {data?.points}
          </Text>
        </View>
      </View>
      <Spacer height={hp('1%')} />
    </>
  );
};

export default ReviewCard;
