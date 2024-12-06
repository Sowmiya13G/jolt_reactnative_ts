import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View, ViewStyle} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constants
import {SCREENS} from '../../constant';
import {dashboard} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// prop types
import {
  BoardingPointRouteParams,
  BoardingPointType,
  SelectedPointsType,
} from '../../propTypes/screenProps';

// styles
import styles from '../styles/selectBoardingPoints';

// SVG imports
import SELECTED from '../../assets/svg/selectedButton.svg';
import UN_SELECTED from '../../assets/svg/unSelectedButton.svg';

// temp data
const boardingPointsData = [
  {
    id: 1,
    place: 'Central Park Mall',
    address:
      'Letjen S. Parman St No.Kavling 28, North Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 11470',
    time: '21:30',
  },
  {
    id: 2,
    place: 'Main Bus Stand',
    address:
      'Letjen S. Parman St No.Kavling 28, North Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 11470',
    time: '21:30',
  },
  {
    id: 3,
    place: 'Main Bus Stand',
    address:
      'Letjen S. Parman St No.Kavling 28, North Tanjung Duren, Grogol petamburan, West Jakarta City, Jakarta 11470',
    time: '21:30',
  },
];

const SelectBoardingPoint: React.FC<BoardingPointRouteParams> = props => {
  // props
  const {data} = props.route.params;
  const {
    item: {name, timePeriod},
    date,
  } = data;
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const disc = `${name} - ${timePeriod[0]}, ${formattedDate}`;

  // local states
  const [selectedPoints, setSelectedPoints] = useState<SelectedPointsType>({
    boarding: null,
    dropping: null,
  });

  // ---------------------------------------- Functionalities ----------------------------------------
  const handleSelection = (
    item: BoardingPointType | null,
    type: keyof SelectedPointsType,
  ) => {
    setSelectedPoints(prev => ({
      ...prev,
      [type]: prev[type]?.id === item?.id ? null : item,
    }));
  };

  // ---------------------------------------- render ui ----------------------------------------

  const renderSelectionCard = (
    selectedPoint: BoardingPointType,
    type: keyof SelectedPointsType,
  ) => {
    const isDropping = type == 'dropping';
    return (
      <View style={styles.cardView}>
        <View style={styles.row}>
          <Text
            style={baseStyle.txtStyleOutInterSemiBold(
              sizes.size2,
              colors.black_00,
            )}>
            {selectedPoint?.place}
          </Text>
          <Text
            style={baseStyle.txtStyleOutInterRegular(
              sizes.size02,
              colors.black_00,
            )}>
            {selectedPoint?.time}
          </Text>
        </View>
        <Spacer height={hp('1%')} />
        <View style={styles.rowView}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.grey_085),
              styles.textView,
            ]}>
            {selectedPoint?.address}
          </Text>
          <Button
            onPress={() => handleSelection(null, type)}
            text={
              isDropping ? dashboard.changeDropping : dashboard.changeBoarding
            }
            buttonStyle={styles.button}
            textStyle={styles.textStyle}
          />
        </View>
      </View>
    );
  };

  const renderPointsList = (type: keyof SelectedPointsType) => (
    <>
      {boardingPointsData.map(item => {
        const isSelected = selectedPoints[type]?.id === item.id;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleSelection(item, type)}>
            <View style={styles.cardView1}>
              {isSelected ? <SELECTED /> : <UN_SELECTED />}
              <Spacer width={widthPercentageToDP('3%')} />
              <View>
                <View style={styles.rowWidth}>
                  <Text
                    style={baseStyle.txtStyleOutInterSemiBold(
                      sizes.size2,
                      colors.black_00,
                    )}>
                    {item.place}
                  </Text>
                  <Text
                    style={baseStyle.txtStyleOutInterRegular(
                      sizes.size02,
                      colors.black_00,
                    )}>
                    {item.time}
                  </Text>
                </View>
                <Spacer height={hp('1.5%')} />
                <Text
                  style={[
                    baseStyle.txtStyleOutInterRegular(
                      sizes.size011,
                      colors.grey_085,
                    ),
                    styles.address,
                  ]}>
                  {item.address}
                </Text>
              </View>
            </View>
            <Spacer height={hp('2%')} />
          </TouchableOpacity>
        );
      })}
    </>
  );

  return (
    <CustomSafeArea
      style={styles.container as ViewStyle}
      statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => navigationService.goBack()}
        title={`${data?.from} To ${data?.to}`}
        color={colors.black_00}
        titleDisc={disc}
        headerStyle={styles.header}
      />
      <Spacer height={hp('3%')} />
      <FlatList
        data={['boarding', 'dropping']}
        renderItem={({item}) => (
          <View style={styles.subContainer}>
            <Text
              style={baseStyle.txtStyleOutInterSemiBold(
                sizes.size2,
                colors.grey_32,
              )}>
              {(item as keyof SelectedPointsType) == 'boarding'
                ? dashboard.boardingPoints
                : dashboard.droppingPoints}
            </Text>
            <Spacer height={hp('3%')} />
            {selectedPoints[item as keyof SelectedPointsType]
              ? renderSelectionCard(
                  selectedPoints[item as keyof SelectedPointsType]!,
                  item as keyof SelectedPointsType,
                )
              : renderPointsList(item as keyof SelectedPointsType)}
            <Spacer height={hp('3%')} />
            {Boolean(selectedPoints?.boarding) &&
              Boolean(selectedPoints?.dropping) &&
              (item as keyof SelectedPointsType) != 'boarding' && (
                <Button
                  onPress={() =>
                    navigationService.navigate(SCREENS.SELECT_SEAT, {
                      data: data,
                    })
                  }
                  text={dashboard.selectSeat}
                  buttonStyle={styles.submitButton}
                  textStyle={styles.submitButtonTextStyle}
                />
              )}
          </View>
        )}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default SelectBoardingPoint;
