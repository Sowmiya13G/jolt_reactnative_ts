import React from 'react';
import {Text, View} from 'react-native';

// packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';
import {PoliciesData} from '../../../propTypes/componentProps';

// style
import styles from './styles';

interface PoliciesViewProps {
  data: PoliciesData[];
}

const PoliciesView: React.FC<PoliciesViewProps> = ({data}) => {
  return (
    <View style={styles.paddingHorizontal}>
      {data.map(policy => (
        <View key={policy.id}>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.grey_32),
            ]}>
            {policy.title}
          </Text>
          <Spacer height={hp('1%')} />
          {policy.points.map((point, index) => (
            <View key={index}>
              <View style={styles.bulletPointContainer}>
                <Text style={styles.bulletPoint}>{'\u2022'}</Text>
                <Text
                  style={[
                    baseStyle.txtStyleOutInterRegular(
                      sizes.size02,
                      colors.grey_32,
                    ),
                    styles.bulletText,
                  ]}>
                  {point}
                </Text>
              </View>
              <Spacer height={hp('1%')} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default PoliciesView;
