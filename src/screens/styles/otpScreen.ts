import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as hp,
  heightPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, fontFamily } from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  subContainer: {
    marginHorizontal: '5%',
    backgroundColor: colors.white_FF,
  },
  texAlign: {
    textAlign: 'center',
  },
  titleMargin: {marginHorizontal: wp('4%')},
  errView: {
    backgroundColor: colors.red,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('1.5%'),
    borderRadius: wp('1%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelIcon: {
  
  },
  otp: {
    height: heightPercentageToDP('8%'),
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
    color: colors.grey_32,
  },
  underlineStyleBase: {
    width: wp('8%'),
    height: wp('6%'),
    borderRadius: wp('1%'),
    fontSize: hp('5%'),
    fontFamily: fontFamily.fontInterRegular,
    color: colors.grey_32,
  },
  loginButton: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('1.5%'),
    paddingVertical: wp('2%'),
    alignItems: 'center',
  },
  alreadyTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
