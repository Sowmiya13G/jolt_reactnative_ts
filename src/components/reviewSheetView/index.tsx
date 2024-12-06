import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import DraggableView from '../draggableView';
import Spacer from '../spacer';
import AmenitiesDataView from '../views/amenities';
import BusStops from '../views/busStops';
import PhotosView from '../views/photos';
import PoliciesView from '../views/policies';
import Reviews from '../views/reviews';

// constants
import { policiesData } from '../../constant/staticData';
import { BottomSheetTabs, selectSeat } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';
import ScreenName from '../../navigation/screensNames';

// prop types
import { BottomTabsSheet } from '../../propTypes/componentProps';
import { ReviewContent } from '../../propTypes/screenProps';

// styles
import styles from './styles';

// SVG Imports
import BLANKET from '../../assets/svg/bed-sheets.svg';
import LIGHT from '../../assets/svg/book-lamp.svg';
import BOTTLE from '../../assets/svg/bottle.svg';
import CHARGE from '../../assets/svg/charging-point.svg';
import CLEANING from '../../assets/svg/clean.svg';
import AMENITIES from '../../assets/svg/flash.svg';
import AMENITIES_ACTIVE from '../../assets/svg/flashActive.svg';
import PHOTOS from '../../assets/svg/images.svg';
import PHOTOS_ACTIVE from '../../assets/svg/imagesActive.svg';
import LOCATION from '../../assets/svg/location.svg';
import LOCATION_ACTIVE from '../../assets/svg/locationActive.svg';
import WAITING from '../../assets/svg/lounge.svg';
import PHOTO1 from '../../assets/svg/photo1.svg';
import POLICIES from '../../assets/svg/policies.svg';
import POLICIES_ACTIVE from '../../assets/svg/policiesActive.svg';
import REVIEW from '../../assets/svg/reviewIcon.svg';
import REVIEW_ACTIVE from '../../assets/svg/reviewIconActive.svg';


type Section = {
  key: string;
  label: string;
  Component?: React.FC;
};

type RenderItemProps = {
  item: Section;
  index: number;
};

const pickupData = [
  {time: '12:29', point: 'Pickup Points 001'},
  {time: '12:29', point: 'Pickup Points 002'},
  {time: '12:40', point: 'Pickup Points 003'},
  {time: '13:10', point: 'Pickup Points 004'},
  {time: '13:30', point: 'Pickup Points 005'},
];

const amenitiesData = [
  {id: 0, name: 'Water Bottle', icon: BOTTLE},
  {id: 1, name: 'Reading Light', icon: LIGHT},
  {id: 2, name: 'Blankets', icon: BLANKET},
  {id: 3, name: 'Deep Cleaning Bus', icon: CLEANING},
  {id: 4, name: 'Charging Point', icon: CHARGE},
  {id: 5, name: 'Waiting lounge', icon: WAITING},
];

const reviewContent: ReviewContent[] = [
  {
    name: 'Prakash',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 2,
  },
  {
    name: 'Venkat',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 2.5,
  },
  {
    name: 'Santhosh',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 4.5,
  },
  {
    name: 'Venkat',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 5,
  },
  {
    name: 'Venkat',
    comment: 'It was really good, Worth for money',
    date: '22Aug2024',
    points: 3,
  },
];

const PhotosData = [PHOTO1, PHOTO1, PHOTO1, PHOTO1, PHOTO1, PHOTO1];

interface BottomSheetViewProps {
  rbsheetHeight: string | number;
  setRbsheetHeight: React.Dispatch<React.SetStateAction<string | number>>;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setBorderRadius: React.Dispatch<React.SetStateAction<string | number>>;
}

