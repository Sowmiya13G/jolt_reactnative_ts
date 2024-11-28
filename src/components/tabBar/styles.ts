import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white_FF,
    borderRadius: wp('1%'),
    width: '100%',
    padding: wp('2%'),
    height: wp('18%'),
  },
  barItemView: {
    paddingHorizontal: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomWidth: 3,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
});

export default styles;
