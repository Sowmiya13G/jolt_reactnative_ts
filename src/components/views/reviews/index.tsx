import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

import {ReviewContent} from '../../../propTypes/screenProps';

// style
import styles from './styles';

import POINT from '../../../assets/svg/point.svg';
import UN_POINT from '../../../assets/svg/unpointStar.svg';

interface ReviewsProps {
  data: ReviewContent[];
}

const Reviews: React.FC<ReviewsProps> = ({data}) => {
  const averagePoints =
    data.reduce((total, review) => total + review.points, 0) / data.length || 0;

  const renderItem = ({item}: {item: ReviewContent}) => {
    return (
      <View style={styles.reviewContent}>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size02, colors.black_28),
            styles.comment,
          ]}>
          {item.comment}
        </Text>

        <View style={styles.footer}>
          <View style={styles.point}>
            <POINT />
            <Spacer width={wp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size02,
                  colors.black_00,
                ),
              ]}>
              {item.points}
            </Text>
          </View>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.black_28),
            ]}>
            {item.name}
          </Text>
          <View style={styles.verticalLine} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_7C),
            ]}>
            {item.date}
          </Text>
        </View>
      </View>
    );
  };

  const renderStars = () => {
    const fullStars = Math.floor(averagePoints);
    const halfStar = averagePoints % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <View key={`point-${index}`} style={{marginRight: 4}}>
              <POINT width={wp('4%')} height={wp('4%')} />
            </View>
          ))}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <View key={`unpoint-${index}`} style={{marginRight: 4}}>
              <UN_POINT width={wp('4%')} height={wp('4%')} />
            </View>
          ))}
      </View>
    );
  };

  return (
    <View style={styles.margin}>
      <Spacer height={hp('1%')} />
      <View style={[styles.row]}>
        <Spacer width={wp('1%')} />

        <View style={styles.column}>
          {[5, 4, 3, 2, 1].map(num => (
            <View key={num} style={styles.number}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size3,
                    colors.grey_55,
                  ),
                ]}>
                {num}
              </Text>
              <Spacer width={wp('3%')} />
              <POINT height={wp('5%')} width={wp('5%')} />
              <Spacer width={wp('3%')} />
              <View
                style={{
                  height: 8,
                  width: `${num * 12}%`,
                  backgroundColor: colors.grey_55,
                  borderRadius: 5,
                }}
              />
            </View>
          ))}
        </View>
        <View style={styles.pointsView}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size7, colors.black_28),
            ]}>
            {averagePoints}
          </Text>
          <Spacer height={hp('1%')} />
          {renderStars()}
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size3, colors.black_28),
            ]}>
            {data.length} Reviews
          </Text>
        </View>
        <Spacer width={wp('3%')} />
      </View>
      <Spacer height={hp('2%')} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer width={wp('2%')} />}
      />
      <Spacer height={hp('1%')} />
    </View>
  );
};

export default Reviews;
