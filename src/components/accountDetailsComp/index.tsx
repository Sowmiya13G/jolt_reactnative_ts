import React from 'react';
import {Text} from 'react-native';

// package
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import Spacer from '../../components/spacer';
import TextInputComponent from '../textInput';

// constant
import {baseStyle, colors, sizes} from '../../constant/theme';

import styles from './styles';

// Props for the component
type AccDetailsProps = {
  profileData: Record<string, string>;
  profileDataTitle: Record<string, string>;
  enableEdit: boolean;
  onChangeText: (key: string, value: string) => void;
};

const AccDetails: React.FC<AccDetailsProps> = ({
  profileData,
  profileDataTitle,
  enableEdit,
  onChangeText,
}) => {
  return (
    <>
      {Object.keys(profileDataTitle).map(key => {
        const typedKey = key as keyof typeof profileData;
        return (
          <React.Fragment key={typedKey}>
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size02, colors.grey_7C),
              ]}>
              {profileDataTitle[typedKey]}
            </Text>
            <Spacer height={hp('1%')} />
            {enableEdit ? (
              <>
                <TextInputComponent
                  value={profileData[typedKey]}
                  onChangeText={value => onChangeText(typedKey, value)}
                  CustomStyle={styles.input}
                />
                <Spacer height={hp('0.5%')} />
              </>
            ) : (
              <Text
                style={[
                  baseStyle.txtStyleOutInterRegular(
                    sizes.size2,
                    colors.black_00,
                  ),
                ]}>
                {profileData[typedKey]}
              </Text>
            )}
            <Spacer height={hp('2%')} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default AccDetails;
