import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { baseStyle, colors } from '../../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.white_FF,
    borderRadius: wp('3%'),
    paddingVertical: '3%',
    borderColor: colors.grey_F1,
    borderWidth: 1,
    paddingHorizontal: wp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  point: {
    ...baseStyle.iconStyle('4.5%'),
    marginRight: wp('0.5%'),
  },
});

export default styles;
