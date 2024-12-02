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
  iconView: {
    marginRight: wp('3%'),
    backgroundColor: colors.white_FF,
    padding: wp('4.5%'),
    borderRadius: wp('2%'),
    ...baseStyle.cardElevationStyle(),
  },
  statusBarView: {
    marginHorizontal: wp('2%'),
  },
  marginHorizontal: {
    marginHorizontal: wp('5%'),
  },
  noDataContainer: {
    flex: 1,
  },
  rbSheetContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('5%'),
    position: 'relative',
  },
  textAlign: {
    textAlign: 'center',
  },
  horizontalLine: {
    height: wp('2%'),
    backgroundColor: colors.grey_F1,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    gap: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: heightPercentageToDP('2%'),
    marginHorizontal: '3%',
  },
  cancelIcon: {
    position: 'absolute',
    top: '4%',
    right: '8%',
  },
  button: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
  },
  textStyle: {
    ...baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.white_FF),
    marginLeft: wp('3%'),
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignSelf: {
    alignSelf: 'center',
  },
});

export default styles;
