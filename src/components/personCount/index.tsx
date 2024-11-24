import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// packages
import { widthPercentageToDP } from 'react-native-responsive-screen';

// components
import Spacer from '../spacer';

// constants
import { dashboard } from '../../constant/strings';
import { baseStyle, colors, sizes } from '../../constant/theme';

// styles
import styles from './styles';

import MINUS from '../../assets/svg/minus.svg';
import PERSON from '../../assets/svg/person.svg';
import PLUS from '../../assets/svg/plus.svg';
import TEAM from '../../assets/svg/team.svg';

// Define the prop types
interface PersonCountProps {
  count: number;
  setCount: (newCount: number) => void;
}

const PersonCount: React.FC<PersonCountProps> = ({count, setCount}) => {
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.row}>
        {count > 1 ? <TEAM /> : <PERSON />}

        <Spacer width={widthPercentageToDP('2%')} />
        <Text
          style={[
            baseStyle.txtStyleOutInterMedium(sizes.size3, colors.black_00),
          ]}>
          {count}{' '}
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size3, colors.black_00),
            ]}>
            {count > 1 ? dashboard.persons : dashboard.person}
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={decreaseCount} style={styles.button}>
          <MINUS />
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <TouchableOpacity onPress={increaseCount} style={styles.button}>
          <PLUS />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonCount;
