import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// packages
import {heightPercentageToDP, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {SvgProps} from 'react-native-svg';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';

import ARROW from '../../../assets/svg/arrowForward.svg';

// Define types for the data prop
interface TicketCardType {
  data: {
    title: string;
    type: string;
    method: string | string[];
    icon?: React.ElementType<SvgProps>;
    icons?: React.ElementType<SvgProps>[];
  };
  onClick?: () => void;
  onSelectUPI?: () => void;
}

const PaymentCard: React.FC<TicketCardType> = ({
  data,
  onClick,
  onSelectUPI,
}) => {
  const isUPI = data.type == 'UPI';
  const isWallet = data.type == 'WALLETS';
  return (
    <View style={styles.viewContainer}>
      {Boolean(isUPI) ? (
        <>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.black_28),
              styles.title,
            ]}>
            {data.title}
          </Text>
          <View style={styles.upiContainer}>
            <View style={styles.iconContainer}>
              {Array.isArray(data.icons) &&
                data.icons.map((Icon, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={onSelectUPI}
                    style={{alignItems: 'center'}}>
                    <Icon height={wp('10%')} width={wp('10%')} />
                    <Text
                      style={[
                        baseStyle.txtStyleOutInterMedium(
                          sizes.size01,
                          colors.black_28,
                        ),
                      ]}>
                      {data.method[index]}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.otherUPI}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size2,
                    colors.orange_05,
                  ),
                ]}>
                Other UPI Options
              </Text>
              <TouchableOpacity onPress={onClick}>
                <ARROW />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.horizontalLine} />
        </>
      ) : (
        <>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.black_28),
              styles.title,
            ]}>
            {data.title}
          </Text>
          <View style={styles.subContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {data.icon && (
                <View style={{alignItems: 'center'}}>
                  <data.icon height={wp('7%')} width={wp('7%')} />
                </View>
              )}
              <Spacer width={wp('5%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size2,
                    colors.grey_054,
                  ),
                ]}>
                {data.method}
              </Text>
            </View>
            <TouchableOpacity onPress={onClick}>
              <ARROW />
            </TouchableOpacity>
          </View>
          {!Boolean(isWallet) ? (
            <View style={styles.horizontalLine} />
          ) : (
            <Spacer height={heightPercentageToDP("10%")} />
          )}
        </>
      )}
    </View>
  );
};

export default PaymentCard;
