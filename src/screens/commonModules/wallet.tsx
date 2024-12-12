import React, { useState } from 'react';
import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { SvgProps } from 'react-native-svg';

// components
import Button from '../../components/button';
import PaymentCard from '../../components/cards/paymentCard';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constants
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from '../styles/wallet';

// SVG Imports
import AMAZON_PAY from '../../assets/svg/AmazonPay.svg';
import APPLE_PAY from '../../assets/svg/ApplePay.svg';
import CARD from '../../assets/svg/card.svg';
import GOOGLE_PAY from '../../assets/svg/GooglePay.svg';
import NET_BANKING from '../../assets/svg/netBanking.svg';
import PAY_PAL from '../../assets/svg/PayPal.svg';
import WALLET from '../../assets/svg/walletActive.svg';

import CANARA from '../../assets/svg/canara.svg';
import CBI from '../../assets/svg/cbi.svg';
import CUB from '../../assets/svg/cityUnion.svg';
import HDFC from '../../assets/svg/hdfc.svg';
import HSBC from '../../assets/svg/hsbc.svg';
import ICICI from '../../assets/svg/icici.svg';
import INDIAN from '../../assets/svg/indian.svg';
import IOB from '../../assets/svg/iob.svg';
import SEARCH from '../../assets/svg/searchIcon.svg';
import SELECTED from '../../assets/svg/selected.svg';
import UBI from '../../assets/svg/ubi.svg';
import UN_SELECT from '../../assets/svg/UnSelected.svg';

interface WalletScreenProps {}

interface data {
  title: string;
  type: string;
  method: string | string[];
  icon?: React.ElementType<SvgProps>;
  icons?: React.ElementType<SvgProps>[];
}
interface bank {
  name: string;
  icon?: React.ElementType<SvgProps>;
}

type FlatListData = data | bank | string;

const bankList: bank[] = [
  {
    name: 'Canara Bank',
    icon: CANARA,
  },
  {
    name: 'Central Bank of India',
    icon: CBI,
  },
  {
    name: 'HDFC Bank',
    icon: HDFC,
  },
  {
    name: 'Indian Bank',
    icon: INDIAN,
  },
  {
    name: 'Indian Overseas Bank',
    icon: IOB,
  },
  {
    name: 'ICICI Bank',
    icon: ICICI,
  },
  {
    name: 'Union Bank of india',
    icon: UBI,
  },
  {
    name: 'HSBC',
    icon: HSBC,
  },
  {
    name: 'City Union Bank',
    icon: CUB,
  },
];

const paymentMethodsData: data[] = [
  {
    title: 'Card',
    type: 'CARD',
    method: 'Card',
    icon: CARD,
  },
  {
    title: 'UPI',
    type: 'UPI',
    method: ['Google Pay', 'PayPal', 'Amazon Pay', 'Apple Pay'],
    icons: [GOOGLE_PAY, PAY_PAL, AMAZON_PAY, APPLE_PAY],
  },
  {
    title: 'Net Banking',
    type: 'NET_BANKING',
    method: 'Net Banking',
    icon: NET_BANKING,
  },
  {
    title: 'Wallets',
    type: 'WALLETS',
    method: 'Card',
    icon: WALLET,
  },
];

