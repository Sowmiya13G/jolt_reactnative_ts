import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

// packages
import {heightPercentageToDP} from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import styles from './styles';

// Props type definition
interface PopUpProps {
  icon: ImageSourcePropType;
  title: string;
  disc: string;
}

const PopUp: React.FC<PopUpProps> = ({icon, title, disc}) => {
  return (
    <View style={styles.subContainer}>
      <Image source={icon} style={styles.image} />
      <Spacer height={heightPercentageToDP('2%')} />
      <Text
        style={[baseStyle.txtStyleOutInterMedium(sizes.size4, colors.grey_32)]}>
        {title}
      </Text>
      <Spacer height={heightPercentageToDP('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32),
          styles.texAlign,
        ]}>
        {disc}
      </Text>
    </View>
  );
};

export default PopUp;
