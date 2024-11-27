import React, { useState } from 'react';
import {
  FlatList,
  Platform,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

// packages
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SvgProps } from 'react-native-svg';

// components
import CalenderComponent from '../calender';
import Spacer from '../spacer';

// constants
import { baseStyle, colors, sizes } from '../../constant/theme';

// utils
import { formatDateText } from '../../utils/helperFunctions';

import ARROW from '../../assets/svg/arrow.svg';
import CALENDAR_WHITE from '../../assets/svg/calender-white.svg';
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
  data: (DateItem | TripItem)[];
  isDates?: boolean;
  isTrips?: boolean;
  onTripSelect?: (from: string, to: string) => void;
  customStylesTrip?: ViewStyle;
  textStyleTrip?: TextStyle;
  arrowIcon?: React.ElementType<SvgProps>;
}

const RenderDates: React.FC<RenderDatesProps> = ({
  data,
  isDates = true,
  isTrips = false,
  onTripSelect,
  customStylesTrip,
  textStyleTrip,
  arrowIcon = ARROW,
}) => {
  const [tripsData, setTripsData] = useState<TripItem[]>(
    data.filter(item => 'from' in item) as TripItem[],
  );
  const [selectedDate, setSelectedDate] = useState<DateItem | null>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [modalDate, setModalDate] = useState<string | null>(null);
  const [dataList, setDataList] = useState<DateItem[]>(data as DateItem[]);

  const handleCalendarSelect = (selectedDate: string) => {
    setModalDate(selectedDate);
    setSelectedDate({date: selectedDate, label: selectedDate});

    const updatedData = [...dataList];
    const lastIndex = updatedData.length - 1;

    if (updatedData[lastIndex]) {
      updatedData[lastIndex] = {
        ...updatedData[lastIndex],
        date: selectedDate,
        label: formatDateText(selectedDate, true),
      };
    }
    setDataList(updatedData);
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

  const isDateItem = (item: DateItem | TripItem): item is DateItem => {
    return (item as DateItem).date !== undefined;
  };

  const resultDate = (data: (DateItem | TripItem)[]) => {
    return data.map(item => {
      if ('date' in item) {
        return {
          ...item,
          date: item.date || '',
        };
      }
      return item;
    });
  };

  const renderItem = ({item}: {item: DateItem | TripItem}) => {
    if ('from' in item && 'to' in item) {
      const isSelected = selectedDate?.id === item.id;

      return (
        <TouchableOpacity
          onPress={() => handleSelect(item)}
          style={[
            {
              marginHorizontal: Platform?.OS == 'ios' ? wp('1%') : wp('0.5%'),
              paddingVertical: wp('2%'),
              paddingHorizontal:
                Platform?.OS == 'ios' ? wp('2.5%') : wp('1.7%'),
              backgroundColor: isSelected ? colors.green_2F : colors.white_FF,
              borderColor: isSelected ? colors.green_2F : colors.black_00,
              borderRadius: wp('6%'),
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: wp('0.2%'),
              marginBottom: wp('2.5%'),
            },
            customStylesTrip,
          ]}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size011,
                isSelected ? colors.white_FF : colors.black_22,
              ),
              textStyleTrip,
            ]}>
            {item.from}
          </Text>
          <Spacer width={wp('1%')} />
          {Boolean(arrowIcon) ? (
            React.createElement(arrowIcon)
          ) : (
            <ARROW
              width={wp('4%')}
              height={wp('4%')}
              fill={isSelected ? colors.white_FF : colors.black_00}
            />
          )}

          <Spacer width={wp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size011,
                isSelected ? colors.white_FF : colors.black_22,
              ),
              textStyleTrip,
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
    } else {
      const isSelected = isDateItem(item) && selectedDate?.date === item.date;
      const isLastItem = Number(data.length) - 1 === Number(item.index);

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
                {Boolean(isSelected) ? (
                  <CALENDAR_WHITE width={wp('4%')} height={wp('4%')} />
                ) : (
                  <CALENDAR width={wp('4%')} height={wp('4%')} />
                )}
              </TouchableOpacity>
              <Spacer width={wp('2%')} />
            </>
          )}
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(
                sizes.size011,
                isSelected ? colors.white_FF : colors.black_22,
              ),
            ]}>
            {isDateItem(item) ? item.label : 'Date'}
          </Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <>
      <FlatList
        data={resultDate(isDates ? dataList : tripsData)}
        renderItem={renderItem}
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
