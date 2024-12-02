import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { baseStyle, colors } from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: wp('5%'),
    position: 'relative',
    borderRadius: wp('3%'),
  },
  viewContainer: {
    borderColor: colors.grey_5DD,
    borderWidth: 1,
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
  busName: {
    display: 'flex',
    paddingHorizontal: wp('4%'),
    flexWrap: 'wrap',
    width: '70%',
    flex: 1,
    alignSelf: 'flex-start',
  },
  routeDetails: {
    alignSelf: 'center',
    flex: 1,
    marginHorizontal: wp('5%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  paddingHorizontal: {
    paddingHorizontal: '4%',
  },
  horizontalLineView: {
    borderColor: colors.grey_F1,
    borderWidth: 1,
    width: '90%',
  },
  horizontalLine1: {
    height: wp('0.4%'),
    width: '10%',
    borderWidth: 0.8,
    borderColor: colors.grey_D9,
  },
  horizontalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex:10,
  },
  circleView: {
    backgroundColor:colors.white_FF,
    padding: wp('3%'),
    borderRadius: wp('5%'),
  },
  leftCircle: {
    borderLeftWidth: 1,
    borderRightWidth:0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    left: 15,
    borderColor: colors.grey_5DD,

  },
  rightCircle: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    left: -15,
    borderRightWidth: 1,
    borderLeftWidth:0,
    borderColor: colors.grey_5DD,
  },

  horizontalLineView1: {
    borderWidth: 1,
    width: '1.5%',
    left: -15,
    height: wp('0.3%'),
    borderColor: colors.grey_D9,
    marginHorizontal: 3,
  },

  footerContainer: {
    paddingHorizontal: wp('6%'),
    width: '100%',
  },

  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: wp('6%'),
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
  time: {
    backgroundColor: colors.grey_F1,
    padding: '2%',
    borderRadius: wp('2%'),
  },
  seat: {
    backgroundColor: colors.orange_05,
    padding: '2%',
    borderRadius: wp('2%'),
  },
});

export default styles;
