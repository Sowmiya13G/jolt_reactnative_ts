import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    borderRadius: wp('1%'),
    width: '100%',
    height: wp('18%'),
    // borderBottomWidth: 3,
  },
  barItemView: {
    paddingHorizontal: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: wp('19%'),
    borderBottomWidth: 3,
  },
  columnWrapperStyle: {
    flexGrow: 1,
  },
  row: {
    paddingHorizontal: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 3,
    // marginHorizontal:wp("2%")
  },
  count: {
    borderRadius: 100 / 2,
    marginVertical: wp('1%'),
    height: wp('6%'),
    width: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('2%'),
  },
});

export default styles;
