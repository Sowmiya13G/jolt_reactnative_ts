import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { baseStyle, colors } from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  iconView: {
    marginRight: wp('3%'),
    backgroundColor: colors.white_FF,
    padding: wp('4.5%'),
    borderRadius: wp('2%'),
    ...baseStyle.cardElevationStyle(),
  },
  statusBarView: {
    marginHorizontal: wp('2%'),
  },
  noDataContainer: {
    flex: 1,
  },
});

export default styles;
