import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {baseStyle, colors, sizes} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white_FF,
    borderRadius: wp('7%'),
    paddingVertical: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '65%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: wp('5%'),
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
  line: {
    width: '100%',
    height: wp('2%'),
    backgroundColor: colors.white_F7,
    marginVertical: wp('4%'),
  },
  mapView: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('2%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
  inOutView: {
    borderRadius: wp('2%'),
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
    borderWidth: 0.5,
    width: '45%',
  },
  routeDataContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '80%',
    alignSelf: 'center',
  },
  placeDetails: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '80%',
  },
  delay: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('1%'),
    paddingVertical: wp('0.5%'),
    paddingHorizontal: wp('2%'),
    alignItems: 'center',
    width: '60%',
  },
  lastStop: {
    height: wp('3%'),
    width: wp('3%'),
    transform: [{rotate: '45deg'}],
  },
  dot: {
    ...baseStyle.circleView(wp('0.85%')),
  },
  dotView: {
    ...baseStyle.circleView(wp('0.85%')),
    backgroundColor: colors.grey_5DD,
  },
  horizontalLineView1: {
    borderWidth: 1,
    width: '1%',
    height: wp('1.2%'),
    marginVertical: wp('1%'),
  },
  horizontalLineView: {
    borderWidth: 1,
    width: '1%',
    height: wp('1.2%'),
    marginVertical: wp('1%'),
    borderColor: colors.grey_5DD,
  },
  connectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
  },
  place: {width: '95%', flex: 1},
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
    alignSelf: 'center',
  },
  commonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('5%'),
  },
  horizontalLine: {
    width: '90%',
    height: wp('0.5%'),
    backgroundColor: colors.white_F7,
    marginVertical: wp('2%'),
    alignSelf: 'center',
  },
  margin: {
    marginHorizontal: wp('4%'),
  },
  commonRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical: wp('2%'),
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('2%'),
    paddingVertical: wp('3%'),
    alignItems: 'center',
    width: wp('75%'),
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterMedium(sizes.size2, colors.white_FF),
  },
  duration: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('1%'),
    paddingVertical: wp('0.5%'),
    paddingHorizontal: wp('2%'),
    alignItems: 'center',
    // width: '60%',
  },
});

export default styles;
