import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';

// packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SvgProps} from 'react-native-svg';

// components
import Button from '../button';
import Spacer from '../spacer';

//styles
import styles from './styles';

//constants
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// Props interface
interface NoDataComponentProps {
  text?: string;
  disc?: string;
  isImage?: boolean;
  isButton?: boolean;
  noDataImage?: React.ComponentType<SvgProps>;
  customStyles?: StyleProp<ViewStyle>;
  handlePress?: () => void;
  buttonText?: string;
  height?: number;
  width?: number;
}

const NoDataComponent: React.FC<NoDataComponentProps> = ({
  text = strings.noDataFound,
  disc = strings.noDataFound,
  isImage = true,
  isButton = true,
  noDataImage: NoDataImage,
  customStyles,
  handlePress,
  buttonText = 'Retry',
  width,
  height,
}) => {
  return (
    <View style={[styles.container, customStyles]}>
      {isImage && NoDataImage && <NoDataImage width={width} height={height} />}
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size4, colors.grey_32),
          styles.centerAlignText,
        ]}>
        {text}
      </Text>
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_085),
          styles.centerAlignText,
        ]}>
        {disc}
      </Text>
      <Spacer height={hp('2%')} />

      {isButton && handlePress && (
        <Button
          onPress={handlePress}
          text={buttonText}
          buttonStyle={styles.button}
          textStyle={styles.textStyle}
        />
      )}
    </View>
  );
};

export default NoDataComponent;
