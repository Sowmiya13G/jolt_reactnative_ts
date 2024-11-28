import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Navigation
import navigationService from '../../navigation/navigationService';

// Components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import NoDataComponent from '../../components/noData';
import Spacer from '../../components/spacer';
import StatusBar from '../../components/tabBar';

// Constants
import {tabData} from '../../constant/staticData';
import {colors} from '../../constant/theme';
import {myTrip} from '../../constant/strings';

// styles
import styles from '../styles/myTrip';

// SVG Imports
import NOTIFICATION from '../../assets/svg/notification.svg';
import NODATA from '../../assets/svg/noData.svg';
import TripCard from '../../components/cards/tripCard';

interface Trip {
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
}

// sample data
const tripList: Trip[] = [
  {
    name: 'Acela',
    bus: 'Mercedes Benz Multi-Axle A/C Sleeper (2+1)',
    routeDetails: {
      from: 'Chennai CMBT',
      fromTime: 'Oct 09, 11:15am',
      to: 'Bangalore BS',
      toTime: 'Oct 10, 11:15am',
    },
    status: 'Booked',
    passengerName: 'Satoshi, Winlander',
    seatNo: 'DL1,MB1',
    fare: 660,
  },
  {
    name: 'Acela',
    bus: 'Mercedes Benz Multi-Axle A/C Sleeper (2+1)',
    routeDetails: {
      from: 'Chennai CMBT',
      fromTime: 'Oct 09, 11:15am',
      to: 'Bangalore BS',
      toTime: 'Oct 10, 11:15am',
    },
    status: 'Booked',
    passengerName: 'Satoshi, Winlander',
    seatNo: 'DL1,MB1',
    fare: 660,
  },
  {
    name: 'Acela',
    bus: 'Mercedes Benz Multi-Axle A/C Sleeper (2+1)',
    routeDetails: {
      from: 'Chennai CMBT',
      fromTime: 'Oct 09, 11:15am',
      to: 'Bangalore BS',
      toTime: 'Oct 10, 11:15am',
    },
    status: 'Completed',
    passengerName: 'Satoshi, Winlander',
    seatNo: 'DL1,MB1',
    fare: 660,
    bookedOn: 'Booked on 27Sep, 2024',
  },
  {
    name: 'Acela',
    bus: 'Mercedes Benz Multi-Axle A/C Sleeper (2+1)',
    routeDetails: {
      from: 'Chennai CMBT',
      fromTime: 'Oct 09, 11:15am',
      to: 'Bangalore BS',
      toTime: 'Oct 10, 11:15am',
    },
    status: 'Cancelled',
    passengerName: 'Satoshi, Winlander',
    seatNo: 'DL1,MB1',
    fare: 660,
    bookedOn: 'Booked on 27Sep, 2024',
  },
];

const MyTripScreen: React.FC = () => {
  // use states
  const [currentTab, setCurrentTab] = useState<{selectedItem: string}>({
    selectedItem: tabData[0]?.title,
  });

  // variables
  const isUpComing = currentTab?.selectedItem == tabData[0]?.title;
  const isCompleted = currentTab?.selectedItem == tabData[1]?.title;
  const isCancelled = currentTab?.selectedItem == tabData[2]?.title;

  const filteredTripList: Trip[] = tripList.filter(trip => {
    if (isUpComing) return trip.status == 'Booked';
    if (isCompleted) return trip.status == 'Completed';
    if (isCancelled) return trip.status == 'Cancelled';
    return true; // Default case
  });
  console.log('🚀 ~ filteredTripList ~ filteredTripList:', filteredTripList);

  const bookTrip = () => {};

  // Render body
  const renderBody = ({item}: ListRenderItemInfo<string>) => {
    return (
      <View>
        <TripCard data={item} />
        <Spacer height={hp('2%')} />
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title="My Trips"
        isRightIcon={true}
        rightIcon={NOTIFICATION}
        rightIconView={styles.iconView}
      />
      <Spacer height={hp('2%')} />
      <View style={styles.statusBarView}>
        <StatusBar
          name="MyTrips"
          data={tabData}
          selectedItemData={currentTab}
          setSelectedItem={setCurrentTab}
          backgroundColor={colors.grey_F1}
        />
      </View>
      <Spacer height={hp('2%')} />
      <FlatList
        data={filteredTripList}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <NoDataComponent
            text={myTrip.uhHo}
            disc={myTrip.noDataDisc}
            height={wp('55%')}
            width={wp('55%')}
            noDataImage={NODATA}
            handlePress={() => bookTrip()}
            buttonText={myTrip.bookTrip}
            customStyles={styles.noDataContainer}
          />
        }
      />
    </CustomSafeArea>
  );
};

export default MyTripScreen;
