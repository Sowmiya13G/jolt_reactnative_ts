import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white_FF,
    paddingVertical: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    paddingHorizontal: '2.5%',
  },
  icon: {
    ...baseStyle.iconStyle('5.5%'),
    resizeMode: 'contain',
  },
});

export default styles;
