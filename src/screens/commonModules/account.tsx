import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// navigation
import navigationService from '../../navigation/navigationService';

// components
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';
import styles from '../styles/account';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DOWNARROW from '../../assets/svg/downArrow.svg';
import EDIT from '../../assets/svg/edit.svg';
import TICK from '../../assets/svg/tick.svg';

import Spacer from '../../components/spacer';
import {account} from '../../constant/strings';

import PassengerList from '../../components/passengerListData';
import {AccountScreenProps, Passenger} from '../../propTypes/screenProps';
import AccDetails from '../../components/accountDetailsComp';

const data = [
  account.myAcc,
  account.addRoute,
  account.addPassenger,
  account.help || account.rateApp,
];
type ProfileData = {
  name: string;
  mail: string;
  gender: string;
  number: string;
};

const profileDataTitle: ProfileData = {
  name: account.yourName,
  mail: account.email,
  gender: account.gender,
  number: account.phoneNo,
};

const profileData: ProfileData = {
  name: account.name,
  mail: account.mail,
  gender: account.genderValue,
  number: account.number,
};

const AccountScreen: React.FC<AccountScreenProps> = () => {
  // props
  // use state
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [passengerData, setPassengerData] = useState<Passenger[]>([]);
  const [editableProfileData, setEditableProfileData] = useState(profileData);

  // ---------------------------------------- functionalities ----------------------------------------

  const handleExpand = (isExpanded: boolean, item: string) => {
    setSelectedType(isExpanded ? null : item);
    setEnableEdit(false);
  };

  const handleProfileChange = (key: string, value: string) => {
    setEditableProfileData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const removePassenger = (index: number) => {
    const updatedData = [...passengerData];
    updatedData.splice(index, 1);
    setPassengerData(updatedData);
  };

  const helpCenter = () => {};

  const rateApp = () => {};

  // ---------------------------------------- render ui ----------------------------------------

  const accDetails = () => {
    return (
      <>
        {Object.keys(profileDataTitle).map(key => {
          const typedKey = key as keyof ProfileData;
          return (
            <React.Fragment key={typedKey}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterMedium(
                    sizes.size02,
                    colors.grey_7C,
                  ),
                ]}>
                {profileDataTitle[typedKey]}
              </Text>
              <Spacer height={hp('1%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.black_00,
                  ),
                ]}>
                {profileData[typedKey]}
              </Text>
              <Spacer height={hp('2%')} />
            </React.Fragment>
          );
        })}
      </>
    );
  };

  const expandedView = (item: string) => {
    const isMyAcc = item == account.myAcc;
    const isAddRoute = item == account.addRoute;
    const isAddPassenger = item == account.addPassenger;

    const isMyAccEdit =
      Boolean(isMyAcc) && Boolean(enableEdit) && selectedType == account.myAcc;
    const isAddRouteEdit =
      Boolean(isAddRoute) &&
      Boolean(enableEdit) &&
      selectedType == account.addRoute;
    const isAddPassengerEdit =
      Boolean(isAddPassenger) &&
      Boolean(enableEdit) &&
      selectedType == account.addPassenger;

    return (
      <View>
        {Boolean(isMyAcc) ? (
          <>
            <AccDetails
              profileData={editableProfileData}
              profileDataTitle={profileDataTitle}
              enableEdit={enableEdit}
              onChangeText={handleProfileChange}
            />
          </>
        ) : Boolean(isAddRoute) ? (
          <>{Boolean(isAddRouteEdit) ? <></> : <></>}</>
        ) : (
          <View>
            <PassengerList
              passengerData={passengerData}
              onRemovePassenger={removePassenger}
            />
          </View>
        )}
      </View>
    );
  };

  const renderBody = ({item, index}: ListRenderItemInfo<string>) => {
    const isExpanded = selectedType === item;
    const notHelpOrRate = item == account.help || item == account.rateApp;

    return (
      <View style={styles.subContainer}>
        {!Boolean(notHelpOrRate) ? (
          <>
            <Spacer height={hp('2%')} />
            <View style={styles.cardView}>
              <View style={styles.rowView}>
                <Text
                  style={[
                    baseStyle.txtStyleOutInterSemiBold(
                      sizes.size2,
                      colors.grey_054,
                    ),
                  ]}>
                  {item}
                </Text>
                <TouchableOpacity
                  style={isExpanded ? styles.expanded : styles.iconView}
                  onPress={() => {
                    handleExpand(isExpanded, item);
                  }}>
                  <DOWNARROW />
                </TouchableOpacity>
              </View>
              {isExpanded && (
                <View style={styles.expandedView}>
                  <Spacer height={hp('1%')} />
                  <View style={styles.horizontalLineView} />
                  <Spacer height={hp('1%')} />
                  {expandedView(item)}
                </View>
              )}
            </View>
          </>
        ) : (
          <>
            <Spacer height={hp('2%')} />
            <View style={styles.cardView}>
              <TouchableOpacity onPress={() => helpCenter()}>
                <Text
                  style={[
                    baseStyle.txtStyleOutInterSemiBold(
                      sizes.size2,
                      colors.grey_054,
                    ),
                  ]}>
                  {account.help}
                </Text>
              </TouchableOpacity>
              <Spacer height={hp('1%')} />
              <View style={styles.horizontalLine} />
              <Spacer height={hp('1%')} />
              <TouchableOpacity onPress={() => rateApp()}>
                <Text
                  style={[
                    baseStyle.txtStyleOutInterSemiBold(
                      sizes.size2,
                      colors.grey_054,
                    ),
                  ]}>
                  {account.rateApp}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <CustomSafeArea style={styles.container} statusBarBGColor={colors.grey_F1}>
      <Header
        goBack={() => {
          navigationService.goBack();
        }}
        isRightIcon={Boolean(selectedType) ? true : false}
        rightIcon={Boolean(enableEdit) ? TICK : EDIT}
        title="Olivia Rhye"
        titleDisc="+6282198761234"
        headerStyle={{}}
        rightIconPress={() => setEnableEdit(true)}
      />
      <FlatList
        data={data}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </CustomSafeArea>
  );
};

export default AccountScreen;
