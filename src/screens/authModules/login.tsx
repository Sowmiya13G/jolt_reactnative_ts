import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, FlatList, Text, View} from 'react-native';
// navigation

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constants
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles

// styles
import styles from '../styles/loginScreen';

// svg
import BANNER from '../../assets/svg/banner.svg';
import GOOGLE from '../../assets/svg/google.svg';
import {validateForm} from '../../utils/validation';
import navigationService from '../../navigation/navigationService';
import {SCREENS} from '../../constant';

interface LoginScreenProps {
  route?: Record<string, unknown>;
}

interface DataState {
  email: string;
  password: string;
  phoneNo: string;
}

interface ErrorState {
  email: string;
  password: string;
  phoneNo: string;
}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  // useState
  const [data, setData] = useState<DataState>({
    email: '',
    password: '',
    phoneNo: '',
  });
  const [errData, setErrData] = useState<ErrorState>({
    email: '',
    password: '',
    phoneNo: '',
  });
  const [type, setType] = useState<number>(0);

  // Functions
  const login = (): void => {
    const validationResult = validateForm(data, type);

    if (validationResult.isValid) {
      navigationService.navigate(SCREENS.FORGOT_PASSWORD, {
        type: strings.forgotPasswordTitle,
      });
    } else {
      setErrData({
        email: validationResult.errors.email || '',
        password: validationResult.errors.password || '',
        phoneNo: validationResult.errors.phoneNo || '',
      });
    }
  };

  const loginWithMobNo = (): void => {
    type == 0 ? setType(1) : setType(0);
  };

  const moveAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    Animated.timing(moveAnim, {
      toValue: 150,
      duration: 3500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleInputChange = (field: keyof DataState) => (value: string) => {
    setErrData(prevErrData => ({
      ...prevErrData,
      [field]: '',
    }));

    setData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const renderBody = (): JSX.Element => {
    return (
      <>
        <View style={styles.banner}>
          <Animated.View
            style={[
              styles.banner,
              {
                transform: [{translateX: moveAnim}],
              },
            ]}>
            <BANNER style={{transform: [{scaleX: -1}]}} />
          </Animated.View>
        </View>
        <Spacer height={hp('2%')} />
        <View style={[styles.subContainer]}>
          <Text
            style={[
              baseStyle.txtStyleOutInterBold(sizes.size3, colors.black_22),
            ]}>
            {strings.loginWithUrAcc}
          </Text>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.grey_32),
            ]}>
            {strings.enjoyFeatures}
          </Text>
          <Spacer height={hp('2%')} />
          {type === 0 && (
            <>
              <TextInputComponent
                value={data.email}
                label={strings.emailAddress}
                placeholderTextColor={colors.grey_95}
                showErrText={errData.email ? true : false}
                errText={errData.email}
                labelColor={colors.grey_32}
                onChangeText={handleInputChange('email')}
              />
              <Spacer height={hp('2%')} />
              <TextInputComponent
                value={data.password}
                label={strings.password}
                placeholderTextColor={colors.grey_95}
                showErrText={errData.password ? true : false}
                errText={errData.password}
                labelColor={colors.grey_32}
                secureTextEntry
                onChangeText={handleInputChange('password')}
              />
            </>
          )}
          {type === 1 && (
            <TextInputComponent
              value={data.phoneNo}
              label={strings.phoneNo}
              placeholderTextColor={colors.grey_95}
              showErrText={errData.phoneNo ? true : false}
              errText={errData.phoneNo}
              labelColor={colors.grey_32}
              onChangeText={handleInputChange('phoneNo')}
              maxLength={10}
            />
          )}
          <Spacer height={hp('2%')} />
          {type === 0 && (
            <>
              <Text
                style={[
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size02,
                    colors.orange_05,
                  ),
                  styles.textAlign,
                ]}
                onPress={() => {
                  navigationService.navigate(SCREENS.FORGOT_PASSWORD, {
                    type: strings.forgotPasswordTitle,
                  });
                }}>
                {strings.forgotPassword}
              </Text>
              <Spacer height={hp('2%')} />
            </>
          )}
          <View style={styles.buttonView}>
            <Button
              onPress={() => login()}
              text={type === 0 ? strings.login : strings.sendOTP}
              buttonStyle={styles.loginBtn}
              textStyle={baseStyle.txtStyleOutInterBold(
                sizes.size2,
                colors.white_FF,
              )}
            />
            <Spacer height={hp('2%')} />
            <Button
              onPress={() => loginWithMobNo()}
              text={
                type === 0 ? strings.loginWithMobile : strings.loginWithEmail
              }
              textColor={colors.black_00}
              buttonStyle={styles.mobNoBtn}
              textStyle={baseStyle.txtStyleOutInterRegular(
                sizes.size2,
                colors.black_00,
              )}
            />
          </View>
          <View style={styles.signInWithContainer}>
            <View style={styles.line} />
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size02, colors.grey_7C),
              ]}>
              {strings.signInWith}
            </Text>
            <View style={styles.line} />
          </View>
          <Button
            onPress={() => console.log(`Login with ${strings.google}`)}
            text={strings.google}
            icon={GOOGLE}
            spaceBetween={widthPercentageToDP('2%')}
            textColor={colors.black_00}
            buttonStyle={styles.socialBtn}
            textStyle={baseStyle.txtStyleOutInterRegular(
              sizes.size2,
              colors.black_00,
            )}
          />

          <Spacer height={hp('2%')} />
        </View>
      </>
    );
  };

  // render UI
  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.green_3C}>
      <FlatList
        data={['LOGIN_SCREEN']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderBody}
      />
      <View style={styles.alignSelf}>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.grey_085),
          ]}>
          {strings.noAcc}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.orange_05),
            ]}
            onPress={() => {
              navigationService.navigate(SCREENS.REGISTER_SCREEN);
            }}>
            {strings.createAcc}
          </Text>
        </Text>
      </View>
      <Spacer height={hp('5%')} />
    </CustomSafeArea>
  );
};

export default LoginScreen;
