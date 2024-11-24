import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../../constant';
import ScreenName from '../screensNames';

type DashboardStackParamList = {
  [key in keyof typeof SCREENS]: undefined;
};

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack: React.FC = () => {
  const ScreensComponentArr = [
    {
      ScreenName: SCREENS.HOME_SCREEN,
      Component: ScreenName.WalletScreen,
    },
    // {
    //   ScreenName: SCREENS.SEARCH_SCREEN,
    //   Component: ScreenName.SearchScreen,
    // },
    // {
    //   ScreenName: SCREENS.SEARCH_BUS_SCREEN,
    //   Component: ScreenName.SearchBusScreen,
    // },
  ];

  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
      {ScreensComponentArr.map(({ ScreenName, Component }) => (
        <Stack.Screen
          key={ScreenName}
          name={ScreenName as keyof DashboardStackParamList} 
          component={Component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default DashboardStack;
