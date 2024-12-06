import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors} from '../../../constant/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: wp('2%'),
    marginHorizontal: wp('5%'),
  },
  row: {
    borderColor: colors.grey_5DD,
    borderWidth: 1,
    backgroundColor: colors.white_FAED,
    borderRadius: wp('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('3%'),
    paddingVertical: wp('2%'),
  },
  tabView: {
    borderBottomColor: colors.grey_5DD,
    borderBottomWidth: 1,
    width: '100%',
  },
  columnWrapper: {
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 10, 
  },
  iconContainer: {
    position: 'relative',
  },
  seeMoreButton: {
    position: 'absolute',
    bottom: '20%',
    right: '25%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
