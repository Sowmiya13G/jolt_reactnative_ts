import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

//constants
import { baseStyle, colors, sizes } from '../../../constant/theme';

//style
import styles from './styles';

// prop types
import { notificationDataType } from '../../../propTypes/screenProps';

import OFFER from '../../../assets/svg/offer.svg';
import PAYMENT from '../../../assets/svg/payment.svg';

//constant

interface NotificationCardProps {
  data: notificationDataType;
  onClick: () => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({data, onClick}) => {
  const isBusUpdate = data?.type == 'Bus update';
  const isOffers = data?.type == 'Offers';

  return (
    <>
      <TouchableOpacity style={styles.viewContainer} onPress={onClick}>
        <View style={styles.row}>
          <View style={styles.rowView}>
            {Boolean(isBusUpdate) ? <OFFER /> : <PAYMENT />}
            <Spacer width={widthPercentageToDP('2%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size2,
                  colors.black_28,
                ),
              ]}>
              {data?.title}
            </Text>
          </View>

          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.grey_085),
            ]}>
            {data?.time}
          </Text>
        </View>
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size011, colors.grey_085),
            styles.txt,
          ]}>
          {data?.message}
        </Text>
        <Spacer height={hp('1%')} />
      </TouchableOpacity>
      <Spacer height={hp('1%')} />
    </>
  );
};

export default NotificationCard;
