import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    backgroundColor: colors.white_FF,
    borderRadius: wp('2%'),
    paddingVertical: '4%',
    marginBottom: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('10%'),
  },
  horizontalLine: {
    height: wp('3%'),
    backgroundColor: colors.white_F7,
    width: '100%',
  },
  upiContainer: {
    marginHorizontal: wp('5%'),
    backgroundColor: colors.white_FF,
    borderRadius: wp('2%'),
    marginBottom: wp('5%'),
  },
  otherUPI: {
    marginVertical: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('8%'),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('7%'),
    marginVertical: wp('6%'),
  },
  title: {
    marginHorizontal: wp('5%'),
    marginTop:wp("3%"),
    marginBottom:wp("3%"),
  },
});

export default styles;
