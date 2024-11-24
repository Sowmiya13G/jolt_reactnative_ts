import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// package
import { SvgProps } from 'react-native-svg';

// constant
import { SCREENS } from '../constant';
import { tabBar } from '../constant/strings';
import { baseStyle, colors, sizes } from '../constant/theme';
import ScreenName from './screensNames';

import HOME_ACTIVE from '../assets/svg/homeActive.svg';
import HOME_IN_ACTIVE from '../assets/svg/homeInActive.svg';
import PERSON_ACTIVE from '../assets/svg/person.svg';
import PERSON_IN_ACTIVE from '../assets/svg/personActive.svg';
import TRIP_ACTIVE from '../assets/svg/tripActive.svg';
import TRIP_IN_ACTIVE from '../assets/svg/tripInActive.svg';
import {
  default as WALLET_ACTIVE,
  default as WALLET_IN_ACTIVE,
} from '../assets/svg/walletInActive.svg';
import DashboardStack from './bottomTabStacks/homeStack';
import styles from './styles';

// Define types for screen item
interface ScreenItem {
  id: number;
  name: string;
  component: React.ComponentType;
  title: string;
  icon?: React.ElementType<SvgProps>;
}

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>(SCREENS.DASHBOARD);

  // Tab items
  const screenItem: ScreenItem[] = [
    {
      id: 1,
      name: SCREENS.DASHBOARD,
      component: ScreenName?.LoginScreen,
      title: tabBar?.home,
      icon: activeTab === SCREENS.DASHBOARD ? HOME_ACTIVE : HOME_IN_ACTIVE,
    },
    {
      id: 2,
      name: SCREENS.MY_TRIP,
      component: ScreenName?.MyTripScreen,
      title: tabBar?.myTrip,
      icon: activeTab === SCREENS.DASHBOARD ? TRIP_ACTIVE : TRIP_IN_ACTIVE,
    },
    {
      id: 3,
      name: SCREENS.ACCOUNT_SCREEN,
      component: ScreenName?.AccountScreen,
      title: tabBar?.account,
      icon: activeTab === SCREENS.DASHBOARD ? PERSON_ACTIVE : PERSON_IN_ACTIVE,
    },
    {
      id: 4,
      name: SCREENS.WALLET_SCREEN,
      component: ScreenName?.WalletScreen,
      title: tabBar?.wallet,
      icon: activeTab === SCREENS.DASHBOARD ? WALLET_ACTIVE : WALLET_IN_ACTIVE,
    },
  ];

  const renderScreen = (): React.ReactNode => {
    switch (activeTab) {
      case SCREENS.DASHBOARD:
        return <DashboardStack />;
      case SCREENS.MY_TRIP:
        return <ScreenName.MyTripScreen />;
      case SCREENS.ACCOUNT_SCREEN:
        return <ScreenName.AccountScreen />;
      case SCREENS.WALLET_SCREEN:
        return <ScreenName.WalletScreen />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderScreen()}
      <View style={styles.tabBarContainer}>
        {screenItem.map(tab => {
          const isActive = activeTab === tab.name;
          const IconComponent = tab.icon;
          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab.name)}>
              <View
                style={[styles.iconContainer, isActive && styles.activeTab]}>
                {IconComponent && (
                  <IconComponent
                    style={[baseStyle.iconStyle(isActive ? '7%' : '5%')]}
                  />
                )}
                <Text
                  style={[
                    styles.tabLabel,
                    isActive
                      ? baseStyle.txtStyleOutInterMedium(
                          sizes.size011,
                          colors.orange_05,
                        )
                      : baseStyle.txtStyleOutInterRegular(
                          sizes.size01,
                          colors.grey_DD,
                        ),
                  ]}>
                  {tab.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default BottomNavigation;
