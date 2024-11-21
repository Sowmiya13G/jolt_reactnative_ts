import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  marginHorizontal: {marginHorizontal: wp('5%')},
  wrapper: {flex: 1, alignSelf: 'center'},
  textAlign: {textAlign: 'center'},
  imageStyle: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
  },
  skipButton: {
    backgroundColor: colors.white_FF,
    borderRadius: wp('3%'),
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('5%'),
    borderWidth: wp('0.1%'),
    borderColor: colors.grey_685,
    width: wp('28%'),
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('5%'),
    width: wp('28%'),
    alignItems: 'center',
  },
  paginationDots: {
    width: wp('8%'),
    height: wp('2.5%'),
    borderRadius: wp('3%'),
    marginHorizontal: wp('2%'),
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoView: {
    borderColor: colors.green_2F,
    borderWidth: wp('0.5%'),
    borderRadius: wp('5%'),
    padding: wp('1%'),
  },
  logo: {
    alignSelf: 'center',
    resizeMode:"contain"
  },
});

export default styles;
