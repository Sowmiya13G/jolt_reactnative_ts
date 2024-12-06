import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    backgroundColor: colors.white_FAED,
    borderRadius: wp('3%'),
    marginTop: wp('3%'),
    marginHorizontal: wp('5%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('7%'),
    paddingVertical: wp('3%'),
  },
  tabView: {
    borderBottomColor: colors.grey_5DD,
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default styles;
