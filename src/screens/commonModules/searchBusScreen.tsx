import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import ReviewCard from '../../components/cards/reviewCard';
import TicketCard from '../../components/cards/ticketCard';
import CustomSafeArea from '../../components/customSafeArea';
import FilterList from '../../components/filter';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constant
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import {iconPathURL} from '../../constant/iconpath';
import {filterData} from '../../constant/staticData';
import {FilterListItem} from '../../propTypes/formProps';
import styles from '../styles/searchBusScreen';

import CANCEL from '../../assets/svg/cancel.svg';

interface TicketType {
  type: string;
  seats: string;
  price: string;
}

interface ListItem {
  label: string[];
  name: string;
  seatsLeft: number;
  timePeriod: string[];
  duration: string;
  types: TicketType[];
  review: string;
}

interface ReviewContent {
  name: string;
  comment: string;
  date: string;
  points: number;
}

interface SearchBusScreenProps {
  route: {
    params: {
      data: {
        from: string;
        to: string;
        date: string;
      };
    };
  };
}

const listData: ListItem[] = [
  {
    label: ['Cheapest', 'Fast filling'],
    name: 'BharatBenz, Ac',
    seatsLeft: 15,
    timePeriod: ['20:50', '20:50'],
    duration: '7h 20m',
    types: [
      {type: 'Seater', seats: '20', price: '20'},
      {type: 'Sleeper', seats: '20', price: '99'},
      {type: 'Private', seats: '6', price: '173'},
    ],
    review: '30',
  },
  {
    label: ['Cheapest', 'Fast filling'],
    name: 'BharatBenz, Ac',
    seatsLeft: 45,
    timePeriod: ['20:50', '20:50'],
    duration: '7h 20m',
    types: [
      {type: 'Seater', seats: '20', price: '20'},
      {type: 'Sleeper', seats: '20', price: '99'},
      {type: 'Private', seats: '6', price: '173'},
    ],
    review: '30',
  },
  {
    label: ['Cheapest', 'Fast filling'],
    name: 'BharatBenz, Ac',
    seatsLeft: 20,
    timePeriod: ['20:50', '20:50'],
    duration: '7h 20m',
    types: [
      {type: 'Seater', seats: '20', price: '20'},
      {type: 'Sleeper', seats: '20', price: '99'},
      {type: 'Private', seats: '6', price: '173'},
    ],
    review: '30',
  },
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

const SearchBusScreen: React.FC<SearchBusScreenProps> = ({route}) => {
  // props
  const {data} = route.params;

  // local states
  const [selectedFilters, setSelectedFilters] = useState<FilterListItem[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // ------------------ FUNCTIONALITIES ----------------------

  // ------------------ FUNCTIONALITIES ----------------------

  const handleFilterSelect = (selectedItems: FilterListItem[]) => {
    setSelectedFilters(selectedItems);
  };

  // ------------------ RENDER UI ----------------------

  const renderBody = ({item}: {item: ListItem}) => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('3%')} />
        <TicketCard
          data={item}
          selectSeat={() => {
            // navigationService.navigate(SCREENS.SELECT_BOARDING_POINTS, {
            //   data: {
            //     item: item,
            //     routeAndDate: data,
            //   },
            // })
          }}
          viewReview={() => setModalVisible(true)}
        />
      </View>
    );
  };

  const renderReviewModal = () => {
    return (
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Spacer height={hp('1.5%')} />
            <View style={styles.header}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(
                    sizes.size3,
                    colors.black_23,
                  ),
                ]}>
                All Reviews (33)
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <CANCEL />
              </TouchableOpacity>
            </View>
            <Spacer height={hp('3%')} />
            <FlatList
              data={reviewContent}
              renderItem={({item}) => <ReviewCard data={item} />}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
            <Spacer height={hp('1%')} />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title={`${data?.from} To ${data?.to}`}
        color={colors.black_00}
        isRightIcon={true}
        rightIcon={iconPathURL.calender}
        date={data?.date}
      />
      <Spacer height={hp('3%')} />
      <FilterList
        data={filterData}
        onSelectionChange={() => handleFilterSelect}
        reset={() => setSelectedFilters([])}
      />
      <FlatList
        data={listData}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      {renderReviewModal()}
    </CustomSafeArea>
  );
};

export default SearchBusScreen;
