// Wallet Screen Styles
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey_F1,
  },
  amountView: {
    backgroundColor: colors.blue_f5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp('4%'),
    paddingHorizontal: wp('4%'),
    justifyContent: 'space-between',
  },
  bankCard: {
    backgroundColor: colors.white_FF,
    marginHorizontal: wp('5%'),
    paddingVertical: wp('4%'),
    paddingHorizontal: wp('4%'),
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  margin: {
    marginHorizontal: wp('5%'),
  },
  searchInput: {
    backgroundColor: colors.white_FF,
  },
  icon: {
    alignSelf: 'center',
  },
  cardContainer: {
    marginHorizontal: wp('5%'),
  },
  button: {
    borderColor: colors.orange_05,
    borderWidth: wp('0.3%'),
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    paddingHorizontal: wp('4%'),
    backgroundColor: colors.white_FF,
  },
  input: {
    width: '45%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
