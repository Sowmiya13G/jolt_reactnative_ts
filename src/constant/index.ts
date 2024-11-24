import * as iconPath from './iconpath';
import * as theme from './theme';

const SCREENS = {
  //  ---- common ----
  SPLASH_SCREEN: 'SplashScreen',
  ONBOARDING: 'OnboardingScreen',
  LOGIN: 'LoginScreen',
  FORGOT_PASSWORD: 'ForgotPasswordScreen',
  OTP_SCREEN: 'OTPScreen',
  REGISTER_SCREEN: 'RegisterScreen',

  // // bottom tabs
  HOME_SCREEN: 'HomeScreen',
  DASHBOARD: 'HomeScreen',
  MY_TRIP: 'MyTripScreen',
  ACCOUNT_SCREEN: 'AccountScreen',
  WALLET_SCREEN: 'WalletScreen',
  BOTTOM_TAB_NAV: 'BottomTabNavigator',
  SEARCH_SCREEN: 'SearchScreen',
  SEARCH_BUS_SCREEN: 'SearchBusScreen',
  SELECT_BOARDING_POINT: 'SelectBoardingPoint',
  SELECT_SEAT: 'SelectSeat',
} as const; 

type ScreenNames = keyof typeof SCREENS;

export { SCREENS, iconPath, theme };

