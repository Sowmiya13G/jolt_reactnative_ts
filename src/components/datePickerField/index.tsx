import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';

// packages
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// components
import CalenderComponent from '../calender';
import Spacer from '../spacer';

// constant
import {baseStyle, colors, sizes} from '../../constant/theme';

// SVG Imports
import CALENDAR from '../../assets/svg/calender.svg';

//styles
import styles from './styles';

interface DatePickerFieldProps {
  placeholder?: string;
  date: string | null;
  showErrText?: boolean;
  editable?: boolean;
  errText?: string;
  CustomStyle?: ViewStyle;
  onChange: (selectedDate: string) => void;
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  placeholder = 'Select Date',
  date,
  showErrText,
  editable = true,
  errText,
  CustomStyle,
  onChange,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(date);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  useEffect(() => {
    setSelectedDate(selectedDate);
  }, [selectedDate]);

  const handleDateSelect = (selectedDate: string) => {
    setSelectedDate(selectedDate);
    setShowCalendarModal(false);
    onChange(selectedDate);
  };

  return (
    <TouchableOpacity onPress={() => setShowCalendarModal(true)}>
      <View
        style={[
          styles.textInputView,
          styles.ro_textInputView,
          {
            ...(Boolean(errText)
              ? {borderColor: colors.red}
              : {borderColor: colors.grey_DD}),
          },
          CustomStyle,
        ]}>
        <TextInput
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black_00),
            styles.textInput,
          ]}
          placeholder={placeholder}
          placeholderTextColor={colors.grey_95}
          value={selectedDate ?? ''}
          editable={editable}
        />
        <View style={styles.icon}>{<CALENDAR />}</View>
      </View>
      <CalenderComponent
        date={selectedDate}
        setDate={handleDateSelect}
        showCalenderModal={showCalendarModal}
        setShowCalenderModal={setShowCalendarModal}
      />
      {showErrText && errText && (
        <>
          <Spacer height={hp('0.5%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size1, colors.red),
              styles.label,
            ]}>
            {errText}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default DatePickerField;
