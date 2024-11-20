// src/screens/index.ts
// import AccountScreen from '../screens/account';
// import ForgotPasswordScreen from '../screens/forgotPasswordScreen';
// import HomeScreen from '../screens/homeScreen';
// import LoginScreen from '../screens/loginScreen';
// import MyTripScreen from '../screens/myTrip';
import OnboardingScreen from '../screens/authModules/onboarding';
// import OTPScreen from '../screens/otpScreen';
// import RegisterScreen from '../screens/registerScreen';
// import SearchBusScreen from '../screens/searchBusScreen';
// import SearchScreen from '../screens/searchScreen';
import SplashScreen from '../screens/authModules/splash';
// import WalletScreen from '../screens/wallet';

// Define the type for screen components
interface ScreenComponents {
  SplashScreen: React.ComponentType<any>;
  OnboardingScreen: React.ComponentType<any>;
  // LoginScreen: React.ComponentType<any>;
  // ForgotPasswordScreen: React.ComponentType<any>;
  // OTPScreen: React.ComponentType<any>;
  // RegisterScreen: React.ComponentType<any>;
  // HomeScreen: React.ComponentType<any>;
  // MyTripScreen: React.ComponentType<any>;
  // WalletScreen: React.ComponentType<any>;
  // AccountScreen: React.ComponentType<any>;
  // SearchScreen: React.ComponentType<any>;
  // SearchBusScreen: React.ComponentType<any>;
}

// Exporting the screens as a typed object
const Screens: ScreenComponents = {
  SplashScreen,
  OnboardingScreen,
  // LoginScreen,
  // ForgotPasswordScreen,
  // OTPScreen,
  // RegisterScreen,
  // HomeScreen,
  // MyTripScreen,
  // WalletScreen,
  // AccountScreen,
  // SearchScreen,
  // SearchBusScreen,
};

export default Screens;
