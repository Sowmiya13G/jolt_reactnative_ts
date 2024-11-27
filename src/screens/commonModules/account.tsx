import React, {useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

// navigation
import navigationService from '../../navigation/navigationService';

// components
import AccDetails from '../../components/accountDetailsComp';
import AddRoute from '../../components/addRoute';
import CustomSafeArea from '../../components/customSafeArea';
import Header from '../../components/header';
import PassengerList from '../../components/passengerListData';
import Spacer from '../../components/spacer';

// constants
import {profileData} from '../../constant/staticData';
import {account} from '../../constant/strings';
import {baseStyle, colors, sizes} from '../../constant/theme';

// prop types
import {
  AccountScreenProps,
  Passenger,
  ProfileData,
} from '../../propTypes/screenProps';

// SVG Imports
import DOWNARROW from '../../assets/svg/downArrow.svg';
import EDIT from '../../assets/svg/edit.svg';
import GREY_ARROW from '../../assets/svg/greyArrowBack.svg';
import TICK from '../../assets/svg/tick.svg';

// styles
import styles from '../styles/account';

const data = [
  account.myAcc,
  account.addRoute,
  account.addPassenger,
  account.help || account.rateApp,
];

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
          <AccDetails
            profileData={editableProfileData}
            profileDataTitle={profileData}
            enableEdit={enableEdit}
            onChangeText={handleProfileChange}
          />
        ) : Boolean(isAddRoute) ? (
          <AddRoute
            enableEdit={enableEdit}
            onEdit={() => setEnableEdit(true)}
          />
        ) : (
          <PassengerList
            passengerData={passengerData}
            onRemovePassenger={removePassenger}
          />
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
        headerStyle={styles.header}
        rightIconPress={() => setEnableEdit(!enableEdit)}
        leftIconView={styles.leftIconView}
        leftIcon1={GREY_ARROW}
        rightIconView={styles.rightIconView}
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
