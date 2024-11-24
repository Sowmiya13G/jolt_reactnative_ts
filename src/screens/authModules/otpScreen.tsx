import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

// packages
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// styles
import styles from '../styles/otpScreen';

// navigation
import navigationService from '../../navigation/navigationService';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import AnimatedSuccessIcon from '../../components/successPopup';

// constants
import { SCREENS } from '../../constant';
import { ERROR_HANDLER_TEXT, strings } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

// SVG Imports
import BACK_ARROW from '../../assets/svg/arrowBack.svg';
import CANCEL from '../../assets/svg/cancel.svg';
import SUCCESS from '../../assets/svg/success1.svg';

// prop types
import { OTPScreenProps } from '../../propTypes/screenProps';

const OTPScreen: React.FC<OTPScreenProps> = ({route}) => {
  // Route params
  const {type} = route.params;

  // Local ref
  const otpRef = useRef<OTPInputView>(null);

  // Local state
  const [otp, setOTP] = useState<string>('');
  const [seconds, setSeconds] = useState<number>(300);
  const [err, setErr] = useState<boolean>(false);
  const [errTxt, setErrTxt] = useState<string>('');
  const [isPopup, setIsPopup] = useState<boolean>(false);

  // variables (screen type)
  const isForgotPassword = type === strings.forgotPasswordTitle;
  const isNewPassword = type === strings.createNewPassword;
  const isVerification = type == strings.phoneVerification;

  // ---------------- useEffects ------------------
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (otpRef.current) {
        // otpRef.current.focusField(0);
      }
    }, 250);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isPopup) {
      const timeoutId = setTimeout(() => {
        setIsPopup(false);
        navigationService.navigate(SCREENS.BOTTOM_TAB_NAV);
      }, 1300);

      return () => clearTimeout(timeoutId);
    }
  }, [isPopup]);

  // -------------- API Calls -----------------------
  const verifyOTP = () => {
    if (validate()) {
      setErr(false);
      setErrTxt('');
      setIsPopup(true);
    }
  };

  // --------------- Validation ----------------------
  const validate = (): boolean => {
    if (!otp) {
      setErr(true);
      setErrTxt(ERROR_HANDLER_TEXT.enterOtp);
      // setErrTxt(strings.incorrectCode);
      return false;
    }
    return true;
  };

  // ----------------- Functions ---------------------
  const resendOTP = () => {};

  //--------------- Render UI Components -------------------

  // Render body container
  const renderBody = () => (
    <>
      <Spacer height={hp('10%')} />
      <View>
        {isForgotPassword && (
          <>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size4,
                  colors.black_00,
                ),
                styles.texAlign,
              ]}>
              {strings.forgotPasswordTitle}
            </Text>
            <Spacer height={hp('2%')} />
          </>
        )}

        <Text
          style={[
            isForgotPassword
              ? baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_32)
              : baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.grey_32),
            styles.texAlign,
            styles.titleMargin,
          ]}>
          {isForgotPassword
            ? strings.forgotPasswordDisc
            : isVerification
            ? strings.enterCodeDisc
            : ''}
        </Text>
        <Spacer height={hp('2%')} />
      </View>
      <View>
        <OTPInputView
          style={styles.otp}
          pinCount={4}
          secureTextEntry
          codeInputFieldStyle={{
            ...styles.underlineStyleBase,
            borderColor: err ? colors.red : colors.grey_80,
          }}
          onCodeFilled={(code: string) => {
            setOTP(code);
          }}
          ref={otpRef}
          autoFocusOnLoad={false}
        />
        <Spacer height={hp('5%')} />
        <Button
          onPress={() => verifyOTP()}
          text={strings.verify}
          buttonStyle={styles.loginButton}
          textStyle={baseStyle.txtStyleOutInterSemiBold(
            sizes.size2,
            colors.white_FF,
          )}
        />
        <Spacer height={hp('3%')} />
        <View style={styles.alreadyTextView}>
          {isForgotPassword && (
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_80),
              ]}>
              {strings.didNtGetCode}{' '}
            </Text>
          )}
          <Text
            onPress={() => {
              seconds === 0 && resendOTP();
            }}
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.orange_05),
            ]}>
            {strings.resend}
          </Text>
        </View>
        {err && (
          <>
            <Spacer height={hp('10%')} />
            <View style={styles.errView}>
              <Text
                onPress={() => {}}
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.white_FF,
                  ),
                ]}>
                {errTxt}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setErr(false);
                  setErrTxt('');
                }}>
                <CANCEL height={wp('3%')} width={wp('3%')} />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </>
  );

  return (
    <CustomSafeArea style={styles.container}>
      {isPopup ? (
        <>
          <AnimatedSuccessIcon
            icon={SUCCESS}
            title={strings.verified}
            disc={strings.verifiedDisc}
          />
        </>
      ) : (
        <View style={styles.subContainer}>
          <Header
            goBack={() => navigationService.goBack()}
            title={
              isVerification
                ? strings.phoneVerification
                : isForgotPassword
                ? strings.forgotPasswordTitle
                : ''
            }
            color={colors.grey_32}
            leftIcon1={BACK_ARROW}
          />
          <FlatList
            data={['OTP_SCREEN']}
            renderItem={renderBody}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </CustomSafeArea>
  );
};

export default OTPScreen;
