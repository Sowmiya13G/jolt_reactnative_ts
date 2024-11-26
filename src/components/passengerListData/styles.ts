// Account Screen
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constant/theme';

const styles = StyleSheet.create({
  passengerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: wp('2%'),
  },
  input: {
    width: wp('35%'),
  },
  ageInput: {
    width: wp('15%'),
  },
  addPassengerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    gap: wp('2%'),
    borderRadius: wp('3%'),
    borderColor: colors.orange_05,
    borderWidth: wp('0.2%'),
    paddingVertical: wp('3%'),
    marginVertical: wp('2%'),
  },
  passengerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    gap: wp('2%'),
    borderRadius: wp('3%'),
    borderColor: colors.grey_5DD,
    borderWidth: wp('0.2%'),
    paddingVertical: wp('3%'),
    marginVertical: wp('2%'),
  },
  verticalLine: {
    borderLeftWidth: wp('0.2%'),
    borderLeftColor: colors.black_28,
    height: '100%',
  },
  addIcon: {
    padding: '0.5%',
    borderRadius: wp('5%'),
    borderColor: colors.orange_05,
    borderWidth: 0.5,
  },
});

export default styles;
