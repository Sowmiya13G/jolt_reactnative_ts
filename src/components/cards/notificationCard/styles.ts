import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../../constant/theme';

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.white_FF,
    paddingVertical: '2%',
    paddingHorizontal: wp('3%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    paddingHorizontal: wp('3%'),
  },
});

export default styles;
