// Select boarding points screen styles
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowWidth: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '47%',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
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
  },
  submitButtonTextStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.sizes2, colors.white_FF),
    marginLeft: wp('3%'),
  },
  textView: {width: '55%'},
  address: {width: '40%'},
  dragView: {
    position: 'relative',
  },
  shadowOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
    height: heightPercentageToDP('100%'),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
  },
});

export default styles;
