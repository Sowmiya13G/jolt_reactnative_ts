import {Platform, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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

  size0: Platform.OS === 'ios' ? hp('1%') : hp('1.2%'),
  size01: Platform.OS === 'ios' ? hp('1.3%') : hp('1.5%'),
  size11: Platform.OS === 'ios' ? hp('1.35%') : hp('1.55%'),
  size1: Platform.OS === 'ios' ? hp('1.5%') : hp('1.7%'),
  size2: Platform.OS === 'ios' ? hp('1.8%') : hp('1.9%'),
  size3: Platform.OS === 'ios' ? hp('2%') : hp('2.2%'),
  size4: Platform.OS === 'ios' ? hp('2.3%') : hp('2.5%'),
  size5: Platform.OS === 'ios' ? hp('2.5%') : hp('2.7%'),
  size6: Platform.OS === 'ios' ? hp('2.8%') : hp('3%'),
  size7: Platform.OS === 'ios' ? hp('3%') : hp('3.2%'),
  size011: Platform.OS === 'ios' ? hp('1.4%') : hp('1.6%'),
  size02: Platform.OS === 'ios' ? hp('1.6%') : hp('1.8%'),
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
    ...(Platform.OS === 'ios' && {
      shadowColor: colors.black,
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
const colors: ColorPalette = {
  // Black variants
  black: '#000000',
  secondaryBlack: '#0F0D23',
  textBlack: '#222222',
  titleBlack: '#101828',

  white: '#FFFFFF',
  lightWhite: '#F9FAFB',
  ghostWhite: '#F9FAFB',

  cardShade: '#EAECF0',

  orange: '#FD6905',
  red: '#D92D20',

  // Grey variants
  grey: '#DDDDDD',
  borderLightGrey: '#D1D5DB',
  placeHolderColor: '#6C737F',
  textGrey: '#667085',
  borderGrey: '#D9D9D9',
  secondaryGrey: '#333232',
  placeHolderTextColor: '#697D95',
  lightGrey: '#6B7280',
  darkGrey: '#373737',
  textGrey1: '#7C7C7C',
  textGreyDark: '#505050',
  lineGrey: '#EDEEF1',
  boldBorderGrey: '#D0D5DD',
  adGrey: '#ABABAB',
  midGrey: '#555555',
  mid1Grey: '#868685',
  darkGrey2: '#475467',

  // Green variants
  lightGreen: '#24DD7D',
  green: '#3AB72F',
  basilGreen: '#8EB43C',
  paleGreen: '#CDEED6',
  pastelGreen: '#20463C',
  splashGreen: '#129C38',

  // Blue variants
  blue: '#0056F4',

  yellow: '#FDC400',

  transparent: 'transparent',
};

export {baseStyle, colors, fontFamily, sizes};
