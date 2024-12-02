import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Button from '../../button';
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';

// constant
import DROPDOWN from '../../../assets/svg/downArrow.svg';

// Define types for the data prop
interface TicketCardType {
  data: {
    seatsLeft: number;
    label: string[];
    name: string;
    timePeriod: string[];
    duration: string;
    types: {
      type: string;
      seats: string;
      price: string;
    }[];
    review: string;
  };
  selectSeat: () => void;
  viewReview: () => void;
  onClick: () => void;
}

const TicketCard: React.FC<TicketCardType> = ({
  data,
  selectSeat,
  viewReview,
  onClick,
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <TouchableOpacity style={styles.viewContainer} onPress={onClick}>
      <View style={styles.seatsView}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.white_FF),
          ]}>
          {data?.seatsLeft} Seats Left
        </Text>
      </View>
      <View style={[styles.row]}>
        {data?.label?.map((x, y) => (
          <View key={y} style={styles.textView}>
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(
                  sizes.size011,
                  colors.black_22,
                ),
              ]}>
              {x}
            </Text>
          </View>
        ))}
      </View>
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.grey_55),
          styles.paddingHorizontal,
        ]}>
        {data.name}
      </Text>
      <Spacer height={hp('1%')} />
      <View style={[styles.row]}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_67),
          ]}>
          {data.timePeriod[0]}
        </Text>
        <View style={styles.horizontalLine} />
        <View style={styles.duration}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_55),
            ]}>
            {data.duration}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_67),
          ]}>
          {data.timePeriod[1]}
        </Text>
      </View>
      <Spacer height={hp('2%')} />
      <View style={[styles.row]}>
        {data?.types.map((x, y) => {
          const isSelected = x.type === selectedType;
          return (
            <TouchableOpacity
              key={y}
              style={{
                borderRadius: wp('3%'),
                paddingHorizontal: wp('2.5%'),
                paddingVertical: wp('2%'),
                borderColor: isSelected ? colors.orange_05 : colors.grey_F1,
                borderWidth: wp('0.3%'),
                marginRight: wp('2%'),
              }}
              onPress={() => setSelectedType(x?.type)}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size02,
                    isSelected ? colors.black_00 : colors.grey_55,
                  ),
                ]}>
                {`${x?.type} (${x?.seats})`}
              </Text>
              <Text
                style={[
                  baseStyle.txtStyleOutInterBold(
                    sizes.size02,
                    isSelected ? colors.black_00 : colors.grey_55,
                  ),
                ]}>
                {`$ ${x?.price}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Spacer height={hp('2%')} />
      <View style={styles.horizontalLineView} />
      <Spacer height={hp('1%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterBold(sizes.size3, colors.grey_32),
          styles.endAlign,
        ]}>
        INR200
      </Text>
      <Spacer height={hp('1.5%')} />
      <View style={styles.footerView}>
        <View style={styles.review}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_67),
            ]}>
            Reviews{' '}
          </Text>
          <View style={styles.borderRadius}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(
                  sizes.size011,
                  colors.black_23,
                ),
              ]}>
              {data.review}
            </Text>
          </View>
          <TouchableOpacity onPress={viewReview}>
            <DROPDOWN />
          </TouchableOpacity>
        </View>
        <Button
          onPress={selectSeat}
          text={'Select Seat'}
          buttonStyle={styles.button}
          textStyle={baseStyle.txtStyleOutInterSemiBold(
            sizes.size02,
            colors.white_FF,
          )}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TicketCard;
