import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.white_FF,
    paddingVertical: wp('5%'),
    paddingHorizontal: wp('4%'),
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    marginHorizontal: '5%',
    marginVertical: '3%',
    borderRadius: wp('3%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    paddingHorizontal: wp('3%'),
  },
  green: {
    padding: wp('1.5%'),
    backgroundColor: colors.green_2F,
    borderRadius: 100 / 2,
  },
  separatorLine: {
    height: wp('0.5%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
  },
  verticalLine: {
    width: 1,
    height: '20%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.grey_D9,
    marginVertical: wp('2%'),
  },
  routePointView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  },
});

export default styles;
