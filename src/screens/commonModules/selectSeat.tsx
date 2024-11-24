// screens/selectSeat.tsx

import React, {useState} from 'react';
import {FlatList, ViewStyle, Text} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import DraggableView from '../../components/draggableView';

// constants
import {colors} from '../../constant/theme';

// prop types
import {BoardingPointRouteParams} from '../../propTypes/screenProps';

// styles
import styles from '../styles/selectSeat';

const SelectSeat: React.FC<BoardingPointRouteParams> = props => {
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

  const [rbsheetHeight, setRbsheetHeight] = useState(hp('10%'));
  const [borderRadius, setBorderRadius] = useState(0);

  // ---------------------------------------- render ui ----------------------------------------

  const renderBody = () => {
    return (
      <>
        <Button
          text="Open RBSheet"
          onPress={() => setRbsheetHeight(hp('80%'))}
        />
      </>
    );
  };

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
        data={[]}
        renderItem={renderBody}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />

      <DraggableView
        rbsheetHeight={rbsheetHeight}
        setRbsheetHeight={setRbsheetHeight}
        customStyle={{
          backgroundColor: 'lightblue', // Custom background color
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 5, // Shadow for Android
          position: 'relative',
        }}
        setBorderRadius={setBorderRadius}></DraggableView>
    </CustomSafeArea>
  );
};

export default SelectSeat;
