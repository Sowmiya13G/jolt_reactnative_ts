import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';

// packages
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// styles
import styles from './styles';

// components
import Spacer from '../spacer';

// constants
import { baseStyle, colors, sizes } from '../../constant/theme';

// utils
import { SvgProps } from 'react-native-svg';
import { formatDateLabel } from '../../utils/helperFunctions';

import BACK_ARROW from '../../assets/svg/arrowBack.svg';
import NOTIFICATION from '../../assets/svg/notification.svg';

type HeaderProps = {
  title?: string;
  color?: string;
  tintColor?: string;
  isHomeHeader?: boolean;
  isCommonHeader?: boolean;
  titleData?: {session?: string; user?: string};
  sessionColor?: string;

  // Left icon props
  isLeftIcon?: boolean;
  leftIcon1?: React.ElementType<SvgProps>;
  goBack?: () => void;
  leftIconView?: ViewStyle;

  // Right icon props
  isRightIcon?: boolean;
  rightIcon?: React.ElementType<SvgProps>;
  rightIconPress?: () => void;
  rightTintColor?: string;
  rightIconView?:ViewStyle;

  // Date props
  date?: string | null;
  titleDisc?: string;
  headerStyle?: ViewStyle | ViewStyle[];
};

const Header: React.FC<HeaderProps> = ({
  title,
  titleDisc,
  color = colors.black_00,
  tintColor = colors.white_FF,
  isHomeHeader = false,
  isCommonHeader = true,
  titleData,
  sessionColor = colors.black_00,

  // Left icon props
  isLeftIcon = true,
  leftIcon1 = BACK_ARROW,
  goBack,
  leftIconView,

  // Right icon props
  isRightIcon,
  rightIcon = BACK_ARROW,
  rightIconPress = () => {},
  rightTintColor = colors.black_00,
  rightIconView,

  headerStyle,

  // Date props
  date = null,
}) => {
  return (
    <View style={styles.rootContainer}>
      {/* ---------------------------- LEFT ICON ---------------------------- */}
      {Boolean(isLeftIcon) && (
        <TouchableOpacity
          onPress={() => {
            goBack?.();
          }}
          style={[styles.leftIconView, leftIconView]}>
          {Boolean(leftIcon1) ? (
            React.createElement(leftIcon1, {
              fill: tintColor,
              style: [styles.imageOnboarding],
            })
          ) : (
            <BACK_ARROW fill={tintColor} style={[styles.imageOnboarding]} />
          )}
        </TouchableOpacity>
      )}

      {/* ---------------------------- COMMON HEADER ---------------------------- */}
      {Boolean(isCommonHeader) && (
        <View style={[styles.titleText, headerStyle]}>
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, color),
              {textAlign: 'center'},
            ]}>
            {title}
          </Text>
          {Boolean(titleDisc) && (
            <>
              <Spacer height={heightPercentageToDP('0.5%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(sizes.size1, color),
                  {textAlign: 'center'},
                ]}>
                {titleDisc}
              </Text>
            </>
          )}
        </View>
      )}

      {/* ---------------------------- HOME SCREEN HEADER ---------------------------- */}
      {Boolean(isHomeHeader) && (
        <View style={{flex: 1}}>
          <Spacer height={heightPercentageToDP('2%')} />
          <View style={styles.titleView}>
            <View>
              <Spacer height={heightPercentageToDP('1%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(sizes.size2, sessionColor),
                ]}>
                {titleData?.session},
              </Text>
              <Spacer height={heightPercentageToDP('0.5%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(sizes.size3, color),
                ]}>
                {titleData?.user}
              </Text>
            </View>
            <TouchableOpacity style={styles.notificationView}>
              <NOTIFICATION />
            </TouchableOpacity>
          </View>
          <Spacer height={heightPercentageToDP('1.5%')} />
          <View style={styles.horizontalLine} />
        </View>
      )}

      {/* ---------------------------- RIGHT ICON ---------------------------- */}
      {Boolean(isRightIcon) && (
        <>
          {Boolean(date) &&
            (() => {
              const formattedDate = formatDateLabel(date || '', true);
              const [weekday, dayMonth] = formattedDate.split(', ');

              return (
                <View style={styles.column}>
                  <Text
                    style={[
                      baseStyle.txtStyleOutInterRegular(sizes.size01, color),
                    ]}>
                    {weekday || ''},
                  </Text>
                  <Text
                    style={[
                      baseStyle.txtStyleOutInterMedium(sizes.size01, color),
                    ]}>
                    {dayMonth || ''}
                  </Text>
                </View>
              );
            })()}

          {Boolean(isRightIcon) && (
            <>
              <Spacer width={widthPercentageToDP('1%')} />
              <TouchableOpacity
                onPress={() => {
                  rightIconPress?.();
                }}
                style={[styles.rightIconView1,rightIconView]}>
                {Boolean(rightIcon) ? (
                  React.createElement(rightIcon, {
                    fill: rightTintColor,
                    style: [styles.imageOnboarding],
                  })
                ) : (
                  <BACK_ARROW
                    fill={rightTintColor}
                    style={[styles.imageOnboarding]}
                  />
                )}
              </TouchableOpacity>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default Header;
