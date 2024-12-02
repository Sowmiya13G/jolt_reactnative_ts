import React from 'react';
import {Text, View} from 'react-native';

// packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

//constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

//style
import styles from './styles';

// prop types

//constant
interface PaymentDetailsProps {
  data: {
    price: string;
    discount: string;
    tax: string;
    convenience: string;
  };
}
const PaymentDetails: React.FC<PaymentDetailsProps> = ({data}) => {
  const netPayableAmount =
    Number(data.price) +
    Number(data.tax) +
    Number(data.convenience) -
    Number(data.discount);

  const commonRowContainer = (
    txt1: string,
    txt2: string,
    color: string,
    isSeperate: boolean,
    isDiscount: boolean = false,
  ) => {
    return (
      <>
        <View style={styles.row}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_67),
            ]}>
            {txt1}
          </Text>
          <Text style={[baseStyle.txtStyleOutInterRegular(sizes.size2, color)]}>
            {Boolean(isDiscount) && (
              <Text
                style={[baseStyle.txtStyleOutInterRegular(sizes.size2, color)]}>
                {`- `}
              </Text>
            )}
            ₹ {txt2}
          </Text>
        </View>
        {Boolean(isSeperate) && <View style={styles.separatorLine} />}
      </>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
        ]}>
        Payment Details
      </Text>
      <Spacer height={hp('2%')} />
      {commonRowContainer('Ticket Price', data?.price, colors.black_28, true)}
      {commonRowContainer(
        'Discount',
        data?.discount,
        colors.green_2F,
        true,
        true,
      )}
      {commonRowContainer(
        'Tax & Convenience',
        data?.tax,
        colors.black_28,
        true,
      )}
      {commonRowContainer(
        'Convenience Fee',
        data?.convenience,
        colors.black_28,
        false,
      )}
      <Spacer height={hp('3%')} />
      <View style={styles.row}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
          ]}>
          Net Payable Amount
        </Text>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
          ]}>
          ₹ {netPayableAmount}
        </Text>
      </View>
    </View>
  );
};

export default PaymentDetails;