const BottomSheetView: React.FC<BottomSheetViewProps> = ({
  rbsheetHeight,
  setRbsheetHeight,
  activeTab,
  setActiveTab,
  setBorderRadius,
}) => {
  // ref
  const flatListRef = React.useRef<FlatList>(null);

  // use states

  // ---------------------------------------- variables ----------------------------------------

  const heightMax =
    typeof rbsheetHeight === 'number' && rbsheetHeight > hp('50%');

  const screenItem: BottomTabsSheet[] = [
    {
      id: 1,
      name: 'REVIEWS',
      component: ScreenName?.HomeScreen,
      title: BottomSheetTabs?.reviews,
      icon: activeTab === 'REVIEWS' ? REVIEW_ACTIVE : REVIEW,
    },
    {
      id: 2,
      name: 'PHOTOS',
      component: ScreenName?.MyTripScreen,
      title: BottomSheetTabs?.photos,
      icon: activeTab === 'PHOTOS' ? PHOTOS_ACTIVE : PHOTOS,
    },
    {
      id: 3,
      name: 'AMENITIES',
      component: ScreenName?.AccountScreen,
      title: BottomSheetTabs?.amenities,
      icon: activeTab === 'AMENITIES' ? AMENITIES_ACTIVE : AMENITIES,
    },
    {
      id: 4,
      name: 'BUS_STOPS',
      component: ScreenName?.WalletScreen,
      title: BottomSheetTabs?.busStops,
      icon: activeTab === 'BUS_STOPS' ? LOCATION_ACTIVE : LOCATION,
    },
    {
      id: 5,
      name: 'POLICIES',
      component: ScreenName?.WalletScreen,
      title: BottomSheetTabs?.policies,
      icon: activeTab === 'POLICIES' ? POLICIES_ACTIVE : POLICIES,
    },
  ];

  // ---------------------------------------- functionalities ----------------------------------------
  const scrollToSection = (key: string) => {
    const index = sections.findIndex(section => section.key == key);
    if (index != -1 && flatListRef.current) {
      flatListRef.current.scrollToIndex({index, animated: true});
    }
  };

  // const onViewableItemsChanged = React.useRef(
  //   ({viewableItems}: {viewableItems: Array<{key: string}>}) => {
  //     if (viewableItems.length > 0) {
  //       setActiveTab(viewableItems[0].key);
  //     }
  //   },
  // ).current;

  // ---------------------------------------- render ui ----------------------------------------

  const sections: Section[] = [
    {
      key: 'REVIEWS',
      label: selectSeat.review,
      Component: () => <Reviews data={reviewContent} />,
    },
    {
      key: 'PHOTOS',
      label: selectSeat.photos,
      Component: () => <PhotosView data={PhotosData} />,
    },
    {
      key: 'AMENITIES',
      label: selectSeat.amenities,
      Component: () => <AmenitiesDataView data={amenitiesData} />,
    },
    {
      key: 'BUS_STOPS',
      label: selectSeat.busStop,
      Component: () => <BusStops data={pickupData} />,
    },
    {
      key: 'POLICIES',
      label: selectSeat.policies,
      Component: () => <PoliciesView data={policiesData} />,
    },
  ];

  const sheetViewContainer = ({item, index}: RenderItemProps) => {
    return (
      <>
        <Spacer height={hp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.black_28),
            styles.paddingHorizontal,
          ]}>
          {item.label}
        </Text>
        <View style={styles.horizontalLineView} />
        {item.Component && <item.Component />}
        {index == sections.length - 1 && <Spacer height={hp('5%')} />}
      </>
    );
  };

  const renderBottomSheetView = () => {
    return (
      <>
        <View
          style={[heightMax ? styles.tabContainerView : styles.tabContainer]}>
          {screenItem.map(tab => {
            const isActive = activeTab === tab.name;
            const IconComponent = tab.icon;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[
                  isActive
                    ? heightMax
                      ? styles.tabButtonActive
                      : styles.tabButton
                    : styles.tabButton,
                ]}
                onPress={() => {
                  setActiveTab(tab.name);
                  setRbsheetHeight(hp('80%'));
                  scrollToSection(tab.name);
                }}>
                {IconComponent ? (
                  <IconComponent width={wp('6%')} height={wp('6%')} />
                ) : null}
                <Spacer height={hp('0.5')} />
                <Text
                  style={[
                    baseStyle.txtStyleOutInterRegular(
                      sizes.size011,
                      heightMax && isActive ? colors.orange_20 : colors.grey_50,
                    ),
                  ]}>
                  {tab.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Spacer height={hp('0.5')} />
        <FlatList
          data={sections}
          renderItem={sheetViewContainer}
          keyExtractor={item => item?.key}
          // onViewableItemsChanged={onViewableItemsChanged}
          // viewabilityConfig={{
          //   viewAreaCoveragePercentThreshold: 50,
          // }}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
        />
      </>
    );
  };

  return (
    <DraggableView
      rbsheetHeight={rbsheetHeight}
      setRbsheetHeight={setRbsheetHeight}
      customStyle={styles.dragView}
      onCancelPress={() => {
        setActiveTab('');
      }}
      setBorderRadius={setBorderRadius}>
      {renderBottomSheetView()}
    </DraggableView>
  );
};

export default BottomSheetView;
