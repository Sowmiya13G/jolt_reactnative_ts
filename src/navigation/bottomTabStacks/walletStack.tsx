import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from '../../constant';
import ScreenName from '../screensNames';

interface ScreenComponent {
  ScreenName: string;
  Component: React.ComponentType<any>;
}

const WalletStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr: ScreenComponent[] = [
    {
      ScreenName: SCREENS.WALLET_SCREEN,
      Component: ScreenName?.WalletScreen,
    },
  ];

  return (
    <Stack.Navigator initialRouteName={SCREENS.WALLET_SCREEN}>
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

export default WalletStack;
