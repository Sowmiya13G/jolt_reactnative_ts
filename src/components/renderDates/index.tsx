import React, { useState } from 'react';
import { FlatList, Platform, Text, TouchableOpacity } from 'react-native';

// packages
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

// components
import CalenderComponent from '../calender';
import Spacer from '../spacer';

// constants
import { baseStyle, colors, sizes } from '../../constant/theme';

import ARROW from '../../assets/svg/arrow.svg';
import CALENDAR from '../../assets/svg/calender.svg';
import CANCEL from '../../assets/svg/cancel.svg';
// styles

interface DateItem {
  id?: string | number;
  date: string;
  label: string;
  index?: string | number;
}

interface TripItem {
  id: string | number;
  from: string;
  to: string;
}

interface RenderDatesProps {
  data: DateItem[] | TripItem[];
  isDates?: boolean;
  isTrips?: boolean;
  onTripSelect?: (from: string, to: string) => void;
}

const RenderDates: React.FC<RenderDatesProps> = ({
  data,
  isDates = true,
  isTrips = false,
  onTripSelect,
}) => {
  const [tripsData, setTripsData] = useState<TripItem[]>(data as TripItem[]);
  const [selectedDate, setSelectedDate] = useState<DateItem | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [modalDate, setModalDate] = useState<string | null>(null);

  const handleCalendarSelect = (selectedDate: string) => {
    setModalDate(selectedDate);
    setShowCalendar(false);
    setSelectedDate({date: selectedDate, label: selectedDate});
  };

  const handleSelect = (item: DateItem | TripItem) => {
    setSelectedDate(item as DateItem);
    if (isTrips && onTripSelect) {
      onTripSelect((item as TripItem).from, (item as TripItem).to);
    }
  };

  const handleRemoveTrip = (itemToRemove: TripItem) => {
    setTripsData(prevData =>
      prevData.filter(item => item.id !== itemToRemove.id),
    );
  };

  const renderItem = ({item}: {item: DateItem}) => {
    const isSelected = selectedDate?.date === item.date;
    const isLastItem = data.length - 1 === item.index;

    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={{
          marginHorizontal: Platform?.OS == 'ios' ? wp('1%') : wp('0.6%'),
          paddingVertical: wp('2%'),
          paddingHorizontal: Platform?.OS == 'ios' ? wp('2.5%') : wp('2%'),
          backgroundColor: isSelected ? colors.green_2F : colors.white_FF,
          borderColor: isSelected ? colors.green_2F : colors.black_00,
          borderRadius: wp('6%'),
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: wp('0.1%'),
          marginBottom: wp('2.5%'),
        }}>
        {isLastItem && (
          <>
            <TouchableOpacity onPress={() => setShowCalendar(true)}>
              <CALENDAR
                width={wp('4%')}
                height={wp('4%')}
                fill={isSelected ? colors.white_FF : colors.black_00}
              />
              {/* <Image
                source={iconPathURL.calender}
                style={{
                  ...baseStyle.iconStyle('4%'),
                  resizeMode: 'contain',
                  tintColor: isSelected ? colors.white_FF : colors.black_00,
                }}
              /> */}
            </TouchableOpacity>
            <Spacer width={wp('1%')} />
          </>
        )}
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(
              sizes.size011,
              isSelected ? colors.white_FF : colors.black_22,
            ),
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTrips = ({item}: {item: TripItem}) => {
    const isSelected = selectedDate?.id === item.id;

    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={{
          marginHorizontal: Platform?.OS == 'ios' ? wp('1%') : wp('0.5%'),
          paddingVertical: wp('2%'),
          paddingHorizontal: Platform?.OS == 'ios' ? wp('2.5%') : wp('1.7%'),
          backgroundColor: isSelected ? colors.green_2F : colors.white_FF,
          borderColor: isSelected ? colors.green_2F : colors.black_00,
          borderRadius: wp('6%'),
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: wp('0.2%'),
          marginBottom: wp('2.5%'),
        }}>
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(
              sizes.size011,
              isSelected ? colors.white_FF : colors.black_22,
            ),
          ]}>
          {item.from}
        </Text>
        <Spacer width={wp('1%')} />
        <ARROW
          width={wp('4%')}
          height={wp('4%')}
          fill={isSelected ? colors.white_FF : colors.black_00}
        />

        <Spacer width={wp('1%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(
              sizes.size011,
              isSelected ? colors.white_FF : colors.black_22,
            ),
          ]}>
          {item.to}
        </Text>
        <Spacer width={wp('1%')} />
        <TouchableOpacity onPress={() => handleRemoveTrip(item)}>
          <CANCEL
            width={wp('2%')}
            height={wp('4%')}
            fill={isSelected ? colors.white_FF : colors.black_00}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        data={
          isDates
            ? (data as DateItem[]).map((item, index) => ({
                ...item,
                date:
                  index === data.length - 1
                    ? modalDate || item.date
                    : item.date,
              }))
            : tripsData
        }
        renderItem={isDates ? renderItem : renderTrips}
        keyExtractor={(item: DateItem | TripItem) =>
          (item as DateItem).id?.toString() ||
          (item as DateItem).date ||
          `${(item as DateItem).date}-${(item as DateItem).index}` ||
          `${Math.random()}`
        }
        horizontal={!isTrips}
        numColumns={isTrips ? 2 : 1}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: isTrips ? 10 : 0}}
      />
      {Boolean(showCalendar) && (
        <CalenderComponent
          date={modalDate || new Date().toISOString().split('T')[0]}
          setDate={handleCalendarSelect}
          showCalenderModal={showCalendar}
          setShowCalenderModal={setShowCalendar}
        />
      )}
    </>
  );
};

export default RenderDates;
