import React, {useState} from 'react';
import {Animated, FlatList, ViewStyle} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import CustomSafeArea from '../../components/customSafeArea';
import DraggableView from '../../components/draggableView';
import Header from '../../components/header';
import Spacer from '../../components/spacer';

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

  // use state
  const [rbsheetHeight, setRbsheetHeight] = useState<string | number>(
    hp('10%'),
  );
  const [borderRadius, setBorderRadius] = useState<string | number>(wp('0%'));

  const shadowOpacity = useState(new Animated.Value(0))[0];
  const shadowOpacitySafeArea = useState(new Animated.Value(1))[0];
  // ---------------------------------------- render ui ----------------------------------------

  const renderBody = () => {
    return <></>;
  };

  // const updateShadowOpacity = (height: string | number) => {
  //   if (Number(height) > hp('50%')) {
  //     Animated.timing(shadowOpacity, {
  //       toValue: 0.4,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();
  //     Animated.timing(shadowOpacitySafeArea, {
  //       toValue: 0.3,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();
  //   } else {
  //     Animated.timing(shadowOpacity, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();
  //     Animated.timing(shadowOpacitySafeArea, {
  //       toValue: 1,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }).start();
  //   }
  // };

  const updateShadowOpacity = (height: string | number) => {
    const opacityValue = Number(height) > hp('50%') ? 0.4 : 0;
    const safeAreaOpacityValue = Number(height) > hp('50%') ? 0.3 : 1;
  
    Animated.timing(shadowOpacity, {
      toValue: opacityValue,
      duration: 300,
      useNativeDriver: true, 
    }).start();
  
    Animated.timing(shadowOpacitySafeArea, {
      toValue: safeAreaOpacityValue,
      duration: 300,
      useNativeDriver: true, 
    }).start();
  };
  

  React.useEffect(() => {
    updateShadowOpacity(rbsheetHeight);
  }, [rbsheetHeight]);

  return (
    <CustomSafeArea
      style={styles.container as ViewStyle}
      opacity={shadowOpacitySafeArea}
      statusBarBGColor={
        Number(rbsheetHeight) > hp('70%')
          ? 'rgba(0, 0, 0, 0.5)'
          : colors.white_FF
      }>
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

      <Animated.View
        style={[
          styles.shadowOverlay,
          {
            opacity: shadowOpacity,
          },
        ]}
      />
      <DraggableView
        rbsheetHeight={rbsheetHeight}
        setRbsheetHeight={setRbsheetHeight}
        customStyle={[styles.dragView]}
        setBorderRadius={setBorderRadius}></DraggableView>
    </CustomSafeArea>
  );
};

export default SelectSeat;