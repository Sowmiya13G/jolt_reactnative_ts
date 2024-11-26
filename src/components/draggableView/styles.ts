import {StyleSheet} from 'react-native';
import {baseStyle, colors} from '../../constant/theme';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    ...baseStyle.cardElevationStyle(),
    backgroundColor: 'lightblue',
  },
  closeIconView: {
    position: 'absolute',
    top: -40,
    left: '45%',
    zIndex: 100,
    padding: wp('2%'),
    borderRadius: wp('5%'),
    borderColor: colors.white_FF,
    borderWidth: wp('0.5%'),
  },
});

export default styles;
