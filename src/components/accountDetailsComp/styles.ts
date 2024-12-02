import {StyleSheet} from 'react-native';
import {colors} from '../../constant/theme';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  input: {
    borderColor: colors.transparent,
    borderBottomColor: colors.grey_DD,
    borderWidth: widthPercentageToDP('0.5%'),
    height: widthPercentageToDP('8%'),
    borderRadius: 0,
  },
});

export default styles;
