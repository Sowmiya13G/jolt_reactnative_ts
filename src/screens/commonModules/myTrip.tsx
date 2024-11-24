import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';

// constants
import { colors } from '../../constant/theme';
import styles from '../styles/myTrip';

interface MyTripScreenProps {}

const MyTripScreen: React.FC<MyTripScreenProps> = () => {
  // Render Body
  const renderBody = ({ item }: ListRenderItemInfo<string>) => {
    return <></>;
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
      />
      <FlatList
        data={['MY_TRIP']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBody}
      />
    </CustomSafeArea>
  );
};

export default MyTripScreen;
