// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { SCREENS } from '../../constant';
// import ScreenName from "../screensNames"

// // Define the type for your navigation stack
// type DashboardStackParamList = {
//   [SCREENS.HOME_SCREEN]: undefined;
//   [SCREENS.SEARCH_SCREEN]: undefined;
//   [SCREENS.SEARCH_BUS_SCREEN]: undefined;
// };

// // Create the typed stack navigator
// const Stack = createNativeStackNavigator<DashboardStackParamList>();

// const DashboardStack: React.FC = () => {
//   // Define the screen components and names
//   const ScreensComponentArr = [
//     {
//       ScreenName: SCREENS.HOME_SCREEN,
//       Component: ScreenName.HomeScreen,
//     },
//     {
//       ScreenName: SCREENS.SEARCH_SCREEN,
//       Component: ScreenName.SearchScreen,
//     },
//     {
//       ScreenName: SCREENS.SEARCH_BUS_SCREEN,
//       Component: ScreenName.SearchBusScreen,
//     },
//   ];

//   return (
//     <Stack.Navigator initialRouteName={SCREENS.HOME_SCREEN}>
//       {ScreensComponentArr.map(({ ScreenName, Component }) => (
//         <Stack.Screen
//           key={ScreenName}
//           name={ScreenName as keyof DashboardStackParamList} // Ensure type compatibility
//           component={Component}
//           options={{ headerShown: false }}
//         />
//       ))}
//     </Stack.Navigator>
//   );
// };

// export default DashboardStack;
