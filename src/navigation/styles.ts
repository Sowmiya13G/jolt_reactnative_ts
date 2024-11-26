import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../constant/theme';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white_FF,
    height: hp('9%'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation:3
    // ...baseStyle.cardElevationStyle(),
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height:  hp('9%'),
  },
  activeTab: {
    borderTopWidth: 3,
    borderColor: colors.orange_05,
  },
  tabLabel: {
    marginTop: hp('0.5%'),
  },
});

export default styles;
