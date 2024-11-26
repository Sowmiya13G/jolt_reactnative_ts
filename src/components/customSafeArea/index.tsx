import React from 'react';
import {Animated, StatusBar, View, ViewStyle} from 'react-native';

// packages
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

// constants
import {colors} from '../../constant/theme';

interface CustomSafeAreaProps {
  style?: ViewStyle;
  backgroundColor?: string;
  statusBarBGColor?: string;
  isCustomFooter?: boolean;
  footerComp?: () => JSX.Element;
  children: React.ReactNode;
  opacity?: Animated.Value;
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
  opacity = new Animated.Value(1),
}) => {
  const CustomStatusBar: React.FC<{
    backgroundColor: string;
    barStyle?: 'light-content' | 'dark-content';
    opacity: Animated.Value;
  }> = ({backgroundColor, barStyle = 'dark-content', opacity}) => {
    const insets = useSafeAreaInsets();

    return (
      <Animated.View style={{height: insets.top, backgroundColor, opacity}}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </Animated.View>
    );
  };

  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={statusBarBGColor} opacity={opacity} />
      <View pointerEvents="auto" style={style}>
        {children}
      </View>
      {isCustomFooter && footerComp && footerComp()}
    </SafeAreaProvider>
  );
};

export default CustomSafeArea;
