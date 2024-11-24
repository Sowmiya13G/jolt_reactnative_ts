// Forgot password
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  subContainer: {
    marginHorizontal: wp('5%'),
    flex: 1,
    backgroundColor: colors.white_FF,
  },
  texAlign: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.orange_05,
    borderRadius: wp('3%'),
    paddingVertical: wp('4%'),
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.white_FB,
  },
  icon: {
    // backgroundColor: colors.orange_05,
    // left: wp('2%'),
    // alignItems:"center",
    // justifyContent:"center"
  },
});

export default styles;
