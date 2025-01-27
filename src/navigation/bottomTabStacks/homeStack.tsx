import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '../../constant';
import ScreenName from '../screensNames';
interface ScreenComponent {
  ScreenName: string;
  Component: React.ComponentType<any>;
}

const DashboardStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr: ScreenComponent[] = [
    {
      ScreenName: SCREENS.DASHBOARD,
      Component: ScreenName.HomeScreen,
    },
    {
      ScreenName: SCREENS.SEARCH_SCREEN,
      Component: ScreenName.SearchScreen,
    },
    {
      ScreenName: SCREENS.SEARCH_BUS_SCREEN,
      Component: ScreenName.SearchBusScreen,
    },
    {
      ScreenName: SCREENS.SELECT_BOARDING_POINT,
      Component: ScreenName.SelectBoardingPoint,
    },
    {
      ScreenName: SCREENS.SELECT_SEAT,
      Component: ScreenName.SelectSeat,
    },
    {
      ScreenName: SCREENS.NOTIFICATION_SCREEN,
      Component: ScreenName.NotificationScreen,
    },
    {
      ScreenName: SCREENS.REVIEW_BOOKING,
      Component: ScreenName.ReviewBooking,
    },
  ];

  return (
    <Stack.Navigator initialRouteName={SCREENS.DASHBOARD}>
      {ScreensComponentArr.map(({ScreenName, Component}) => (
        <Stack.Screen
          key={ScreenName}
          name={ScreenName}
          component={Component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default DashboardStack;
