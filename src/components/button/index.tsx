import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
// styles
import styles from './styles';
// component
import Spacer from '../spacer';
// constant
import { baseStyle, sizes } from '../../constant/theme';

interface ButtonProps {
  onPress: () => void;
  text?: string;
  icon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  spaceBetween?: number;
  height?: number | string;
  flex?: number;
  width?: number | string;
  borderRadius?: number;
  textColor?: string;
  textSize?: number;
  backgroundColor?: string;
  alignSelf?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'auto';
  disabled?: boolean;
  borderWidth?: number;
  borderColor?: string;
  paddingVertical?: number;
  buttonStyle?: ViewStyle;
  tintColor?: string;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  icon,
  rightIcon,
  spaceBetween,
  height,
  flex,
  width,
  borderRadius,
  textColor,
  textSize = sizes.size2,
  backgroundColor,
  alignSelf,
  disabled = false,
  borderWidth,
  borderColor,
  paddingVertical,
  buttonStyle,
  tintColor,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          flex: flex,
          height: height,
          width: width,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
          alignSelf: alignSelf,
          borderColor: borderColor,
          borderWidth: borderWidth,
          paddingVertical: paddingVertical,
        },
        buttonStyle,
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.65}>
      {icon && (
        <>
          <Image source={icon} style={styles.icon} />
          <Spacer width={spaceBetween} />
        </>
      )}
      {text && (
        <>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(textSize, textColor || 'black'),
              textStyle,
            ]}>
            {text}
          </Text>
          {rightIcon && (
            <>
              <View style={styles.iconRight}>
                <Image
                  source={rightIcon}
                  style={[styles.iconRight, {tintColor: tintColor}]}
                />
              </View>
            </>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
