import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, sizes} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    backgroundColor: colors.white_FAED,
    borderRadius: wp('3%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('7%'),
    paddingVertical: wp('3%'),
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
    flex: 1, 
  },
  paddingHorizontal: {
    paddingHorizontal: wp('7%'),
  },
});

export default styles;
