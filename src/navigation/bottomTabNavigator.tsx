import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useIsFocused, useNavigationState } from '@react-navigation/native';

// package
import { SvgProps } from 'react-native-svg';

// constant
import { SCREENS } from '../constant';
import { tabBar } from '../constant/strings';
import { baseStyle, colors, sizes } from '../constant/theme';
import ScreenName from './screensNames';

import HOME_ACTIVE from '../assets/svg/homeActive.svg';
import HOME_IN_ACTIVE from '../assets/svg/homeInActive.svg';
import PERSON_IN_ACTIVE from '../assets/svg/person.svg';
import PERSON_ACTIVE from '../assets/svg/personActive.svg';
import TRIP_ACTIVE from '../assets/svg/tripActive.svg';
import TRIP_IN_ACTIVE from '../assets/svg/tripInActive.svg';
import {
  default as WALLET_ACTIVE,
  default as WALLET_IN_ACTIVE,
} from '../assets/svg/walletInActive.svg';
import DashboardStack from './bottomTabStacks/homeStack';
import TripStack from './bottomTabStacks/tripStack';
import WalletStack from './bottomTabStacks/walletStack';
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

  const getFocusedRouteName = (state: any): string | undefined => {
    if (!state || !state.routes) {
      return undefined;
    }
    const route = state.routes[state.index];
    if (route.state) {
      return getFocusedRouteName(route.state);
    }
    return route.name;
  };

  const routeName = useNavigationState(state => getFocusedRouteName(state));

  const isFocused = useIsFocused();
  const noTabScreens: string[] = [SCREENS.SELECT_SEAT];
  const shouldHideTabBar = isFocused && noTabScreens?.includes(routeName ?? '');

  // Tab items
  const screenItem: ScreenItem[] = [
    {
      id: 1,
      name: SCREENS.DASHBOARD,
      component: ScreenName?.HomeScreen,
      title: tabBar?.home,
      icon: activeTab === SCREENS.DASHBOARD ? HOME_ACTIVE : HOME_IN_ACTIVE,
    },
    {
      id: 2,
      name: SCREENS.MY_TRIP,
      component: ScreenName?.MyTripScreen,
      title: tabBar?.myTrip,
      icon: activeTab === SCREENS.MY_TRIP ? TRIP_ACTIVE : TRIP_IN_ACTIVE,
    },
    {
      id: 3,
      name: SCREENS.ACCOUNT_SCREEN,
      component: ScreenName?.AccountScreen,
      title: tabBar?.account,
      icon:
        activeTab === SCREENS.ACCOUNT_SCREEN ? PERSON_ACTIVE : PERSON_IN_ACTIVE,
    },
    {
      id: 4,
      name: SCREENS.WALLET_STACK,
      component: ScreenName?.WalletScreen,
      title: tabBar?.wallet,
      icon:
        activeTab === SCREENS.WALLET_SCREEN ? WALLET_ACTIVE : WALLET_IN_ACTIVE,
    },
  ];

  const renderScreen = (): React.ReactNode => {
    switch (activeTab) {
      case SCREENS.DASHBOARD:
        return <DashboardStack />;
      case SCREENS.MY_TRIP_STACK:
        return <TripStack />;
      case SCREENS.ACCOUNT_SCREEN:
        return <ScreenName.AccountScreen />;
      case SCREENS.WALLET_SCREEN:
        return <WalletStack />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderScreen()}
      {!shouldHideTabBar && (
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
                      fill={isActive ? colors.orange_05 : colors.grey_32}
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
      )}
    </>
  );
};

export default BottomNavigation;
