import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('5%'),
    position: 'relative',
  },
  viewContainer: {
    backgroundColor: colors.white_FF,
    borderRadius: wp('5%'),
    paddingVertical: '4%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  statusView: {
    position: 'absolute',
    right: 0,
    top: wp('4%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('1.5%'),
    borderTopLeftRadius: wp('4%'),
    borderBottomLeftRadius: wp('4%'),
  },

  routeDetails: {
    paddingHorizontal: wp('5%'),
    alignSelf: 'center',
    flex: 1,
    marginHorizontal: wp('5%'),
  },
  paddingHorizontal: {
    paddingHorizontal: '4%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  imageIcon: {
    padding: wp('5%'),
    backgroundColor: colors.grey_E1,
    borderRadius: wp('2%'),
  },

  smallEclipse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: colors.grey_D9,
  },
  horizontalLine1: {
    height: wp('0.4%'),
    width: '10%',
    borderStyle: 'dashed',
    borderWidth: 0.8,
    borderColor: colors.grey_D9,
  },

  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  circleView: {
    backgroundColor: colors.grey_F1,
    padding: wp('5%'),
    borderRadius: wp('5%'),
  },
  leftCircle: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    left: -15,
  },
  rightCircle: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    left: -15,
  },
  horizontalLineView1: {
    borderWidth: 1,
    width: '87%',
    left: -15,
    height: wp('0.4%'),
    borderStyle: 'dashed',
    borderColor: colors.grey_D9,
  },

  passengerData: {
    paddingHorizontal: wp('6%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  footerContainer: {
    paddingHorizontal: wp('6%'),
    width: '100%',
  },
  horizontalLineView: {
    height: wp('0.5%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
  },
  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addReview: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('2.9%'),
    width: wp('35%'),
    alignItems: 'center',
    gap: wp('0.5%'),
  },
  bookAgain: {
    backgroundColor: colors.white_FB,
    borderColor: colors.grey_DD,
    borderWidth: 1,
    borderRadius: wp('3%'),
    paddingVertical: wp('3%'),
    alignItems: 'center',
    width: wp('35%'),
  },

  texAlign: {
    textAlign: 'center',
  },
  image: {
    ...baseStyle.iconStyle('40%'),
    resizeMode: 'contain',
  },
  rowWithPadding: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  textView: {
    borderRadius: wp('1%'),
    borderWidth: 1,
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('0.5%'),
    marginRight: wp('1%'),
    backgroundColor: colors.white_FB,
    borderColor: colors.grey_F1,
  },
});

export default styles;
