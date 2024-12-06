import {Platform, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const isIOS = Platform.OS == 'ios';

type ColorPalette = Record<string, string>;
type FontFamily = Record<string, string>;
type Sizes = Record<string, number>;
type BaseStyle = {
  txtStyleOutInterRegular: (fontSize: number, fontColor: string) => TextStyle;
  txtStyleOutInterBold: (fontSize: number, fontColor: string) => TextStyle;
  txtStyleOutInterSemiBold: (fontSize: number, fontColor: string) => TextStyle;
  txtStyleOutInterMedium: (fontSize: number, fontColor: string) => TextStyle;
  cardElevationStyle: () => ViewStyle;
  circleView: (size: number) => ViewStyle;
  iconStyle: (size: number | string) => ImageStyle;
};

// Sizes
const sizes: Sizes = {
  // Global sizes
  bigFont: hp('3%'),
  mediumFont: hp('2%'),
  smallFont: hp('1%'),
  iconBigSize: hp('3%'),
  iconMediumSize: hp('2%'),
  iconSmallSize: hp('1%'),
  mediumFontText: hp('1.5%'),
  mediumFontTwoText: hp('2.5%'),

  size0: isIOS ? hp('1%') : hp('1.2%'),
  size01: isIOS ? hp('1.3%') : hp('1.5%'),
  size11: isIOS ? hp('1.35%') : hp('1.55%'),
  size1: isIOS ? hp('1.5%') : hp('1.7%'),
  size2: isIOS ? hp('1.8%') : hp('1.9%'),
  size3: isIOS ? hp('2%') : hp('2.2%'),
  size4: isIOS ? hp('2.3%') : hp('2.5%'),
  size5: isIOS ? hp('2.5%') : hp('2.7%'),
  size6: isIOS ? hp('2.8%') : hp('3%'),
  size7: isIOS ? hp('3%') : hp('3.2%'),
  size011: isIOS ? hp('1.4%') : hp('1.6%'),
  size02: isIOS ? hp('1.6%') : hp('1.8%'),
};

// Font families
const fontFamily: FontFamily = {
  fontInterRegular: 'Inter-Regular',
  fontInterBold: 'Inter-Bold',
  fontInterSemiBold: 'Inter-SemiBold',
  fontInterMedium: 'Inter-Medium',
};

// Base styles
const baseStyle: BaseStyle = {
  txtStyleOutInterRegular: (fontSize: number, fontColor: string) => ({
    fontFamily: 'Inter-Regular',
    fontSize,
    color: fontColor,
  }),
  txtStyleOutInterBold: (fontSize: number, fontColor: string) => ({
    fontFamily: 'Inter-Bold',
    fontSize,
    color: fontColor,
  }),
  txtStyleOutInterSemiBold: (fontSize: number, fontColor: string) => ({
    fontFamily: 'Inter-SemiBold',
    fontSize,
    color: fontColor,
  }),
  txtStyleOutInterMedium: (fontSize: number, fontColor: string) => ({
    fontFamily: 'Inter-Medium',
    fontSize,
    color: fontColor,
  }),
  cardElevationStyle: () => ({
    elevation: 3,
    ...(isIOS && {
      shadowColor: colors.black_00,
      shadowOpacity: 0.26,
      shadowOffset: {width: 1, height: 2},
      shadowRadius: 3,
    }),
  }),
  circleView: (size: number) => ({
    width: wp(size),
    height: wp(size),
    borderRadius: wp(size) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  iconStyle: (size: number | string) => ({
    width: wp(size),
    height: wp(size),
    resizeMode: 'contain',
  }),
};

// Colors
const colors = {
  //black variants
  black_00: '#000000',
  black_23: '#0F0D23',
  black_22: '#222222',
  black_28: '#101828',
  black_F40: '#042F40',
  black_937: '#1F2937',

  white_FF: '#FFFFFF',
  white_FB: '#F9FAFB',
  white_F8: '#F8F8F8',
  white_F3: '#F0F1F3',
  white_FAED:"#FAFAFAED",

  orange_05: '#FD6905',
  orange_27: '#E75527',
  orange_20: '#EF6820',
  orange_29: '#EF682029',
  red: '#D92D20',
  red_00: '#E70000',
  red_18:"#B42318",

  // grey variants
  grey_AB: '#ABABAB',
  grey_DD: '#DDDDDD',
  grey_DB: '#D1D5DB',
  grey_D9: '#D9D9D9',
  grey_F0: '#EAECF0',
  grey_F1: '#EDEEF1',
  grey_7F: '#6C737F',
  grey_95: '#697D95',
  grey_32: '#333232',
  grey_37: '#373737',
  grey_50: '#505050',
  grey_55: '#555555',
  grey_67: '#475467',
  grey_7C: '#7C7C7C',
  grey_80: '#6B7280',
  grey_085: '#667085',
  grey_685: '#868685',
  grey_5DD: '#D0D5DD',
  grey_054: '#344054',
  grey_7D: '#7D7D7D',
  grey_E1: '#E1E1E1',
  grey_C7: '#C7C7C7',
  grey_563: '#4B5563',

  // green variants
  green_7D: '#24DD7D',
  green_2F: '#3AB72F',
  green_3C: '#8EB43C',
  green_D6: '#CDEED6',
  green_63C: '#20463C',
  green_38: '#129C38',
  green_C1: '#BEE0C1',

  // blue variants
  blue_F4: '#0056F4',
  blue_f5: '#274FF5',

  yellow_00: '#FDC400',
  yellow_47: '#F8D247',

  pink_68: '#F63D68',

  transparent: 'transparent',
};

export {baseStyle, colors, fontFamily, sizes};
