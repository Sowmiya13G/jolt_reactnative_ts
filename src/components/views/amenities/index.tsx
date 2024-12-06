import React from 'react';
import { Text, View } from 'react-native';

// packages

// components

// constants
import { baseStyle, colors, sizes } from '../../../constant/theme';

// style
import {
  widthPercentageToDP
} from 'react-native-responsive-screen';
import { SvgProps } from 'react-native-svg';
import Spacer from '../../spacer';
import styles from './styles';

interface AmenitiesData {
  id: number;
  name: string;
  icon?: React.ElementType<SvgProps>;
}

interface AmenitiesDataViewProps {
  data: AmenitiesData[];
}

const AmenitiesDataView: React.FC<AmenitiesDataViewProps> = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((x, y) => {
        const IconComponent = x.icon;
        return (
            <View key={y} style={[styles.row]}>
              {IconComponent && (
                <IconComponent
                  width={widthPercentageToDP('5.5%')}
                  height={widthPercentageToDP('5.5%')}
                />
              )}
              <Spacer width={widthPercentageToDP('1%')} />
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size02,
                    colors.grey_55,
                  ),
                ]}>
                {x?.name}
              </Text>
            </View>
        );
      })}
    </View>
  );
};

export default AmenitiesDataView;
