// Wallet Screen Styles
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  marginHorizontal: {
    marginHorizontal: wp('5%'),
  },
  texAlign: {
    textAlign: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  iconView: {
    marginRight: wp('3%'),
    backgroundColor: colors.white_FF,
    padding: wp('4.5%'),
    borderRadius: wp('2%'),
    ...baseStyle.cardElevationStyle(),
  },
  horizontalLine: {
    height: wp('2%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: hp('2%'),
  },
  mapView: {
    // marginHorizontal: wp('5%'),
    borderRadius: wp('5%'),
    resizeMode: 'cover',
    alignSelf:"center"
  },
  borderView: {
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    borderRadius: wp('3%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('3%'),
    marginHorizontal: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderView2: {
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    borderRadius: wp('3%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('3%'),
    marginHorizontal: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    width: '40%',
  },
  column60: {
    width: '60%',
  },
  verticalLine: {
    borderLeftWidth: wp('0.2%'),
    borderLeftColor: colors.grey_5DD,
    height: '100%',
  },
  cancel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red_00,
    borderRadius: wp('2%'),
    paddingVertical: hp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white_F3,
    borderRadius: wp('2%'),
    paddingVertical: hp('1%'),
    marginHorizontal: wp('1.5%'),
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:"2%"
  },
});

export default styles;