const WalletScreen: React.FC<WalletScreenProps> = () => {
  // use state
  const [type, setType] = useState<string>('PAYMENT');
  const [selectedBankName, setSelectedBankName] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const isNetBankingScreen = type == 'NET_BANKING';
  const isCardScreen = type == 'CARD';

  const filteredBankList = bankList.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // ---------------------------------------- functionalities ----------------------------------------

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  // ---------------------------------------- render ui ----------------------------------------

  const renderBody = ({
    item,
  }: ListRenderItemInfo<(typeof paymentMethodsData)[0]>) => {
    const isUPI = item.type == 'UPI';
    const isNetBanking = item.type == 'NET_BANKING';
    const isCard = item.type == 'CARD';

    return (
      <PaymentCard
        data={item}
        onClick={() => {
          isNetBanking
            ? setType('NET_BANKING')
            : isCard
            ? setType('CARD')
            : null;
        }}
        onSelectUPI={() => {}}
      />
    );
  };

  // ---------------------------------------- render bank list ----------------------------------------

  const renderBankList = ({item}: ListRenderItemInfo<(typeof bankList)[0]>) => {
    const isSelected = selectedBankName === item.name;
    return (
      <>
        <View style={styles.bankCard}>
          <View style={styles.row}>
            {item.icon && (
              <View style={{alignItems: 'center'}}>
                <item.icon
                  height={widthPercentageToDP('7%')}
                  width={widthPercentageToDP('7%')}
                />
              </View>
            )}
            <Spacer width={widthPercentageToDP('2%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.grey_054),
              ]}>
              {item.name}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSelectedBankName(isSelected ? null : item.name);
              setType('PAYMENT');
            }}>
            {isSelected ? <SELECTED /> : <UN_SELECT />}
          </TouchableOpacity>
        </View>
        <Spacer height={hp('2%')} />
      </>
    );
  };

  // ---------------------------------------- render card ----------------------------------------

  const renderCardDetails = () => {
    return (
      <>
        <View style={styles.cardContainer}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.black_28),
            ]}>
            Card Number
          </Text>
          <Spacer height={hp('1%')} />

          <TextInputComponent
            value={''}
            onChangeText={() => {}}
            placeholderTextColor={colors.grey_95}
            placeholder={'Enter Card Number'}
            CustomStyle={styles.searchInput}
            icon={CARD}
            suffix
            customIconStyle={styles.icon}
          />
          <Spacer height={hp('2%')} />
          <View style={styles.inputContainer}>
            <View style={styles.input}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size2,
                    colors.black_28,
                  ),
                ]}>
                Expiry
              </Text>
              <Spacer height={hp('1%')} />
              <TextInputComponent
                value={''}
                onChangeText={() => {}}
                placeholderTextColor={colors.grey_95}
                placeholder={'MM/YY'}
                CustomStyle={styles.searchInput}
              />
            </View>
            <View style={styles.input}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size2,
                    colors.black_28,
                  ),
                ]}>
                CVV
              </Text>
              <Spacer height={hp('1%')} />
              <TextInputComponent
                value={''}
                onChangeText={() => {}}
                placeholderTextColor={colors.grey_95}
                placeholder={'CVV'}
                CustomStyle={styles.searchInput}
                icon={CARD}
                suffix
                customIconStyle={styles.icon}
                CustomStyle1={styles.input}
              />
            </View>
          </View>
          <Spacer height={hp('2%')} />

          <Button
            onPress={() => {}}
            text={'Proceed to Pay'}
            textColor={colors.black_00}
            buttonStyle={styles.button}
            textStyle={baseStyle.txtStyleOutInterMedium(
              sizes.size2,
              colors.grey_32,
            )}
          />
        </View>
      </>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => {
          isNetBankingScreen || isCardScreen
            ? setType('PAYMENT')
            : navigationService.goBack();
        }}
        title={
          isCardScreen
            ? 'Add Card'
            : isNetBankingScreen
            ? 'Net Banking'
            : 'Payment Methods'
        }
      />
      <Spacer height={hp('1%')} />
      <View style={styles.amountView}>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.white_FF),
          ]}>
          Total Amount
        </Text>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.white_FF),
          ]}>
          ₹ 1820
        </Text>
      </View>
      <Spacer height={hp('2%')} />
      {isNetBankingScreen && (
        <View style={styles.margin}>
          <TextInputComponent
            value={searchTerm}
            onChangeText={handleSearch}
            placeholderTextColor={colors.grey_95}
            placeholder={'Search Bank'}
            CustomStyle={styles.searchInput}
            icon={SEARCH}
            customIconStyle={styles.icon}
          />
          <Spacer height={hp('2%')} />
        </View>
      )}

      <FlatList
        data={
          isCardScreen
            ? (['CARD'] as FlatListData[])
            : isNetBankingScreen
            ? (filteredBankList as FlatListData[])
            : (paymentMethodsData as FlatListData[])
        }
        renderItem={
          isCardScreen
            ? (renderCardDetails as ListRenderItem<FlatListData>)
            : isNetBankingScreen
            ? (renderBankList as ListRenderItem<FlatListData>)
            : (renderBody as ListRenderItem<FlatListData>)
        }
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default WalletScreen;
