import React from 'react';
import { FlatList, View, ViewStyle } from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

// constants
import { iconPathURL } from '../../constant/iconpath';
import { colors } from '../../constant/theme';

// prop types
import {
  BoardingPoint,
  BoardingPointRouteParams,
} from '../../propTypes/screenProps';
// styles
import styles from '../styles/selectBoardingPoints';

const SelectBoardingPoint: React.FC<BoardingPointRouteParams> = props => {
  // props
  const {data} = props.route.params;

  // local states

  // ---------------------------------------- Functionalities ----------------------------------------

  // ---------------------------------------- set data functions ----------------------------------------

  // ---------------------------------------- render ui ----------------------------------------

  const renderBody = ({item}: {item: BoardingPoint}): JSX.Element => {
    return (
      <View style={styles.subContainer}>
        <Spacer height={hp('3%')} />
      </View>
    );
  };

  return (
    <CustomSafeArea
      style={styles.container as ViewStyle}
      statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => navigationService.goBack()}
        title={`${data?.from} To ${data?.to}`}
        color={colors.black_00}
        isRightIcon={true}
        rightIcon={iconPathURL.calender}
        date={data?.date}
      />
      <Spacer height={hp('3%')} />
      <FlatList
        data={[]}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default SelectBoardingPoint;
