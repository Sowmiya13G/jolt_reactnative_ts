import React, { useEffect, useState } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// components
import NotificationCard from '../../components/cards/notificationCard';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import StatusBar from '../../components/tabBar';

// constants
import { notificationTab } from '../../constant/staticData';
import { colors } from '../../constant/theme';

// prop types
import { notificationDataType } from '../../propTypes/screenProps';

// styles
import styles from '../styles/notification';

// sample data
const notificationList: notificationDataType[] = [
  {
    title: 'Discount from BCA arrives',
    time: '03:40 PM',
    type: 'Bus update',
    message:
      'Get 100% cash back on ticket points worth up to IDR 1 million! Order any product you want using the BCA CityTrans.com Mastercard Credit Card.',
  },
  {
    title: 'Discount from BCA arrives',
    time: '03:40 PM',
    type: 'Bus update',
    message:
      'Get 100% cash back on ticket points worth up to IDR 1 million! Order any product you want using the BCA CityTrans.com Mastercard Credit Card.',
  },
  {
    title: 'Discount from BCA arrives',
    time: '03:40 PM',
    type: 'Offers',
    message:
      'Get 100% cash back on ticket points worth up to IDR 1 million! Order any product you want using the BCA CityTrans.com Mastercard Credit Card.',
  },
  {
    title: 'Discount from BCA arrives',
    time: '03:40 PM',
    type: 'Bus update',
    message:
      'Get 100% cash back on ticket points worth up to IDR 1 million! Order any product you want using the BCA CityTrans.com Mastercard Credit Card.',
  },
  {
    title: 'Discount from BCA arrives',
    time: '03:40 PM',
    type: 'Offers',
    message:
      'Get 100% cash back on ticket points worth up to IDR 1 million! Order any product you want using the BCA CityTrans.com Mastercard Credit Card.',
  },
  {
    title: 'Discount from BCA arrives',
    time: '03:40 PM',
    type: 'Offers',
    message:
      'Get 100% cash back on ticket points worth up to IDR 1 million! Order any product you want using the BCA CityTrans.com Mastercard Credit Card.',
  },
];

interface NotificationScreenProps {}

const NotificationScreen: React.FC<NotificationScreenProps> = () => {
  const [currentTab, setCurrentTab] = useState<{selectedItem: string}>({
    selectedItem: notificationTab[0]?.title,
  });
  const [updatedTabData, setUpdatedTabData] = useState(notificationTab);
  // ---------------------------------------- variables ----------------------------------------

  const isBusUpdate = currentTab?.selectedItem == notificationTab[0]?.title;
  const isOffers = currentTab?.selectedItem == notificationTab[1]?.title;

  const filteredTripList: notificationDataType[] = notificationList.filter(
    notification => {
      if (isBusUpdate) return notification.type == 'Bus update';
      if (isOffers) return notification.type == 'Offers';
      return true;
    },
  );

  const busUpdateCount = notificationList.filter(
    trip => trip.type === 'Bus update',
  ).length;
  const offersCount = notificationList.filter(
    trip => trip.type === 'Offers',
  ).length;

  // ---------------------------------------- Functionalities ----------------------------------------

  const handleCardClick = () => {};

  // ---------------------------------------- use effects ----------------------------------------

  useEffect(() => {
    const updatedTabs = notificationTab.map((notification, index) => {
      if (index === 0)
        return {
          ...notification,
          count: busUpdateCount,
          countColor: colors.pink_68,
        };
      if (index === 1)
        return {
          ...notification,
          count: offersCount,
          countColor: colors.yellow_47,
        };
      return notification;
    });

    setUpdatedTabData(updatedTabs);
  }, [notificationList]);

  // ---------------------------------------- render ui ----------------------------------------
  const renderBody = ({item}: ListRenderItemInfo<notificationDataType>) => {
    return (
      <View style={styles.marginHorizontal}>
        <NotificationCard data={item} onClick={()=>{}}/>
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title="Notification"
      />
      <Spacer height={hp('2%')} />
      <View style={styles.statusBarView}>
        <StatusBar
          name="Notification"
          data={updatedTabData}
          selectedItemData={currentTab}
          setSelectedItem={setCurrentTab}
          backgroundColor={colors.white_FF}
          countTxtColor={colors.white_FF}
        />
      </View>
      <Spacer height={hp('2%')} />
      <FlatList
        data={filteredTripList}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default NotificationScreen;
