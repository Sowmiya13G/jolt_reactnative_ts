import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// package
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../components/spacer';
import TextInputComponent from '../../components/textInput';

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';
import {account} from '../../constant/strings';

// SVG imports
import MALE from '../../assets/svg/male.svg';
import FEMALE from '../../assets/svg/female.svg';
import ADD from '../../assets/svg/plus.svg';
import TRASH from '../../assets/svg/trash.svg';

// styles
import styles from './styles';

interface Passenger {
  name: string;
  age: string;
  gender: string;
}
interface PassengerListProps {
  passengerData: Passenger[];
  onRemovePassenger: (index: number) => void;
}

const PassengerList: React.FC<PassengerListProps> = ({
  passengerData,
  onRemovePassenger,
}) => {
  const [newPassengerName, setNewPassengerName] = useState('');
  const [newPassengerAge, setNewPassengerAge] = useState('');
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const isMale = selectedGender == 'male';
  const isFemale = selectedGender == 'female';

  const handleAddPassenger = () => {
    if (newPassengerName && newPassengerAge && selectedGender) {
      const newPassenger = {
        name: newPassengerName,
        age: newPassengerAge,
        gender: selectedGender,
      };
      passengerData.push(newPassenger);
      setNewPassengerName('');
      setNewPassengerAge('');
      setSelectedGender(null);
    }
  };

  return (
    <>
      <View style={styles.passengerView}>
        <View style={styles.input}>
          <TextInputComponent
            value={newPassengerName}
            onChangeText={text => {
              const name = text.replace(/[^a-zA-Z\s]/g, '');
              setNewPassengerName(name);
            }}
            placeholderTextColor={colors.grey_95}
            placeholder={account.fullName}
          />
        </View>
        <View style={styles.ageInput}>
          <TextInputComponent
            value={newPassengerAge}
            onChangeText={setNewPassengerAge}
            placeholderTextColor={colors.grey_95}
            placeholder={account.age}
            maxLength={3}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={{
            borderColor: isMale ? colors.green_2F : colors.grey_DD,
            borderWidth: 1,
            padding: wp('2.5%'),
            borderRadius: wp('2%'),
            backgroundColor: isMale ? colors.green_C1 : colors.transparent,
          }}
          onPress={() => setSelectedGender('male')}>
          <MALE height={wp('7.5%')} width={wp('7%')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: isFemale ? colors.green_2F : colors.grey_DD,
            borderWidth: 1,
            padding: wp('2.5%'),
            borderRadius: wp('2%'),
            backgroundColor: isFemale ? colors.green_C1 : colors.transparent,
          }}
          onPress={() => setSelectedGender('female')}>
          <FEMALE height={wp('7.5%')} width={wp('7%')} />
        </TouchableOpacity>
      </View>
      <Spacer height={hp('2%')} />

      <TouchableOpacity
        style={styles.addPassengerBtn}
        onPress={handleAddPassenger}>
        <View style={styles.addIcon}>
          <ADD height={wp('5%')} width={wp('5%')} fill={colors.orange_05} />
        </View>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.orange_05),
          ]}>
          {account.addPassenger}
        </Text>
      </TouchableOpacity>

      <Spacer height={hp('1%')} />

      {passengerData.map((passenger, index) => (
        <View style={styles.passengerItem} key={index}>
          <View style={{width: '70%'}}>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size02,
                  colors.black_28,
                ),
              ]}>
              {passenger?.name}
            </Text>
            <Spacer height={hp('1%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size1, colors.grey_085),
              ]}>
              {passenger?.gender},{passenger?.age}
            </Text>
          </View>
          <View style={styles.verticalLine} />
          <TouchableOpacity onPress={() => onRemovePassenger(index)}>
            <TRASH height={wp('6%')} width={wp('5%')} fill={colors.orange_05} />
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default PassengerList;
