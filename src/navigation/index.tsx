// AppStack.tsx
import * as React from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationService from './navigationService';

// constant
import {SCREENS} from '../constant';
import ScreenName from './screensNames';
import BottomNavigation from './bottomTabNavigator';

interface ScreenComponent {
  ScreenName: string;
  Component: React.ComponentType<any>;
}

const AppStack: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const ScreensComponentArr: ScreenComponent[] = [
    {
      ScreenName: SCREENS.SPLASH_SCREEN,
      Component: ScreenName.SplashScreen,
    },
    {
      ScreenName: SCREENS.ONBOARDING,
      Component: ScreenName.OnboardingScreen,
    },
    {
      ScreenName: SCREENS.LOGIN,
      Component: ScreenName.LoginScreen,
    },
    {
      ScreenName: SCREENS.FORGOT_PASSWORD,
      Component: ScreenName.ForgotPasswordScreen,
    },
    {
      ScreenName: SCREENS.OTP_SCREEN,
      Component: ScreenName.OTPScreen,
    },
    {
      ScreenName: SCREENS.REGISTER_SCREEN,
      Component: ScreenName.RegisterScreen,
    },
    {
      ScreenName: SCREENS.HOME_SCREEN,
      Component: ScreenName.HomeScreen,
    },
    {
      ScreenName: SCREENS.SEARCH_SCREEN,
      Component: ScreenName.SearchScreen,
    },
    {
      ScreenName: SCREENS.BOTTOM_TAB_NAV,
      Component: BottomNavigation,
    },
  ];

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator initialRouteName={SCREENS.SPLASH_SCREEN}>
        {ScreensComponentArr.map(({ScreenName, Component}) => (
          <Stack.Screen
            key={ScreenName}
            name={ScreenName}
            component={Component}
            options={{headerShown: false}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
