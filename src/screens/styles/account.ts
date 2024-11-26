// Account Screen
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
  },
  button: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
  },
  input: {
    width: wp('35%'),
  },
  ageInput: {
    width: wp('15%'),
  },
  passengerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: wp('2%'),
  },
  inputStyle: {
    paddingLeft: wp('5%'),
  },
  signInWithContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%'),
  },
  line: {
    flex: 1,
    height: wp('0.1%'),
    backgroundColor: colors.grey_32,
    marginHorizontal: wp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardView: {
    paddingHorizontal: wp('4%'),
    backgroundColor: colors.white_FF,
    paddingVertical: wp('6%'),
    borderRadius: wp('3%'),
  },
  check: {
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'cover',
  },
  unCheck: {
    ...baseStyle.iconStyle('4%'),
    resizeMode: 'contain',
  },
  dropDown: {
    backgroundColor: colors.white_FB,
    borderColor: colors.grey_DB,
  },
  horizontalLine: {
    height: wp('0.5%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: wp('2%'),
  },
  horizontalLineView: {
    height: wp('2%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
    marginVertical: wp('2%'),
  },
  iconView: {
    marginRight: '3%',
  },
  expanded: {
    marginRight: '3%',
    transform: [{rotate: '180deg'}],
  },
  expandedView: {
    marginTop: 10,
    borderRadius: 5,
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
});

export default styles;
