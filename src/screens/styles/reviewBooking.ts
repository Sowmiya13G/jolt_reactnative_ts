// Select boarding points screen styles
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  subContainer: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  paddingHorizontal: {
    paddingHorizontal: wp('7%'),
  },
  margin: {
    marginHorizontal: wp('5%'),
  },
  horizontalLine: {
    height: wp('0.3%'),
    backgroundColor: colors.grey_DB,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardView: {
    borderColor: colors.green_2F,
    borderWidth: wp('0.2%'),
    paddingHorizontal: '3%',
    paddingVertical: '5%',
    borderRadius: wp('3%'),
  },
  cardView1: {
    borderColor: colors.grey_DD,
    borderWidth: wp('0.2%'),
    paddingHorizontal: '3%',
    paddingVertical: '5%',
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowWithPadding: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp('4%'),
    gap: wp('2%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowWidth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '47%',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:wp("5%")
  },
  button: {
    backgroundColor: colors.green_2F,
    borderRadius: wp('3%'),
    paddingVertical: wp('2.5%'),
    alignItems: 'center',
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.size01, colors.white_FF),
    marginLeft: wp('3%'),
  },
  submitButton: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    width: '28%',
  },
  submitButtonTextStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.sizes2, colors.white_FF),
  },
  textView: {width: '55%'},
  address: {width: '40%'},
  dragView: {
    position: 'relative',
  },
  shadowOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
    height: hp('100%'),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
  },
  duration: {
    borderRadius: wp('1.5%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('0.5%'),
    backgroundColor: colors.grey_F1,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white_FF,
    paddingHorizontal: '2%',
  },
  tabContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white_FF,
    paddingHorizontal: wp('5%'),
    borderTopRightRadius: wp('7%'),
    borderTopLeftRadius: wp('7%'),
    top: -10,
    ...baseStyle.cardElevationStyle(),
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp('3%'),
  },
  tabButtonActive: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp('3%'),
    backgroundColor: colors.orange_29,
    paddingHorizontal: wp('1%'),
  },
  tabTitle: {
    marginTop: hp('0.5%'),
    fontSize: wp('3%'),
    color: colors.black_22,
  },
  activeTabTitle: {
    color: colors.orange_05,
  },
  priceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.grey_32,
    paddingVertical: wp('6%'),
    paddingHorizontal: wp('7%'),
  },
  offers: {
    borderRadius: wp('7%'),
    borderWidth: 0.5,
    borderColor: colors.white_FF,
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('4%'),
  },
  horizontalLineView: {
    height: wp('0.3%'),
    backgroundColor: colors.grey_DB,
    width: '15%',
  },
  passengerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: wp('40%'),
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
  policyContainer: {
    marginBottom: hp('2%'),
  },
  bulletPointContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: hp('0.5%'),
  },
  bulletPoint: {
    fontSize: sizes.size1,
    color: colors.grey_32,
    marginRight: 8,
    lineHeight: 20,
  },
  bulletText: {
    flex: 1, // Ensures text wraps properly
  },
  orangeView:{
    backgroundColor: colors.orange_05,
    padding:"2%",
    borderRadius:wp("2%")
  }
});

export default styles;