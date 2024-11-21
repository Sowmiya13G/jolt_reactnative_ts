import React from 'react';
import { StatusBar, View, ViewStyle } from 'react-native';

// packages
import {
    SafeAreaProvider,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

// constants
import { colors } from '../../constant/theme';

interface CustomSafeAreaProps {
  style?: ViewStyle; 
  backgroundColor?: string; 
  statusBarBGColor?: string;
  isCustomFooter?: boolean; 
  footerComp?: () => JSX.Element; 
  children: React.ReactNode; 
}

const CustomSafeArea: React.FC<CustomSafeAreaProps> = ({
  style = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundColor = colors.white_FF,
  statusBarBGColor = colors.white_FF,
  isCustomFooter,
  footerComp = () => <></>,
  children,
}) => {

  const CustomStatusBar: React.FC<{ backgroundColor: string; barStyle?: 'light-content' | 'dark-content' }> = ({
    backgroundColor,
    barStyle = 'dark-content',
  }) => {
    const insets = useSafeAreaInsets();

    return (
      <View style={{ height: insets.top, backgroundColor }}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={statusBarBGColor} />
        <View pointerEvents="auto" style={style}>
          {children}
        </View>
      {isCustomFooter && footerComp && footerComp()}
    </SafeAreaProvider>
  );
};

export default CustomSafeArea;
