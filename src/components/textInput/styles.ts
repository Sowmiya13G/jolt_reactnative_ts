import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  textInputView: {
    width: '100%',
    height: hp('6%'),
    flexDirection: 'row',
    borderRadius: wp('1%'),
    alignSelf: 'center',
    paddingRight: wp('2%'),
    paddingLeft: wp('2%'),
    alignItems: 'center',
    borderColor: colors.grey_32,
    borderWidth: 1,
  },
  ro_textInputView: {
    borderColor: colors.grey_32,
    borderRadius: wp('2'),
    borderWidth: 1,
    width: '100%',
  },
  icon: {
    width: wp('5.5%'),
    height: wp('5.5%'),
    resizeMode: 'contain',
    flex: 0.13,
  },
  rightIcon:{
    ...baseStyle.iconStyle("5%"),
    resizeMode: 'contain',
    flex: 0.13,
  },
  textInput: {
    height: '100%',
    borderColor: colors.grey_32,
  },
  secureTextIconView: {
    flex: 0.13,
  },
  secureTextIcon: {
    // width: wp('6%'),
    // height: wp('6%'),
    resizeMode: 'contain',
    alignItems:"center",
    justifyContent:"center"
  },

  errText: {
    textAlign: 'left',
    width: '100%',
  },
  label: {
    marginHorizontal: wp('2%'),
  },
});

export default styles;
