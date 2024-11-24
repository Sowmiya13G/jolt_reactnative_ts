import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// packages

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';

// constants
import { colors } from '../../constant/theme';
import styles from '../styles/wallet';

interface WalletScreenProps {}

const WalletScreen: React.FC<WalletScreenProps> = () => {
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
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};


export default WalletScreen;
