import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

//packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constant
import {SCREENS} from '../../constant';
import {iconPathURL} from '../../constant/iconpath';
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// styles
import {
  DataState,
  ErrorState,
  ForgotPasswordScreenProps,
} from '../../propTypes/formProps';
import styles from '../styles/forgotPassword';

import LOCK from '../../assets/svg/lock.svg';
import EMAIL from '../../assets/svg/mail.svg';
import {validateFormPassword} from '../../utils/validation';

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({route}) => {
  const {type} = route.params;

  const [data, setData] = useState<DataState>({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errData, setErrData] = useState<ErrorState>({
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const isForgotPasswordScreen = type === strings.forgotPasswordTitle;
  const isNewPasswordScreen = type === strings.createNewPassword;

  const handleChange = (field: keyof DataState) => (text: string) => {
    setErrData(prevErrData => ({
      ...prevErrData,
      [field]: '',
    }));

    setData(prevData => ({
      ...prevData,
      [field]: text,
    }));
  };

  // Functions
  const handleSubmit = (): void => {
    const validationResult = validateFormPassword(data, type);
    console.log("🚀 ~ handleSubmit ~ validationResult:", validationResult)

    if (validationResult.isValid) {
      console.log("🚀 ~ handleSubmit ~ validationResult.isValid:", validationResult.isValid)
      isForgotPasswordScreen
        ? navigationService.navigate(SCREENS.OTP_SCREEN, {
            type: strings.forgotPasswordTitle,
          })
        : navigationService.navigate(SCREENS.REGISTER_SCREEN, {});
    } else {
      setErrData({
        email: validationResult.errors.email || '',
        newPassword: validationResult.errors.newPassword || '',
        confirmPassword: validationResult.errors.confirmPassword || '',
      });
    }
  };

  const renderBody = () => (
    <View style={styles.subContainer}>
      <Spacer height={hp('10%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size4, colors.black_22),
          styles.texAlign,
        ]}>
        {isForgotPasswordScreen
          ? strings.forgotPasswordTitle
          : strings.createNewPassword}
      </Text>
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black_22),
          styles.texAlign,
        ]}>
        {isForgotPasswordScreen
          ? strings.forgotPasswordDisc
          : strings.enterDifPassword}
      </Text>
      <Spacer height={hp('2%')} />
      {isForgotPasswordScreen ? (
        <TextInputComponent
          value={data?.email}
          placeholderTextColor={colors.grey_95}
          showErrText={errData.email ? true : false}
          errText={errData?.email}
          placeholder={strings.email}
          icon={EMAIL}
          CustomStyle={styles.input}
          customIconStyle={styles.icon}
          onChangeText={handleChange('email')}
        />
      ) : (
        <>
          <TextInputComponent
            value={data?.newPassword}
            placeholderTextColor={colors.grey_95}
            errText={errData?.newPassword}
            placeholder={strings.password}
            CustomStyle={styles.input}
            showErrText={errData.newPassword ? true : false}
            backgroundColor={colors.grey_7F}
            icon={LOCK}
            onChangeText={handleChange('newPassword')}
          />
          <Spacer height={hp('2%')} />
          <TextInputComponent
            value={data?.confirmPassword}
            placeholderTextColor={colors.grey_95}
            errText={errData?.confirmPassword}
            placeholder={strings.confirmPassword}
            CustomStyle={styles.input}
            showErrText={errData.confirmPassword ? true : false}
            backgroundColor={colors.grey_7F}
            icon={LOCK}
            onChangeText={handleChange('confirmPassword')}
          />
        </>
      )}
      <Spacer height={hp('3%')} />
      <Button
        onPress={() => {
          handleSubmit();
        }}
        text={isForgotPasswordScreen ? strings.sendCode : strings.resetPassword}
        textColor={colors.white_FF}
        buttonStyle={styles.button}
        textStyle={baseStyle.txtStyleOutInterMedium(
          sizes.size2,
          colors.white_FF,
        )}
      />
    </View>
  );

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        title={strings.forgotPasswordTitle}
        color={colors.grey_32}
        leftIcon1={iconPathURL.backArrow}
      />
      <FlatList
        data={['FORGOT_PASSWORD']}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderBody}
      />
    </CustomSafeArea>
  );
};

export default ForgotPasswordScreen;
