import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import navigationService from '../../navigation/navigationService';

// Packages
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Components
import Button from '../../components/button';
import CustomSafeArea from '../../components/customSafeArea';
import DropDown from '../../components/dropDown';
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';
import DatePickerField from '../../components/datePickerField';

// Constants
import {SCREENS} from '../../constant';
import {genderData, registerScreenFields} from '../../constant/staticData';
import {strings} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// utils
import {validateRegisterForm} from '../../utils/validation';

// prop types
import {
  RegisterScreenFormData,
  RegisterScreenProps,
} from '../../propTypes/screenProps';
import {ValidationRegisterScreenFormErrors} from '../../propTypes/validationProps';

// SVG Imports
import CHECK from '../../assets/svg/check.svg';
import UN_CHECK from '../../assets/svg/unCheck.svg';

// Styles
import styles from '../styles/registerScreen';

// initial data
const initialData: RegisterScreenFormData = {
  firstName: '',
  middleName: '',
  gender: null,
  dob: '',
  email: '',
  phoneNo: '',
  check: undefined,
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({route}) => {
  // Props from route
  const {params} = route;

  // useState
  const [data, setData] = useState<RegisterScreenFormData>(initialData);
  const [errData, setErrData] = useState<RegisterScreenFormData>(initialData);

  // ---------------------------------------- set data functions ----------------------------------------

  const handleInputChange = (
    fieldName: keyof RegisterScreenFormData,
    value: string | object | null | boolean,
  ) => {
    setErrData({
      ...errData,
      [fieldName]: '',
    });
    setData({
      ...data,
      [fieldName]: value,
    });
  };

  // ---------------------------------------- Functionalities ----------------------------------------

  const handleSubmit = () => {
    const errors: ValidationRegisterScreenFormErrors =
      validateRegisterForm(data);
    if (Object.keys(errors).length > 0) {
      setErrData(errors);
    } else {
      navigationService.navigate(SCREENS.BOTTOM_TAB_NAV);
    }
  };

  // ---------------------------------------- render ui ----------------------------------------

  const renderInputFields = () => {
    return registerScreenFields.map((field, index) => (
      <View key={index}>
        {field.placeHolder == 'Gender' ? (
          <>
            <DropDown
              placeholder={field.placeHolder}
              dropdownData={genderData}
              value={genderData.find(item => item.value === data[field.key])}
              onSelectItem={item => handleInputChange(field.key, item)}
              onTypingEnd={() => {}}
              customStyle={
                !!errData[field.key as keyof RegisterScreenFormData]
                  ? styles.errorInput
                  : styles.dropDown
              }
              showErrText={!!errData[field.key as keyof RegisterScreenFormData]}
              errText={
                errData[field.key as keyof RegisterScreenFormData] ?? undefined
              }
            />
            <Spacer height={hp('2%')} />
          </>
        ) : field.key == 'dob' ? (
          <>
            <DatePickerField
              date={data[field.key as keyof RegisterScreenFormData] as string}
              placeholder={field.placeHolder}
              showErrText={!!errData[field.key as keyof RegisterScreenFormData]}
              errText={errData[field.key as keyof RegisterScreenFormData]}
              onChange={date => handleInputChange('dob', date)}
            />
            <Spacer height={hp('2%')} />
          </>
        ) : (
          <>
            <TextInputComponent
              value={data[field.key as keyof RegisterScreenFormData] as string}
              placeholder={field.placeHolder}
              icon={field.rightIcon || field.leftIcon}
              suffix={field.rightIcon ? true : false}
              placeholderTextColor={colors.grey_95}
              backgroundColor={colors.grey_7F}
              showErrText={!!errData[field.key as keyof RegisterScreenFormData]}
              errText={errData[field.key as keyof RegisterScreenFormData]}
              onChangeText={text => handleInputChange(field.key, text)}
              customInputStyle={field.rightIcon && styles.inputStyle}
              keyboardType={field.key === 'phoneNo' ? 'numeric' : undefined}
              maxLength={field.key === 'phoneNo' ? 10 : undefined}
              CustomStyle={[
                styles.input,
                !!errData[field.key as keyof RegisterScreenFormData] &&
                  styles.errorInput,
              ]}
            />
            <Spacer height={hp('2%')} />
          </>
        )}
      </View>
    ));
  };

  const renderBody = () => (
    <KeyboardAwareScrollView style={styles.subContainer}>
      <Spacer height={hp('7%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterSemiBold(sizes.size4, colors.black_00),
          styles.texAlign,
        ]}>
        {strings.createAcc}
      </Text>
      <Spacer height={hp('2%')} />
      <Text
        style={[
          baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black_00),
          styles.texAlign,
        ]}>
        {strings.joinUs}
      </Text>
      <Spacer height={hp('4%')} />
      {renderInputFields()}
      <Spacer height={hp('3%')} />
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleInputChange('check', !data?.check)}>
          {Boolean(data?.check) ? (
            <CHECK height={wp('4.5%')} width={wp('4.5%')} />
          ) : (
            <UN_CHECK height={wp('4.5%')} width={wp('4.5%')} />
          )}
        </TouchableOpacity>
        <Spacer width={wp('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_37),
            styles.texAlign,
          ]}>
          {strings.iAgree}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.blue_F4),
            ]}>
            {strings.policy}{' '}
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_37),
            ]}>
            {strings.and}{' '}
          </Text>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.blue_F4),
            ]}>
            {strings.terms}
          </Text>
        </Text>
      </View>
      {Boolean(errData?.check) && (
        <>
          <Spacer height={hp('1%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size011, colors.red),
            ]}>
            {errData?.check}
          </Text>
        </>
      )}
    </KeyboardAwareScrollView>
  );

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Spacer height={hp('2%')} />
        <Button
          onPress={handleSubmit}
          text={strings.register}
          textColor={colors.white_FF}
          buttonStyle={styles.button}
          textStyle={baseStyle.txtStyleOutInterMedium(
            sizes.size2,
            colors.white_FF,
          )}
        />
        <View style={styles.signInWithContainer}>
          <View style={styles.line} />
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size02, colors.grey_32),
            ]}>
            {strings.or}
          </Text>
          <View style={styles.line} />
        </View>
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size2, colors.grey_085),
            styles.texAlign,
          ]}>
          {strings.alreadyHaveAcc}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size2, colors.orange_05),
            ]}
            onPress={() => {
              navigationService.navigate(SCREENS.LOGIN);
            }}>
            {strings.login}
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.white_FF}>
      <FlatList
        data={['FORGOT_PASSWORD']}
        renderItem={() => renderBody()}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      {renderFooter()}
      <Spacer height={hp('5%')} />
    </CustomSafeArea>
  );
};

export default RegisterScreen;
