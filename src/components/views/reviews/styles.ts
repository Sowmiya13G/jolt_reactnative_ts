import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
    marginHorizontal: wp('5%'),
  },
  row: {
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    backgroundColor: colors.white_FAED,
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('2%'),
  },
  margin: {
    marginHorizontal: '5%',
  },
  reviewContent: {
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    backgroundColor: colors.white_FAED,
    borderRadius: wp('3%'),
    alignItems: 'center',
    width: wp('60%'),
  },
  comment: {
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('4%'),
    height: hp('12%'),
  },
  verticalLine: {
    width: 1,
    height: '30%',
    borderWidth: 1,
    borderColor: colors.grey_D9,
    // marginVertical: wp('2%'),
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2%'),
    height: hp('5%'),
  },
  point: {
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    backgroundColor: colors.grey_F1,
    borderRadius: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'center',
  },
  number: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    paddingVertical: '1%',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: wp('60%'),
  },
  pointsView: {
    alignItems: 'flex-end',
    right: wp('6%'),
  },
});

export default styles;
