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
  BOTTOM_TAB_NAV: 'BottomTabNavigator',
  DASHBOARD: 'HomeScreen',
  HOME_SCREEN: 'HomeScreen',
  SEARCH_SCREEN: 'SearchScreen',
  SEARCH_BUS_SCREEN: 'SearchBusScreen',
  SELECT_BOARDING_POINT: 'SelectBoardingPoint',
  SELECT_SEAT: 'SelectSeat',

  MY_TRIP_STACK: 'MyTripScreen',
  MY_TRIP: 'MyTripScreen',
  TICKET_DETAILS: 'TicketDetailsScreen',

  ACCOUNT_SCREEN: 'AccountScreen',

  WALLET_STACK: 'WalletScreen',
  WALLET_SCREEN: 'WalletScreen',

  NOTIFICATION_SCREEN: 'NotificationScreen',
} as const;

type ScreenNames = keyof typeof SCREENS;

export {SCREENS, iconPath, theme};
