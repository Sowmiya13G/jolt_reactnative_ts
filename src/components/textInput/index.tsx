import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';

// packages
import {SvgProps} from 'react-native-svg';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

// constants
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

import EYE from '../../assets/svg/eye.svg';
import EYE_CROSS from '../../assets/svg/eyeCross.svg';

// styles

import styles from './styles';

interface TextInputComponentProps
  extends Omit<TextInputProps, 'autoCapitalize' | 'keyboardType'> {
  icon?: React.ElementType<SvgProps>;
  label?: string;
  error?: boolean;
  verification?: boolean;
  backgroundColor?: string;
  labelColor?: string;
  labelTextSize?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  defaultValue?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onSubmit?: () => void;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  editable?: boolean;
  CustomStyle?: object;
  customIconStyle?: object;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center' | undefined;
  suffix?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  errText?: string;
  showErrText?: boolean;
  customErrTextStyle?: object;
  CustomStyle1?: object;
  isReq?: boolean;
  viewType?: boolean;
  isDisabled?: boolean;
  onTypingEnd?: () => void;
  customInputStyle?: object;
  onFocus?: () => void;
  multiLine?: boolean;
}

const TextInputComponent: React.FC<TextInputComponentProps> = props => {
  const {
    icon: Icon,
    label,
    error,
    verification,
    backgroundColor,
    labelColor = colors.grey_32,
    labelTextSize = '1.8%',
    placeholder = strings.enterHere,
    placeholderTextColor = colors.grey_95,
    defaultValue,
    maxLength,
    keyboardType,
    value,
    onSubmit,
    onChangeText,
    secureTextEntry = false,
    editable = true,
    CustomStyle,
    customIconStyle,
    textAlignVertical,
    suffix = false,
    autoCapitalize,
    errText,
    showErrText,
    customErrTextStyle,
    CustomStyle1,
    isReq,
    viewType,
    isDisabled = false,
    onTypingEnd,
    customInputStyle,
    onFocus,
    multiLine = false,
  } = props;

  const [show, setShow] = useState(secureTextEntry);

  const handleShow = (visibility: boolean) => {
    setShow(visibility);
  };

  return (
    <>
      {label && (
        <>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size2, labelColor),
            ]}>
            {label}
          </Text>
          <Spacer height={hp('1%')} />
        </>
      )}
      <View
        style={[
          multiLine ? styles.textInputViewMultiline : styles.textInputView,
          styles.ro_textInputView,
          {
            ...(Boolean(errText)
              ? {borderColor: colors.red}
              : {borderColor: colors.grey_DD}),
            backgroundColor: backgroundColor,
          },
          CustomStyle,
        ]}>
        {Boolean(Icon) && !suffix && (
          <View style={[styles.icon]}>
            {Icon && <Icon style={customIconStyle} />}
          </View>
        )}

        <TextInput
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black_00),
            styles.textInput,
            {flex: Boolean(Icon) ? 0.87 : 1},
            customInputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          defaultValue={defaultValue}
          maxLength={maxLength}
          keyboardType={keyboardType}
          value={value}
          onSubmitEditing={onSubmit}
          onChangeText={text => {
            if (onChangeText) {
              onChangeText(text);
            }
          }}
          secureTextEntry={show}
          editable={editable}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
          multiline={multiLine}
        />
        {Boolean(Icon) && suffix && (
          <View style={styles.icon}>{Icon && <Icon />}</View>
        )}

        {secureTextEntry && (
          <TouchableOpacity
            style={styles.secureTextIconView}
            onPress={() => handleShow(!show)}>
            <View style={styles.secureTextIcon}>
              {show ? (
                <EYE_CROSS height={wp('5.5%')} width={wp('5.5%')} />
              ) : (
                <EYE height={wp('5.5%')} width={wp('5.5%')} />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
      {showErrText && Boolean(errText) && (
        <>
          <Spacer height={hp('0.5%')} />
          <Text
            style={[
              viewType
                ? baseStyle.txtStyleOutInterMedium(sizes.size01, colors.red)
                : baseStyle.txtStyleOutInterRegular(sizes.size1, colors.red),
              !viewType && styles.errText,
              customErrTextStyle,
              viewType && styles.label,
            ]}>
            {viewType && '*'} {errText}
          </Text>
        </>
      )}
    </>
  );
};

export default TextInputComponent;
