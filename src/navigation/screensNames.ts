// src/screens/index.ts

// auth modules
import ForgotPasswordScreen from '../screens/authModules/forgotPassword';
import LoginScreen from '../screens/authModules/login';
import OnboardingScreen from '../screens/authModules/onboarding';
import OTPScreen from '../screens/authModules/otpScreen';
import RegisterScreen from '../screens/authModules/registerScreen';
import SplashScreen from '../screens/authModules/splash';

// common modules
// dashboard stack
import HomeScreen from '../screens/commonModules/homeScreen';
import SearchBusScreen from '../screens/commonModules/searchBusScreen';
import SearchScreen from '../screens/commonModules/searchScreen';
import SelectBoardingPoint from '../screens/commonModules/selectBoardingPoints';
import SelectSeat from '../screens/commonModules/selectSeat';
import ReviewBooking from '../screens/commonModules/reviewBookingScreen';

import MyTripScreen from '../screens/commonModules/myTrip';
import TicketDetails from '../screens/commonModules/ticketDetails';

import AccountScreen from '../screens/commonModules/account';
import WalletScreen from '../screens/commonModules/wallet';

import NotificationScreen from '../screens/commonModules/notification';

// Define the type for screen components
interface ScreenComponents {
  SplashScreen: React.ComponentType<any>;
  OnboardingScreen: React.ComponentType<any>;
  LoginScreen: React.ComponentType<any>;
  ForgotPasswordScreen: React.ComponentType<any>;
  OTPScreen: React.ComponentType<any>;
  RegisterScreen: React.ComponentType<any>;

  HomeScreen: React.ComponentType<any>;
  SearchScreen: React.ComponentType<any>;
  SearchBusScreen: React.ComponentType<any>;
  SelectBoardingPoint: React.ComponentType<any>;
  SelectSeat: React.ComponentType<any>;
  ReviewBooking: React.ComponentType<any>;

  MyTripScreen: React.ComponentType<any>;
  TicketDetails: React.ComponentType<any>;

  WalletScreen: React.ComponentType<any>;
  AccountScreen: React.ComponentType<any>;

  NotificationScreen: React.ComponentType<any>;
}

// Exporting the screens as a typed object
const Screens: ScreenComponents = {
  SplashScreen,
  OnboardingScreen,
  LoginScreen,
  ForgotPasswordScreen,
  OTPScreen,
  RegisterScreen,

  HomeScreen,
  SelectBoardingPoint,
  SearchScreen,
  SearchBusScreen,
  SelectSeat,
  ReviewBooking,

  MyTripScreen,
  TicketDetails,

  WalletScreen,
  AccountScreen,

  NotificationScreen,
};

export default Screens;
