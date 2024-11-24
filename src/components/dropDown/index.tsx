import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

// styles
import styles from './styles';

// components
import Spacer from '../spacer';

// constants
import {iconPathURL} from '../../constant/iconpath';
import {baseStyle, colors, sizes} from '../../constant/theme';

import DROPDOWN from '../../assets/svg/downArrow.svg';

interface DropdownItem {
  label: string;
  value: string | number;
}

interface DropDownProps {
  title?: string;
  placeholder: string;
  dropdownIcon?: string;
  value?: DropdownItem | DropdownItem[] | null;
  onTypingEnd?: (value: string) => void;
  dropdownData: DropdownItem[];
  toDisableOtherScroll?: (disabled: boolean) => void;
  enableLocalSearch?: boolean;
  onSelectItem?: (item: DropdownItem) => void;
  editable?: boolean;
  noDataText?: string;
  customLabelStyle?: StyleProp<TextStyle>;
  multiSelect?: boolean;
  customDropdownContainerStyle?: StyleProp<ViewStyle>;
  errText?: string;
  showErrText?: boolean;
  onDropdownOpen?: () => void;
  noData?: (noData: number) => void;
  customStyle?: StyleProp<ViewStyle>;
  customTitleStyle?: StyleProp<ViewStyle>;
  viewType?: boolean;
  isReq?: boolean;
  isEdit?: boolean;
  isIcon?: boolean;
  edit?: boolean;
}

const DropDown: React.FC<DropDownProps> = ({
  title,
  placeholder,
  value = null,
  onTypingEnd,
  dropdownData,
  toDisableOtherScroll,
  enableLocalSearch = false,
  onSelectItem,
  editable = true,
  noDataText = 'No data found!',
  customLabelStyle,
  multiSelect,
  customDropdownContainerStyle,
  errText,
  showErrText,
  onDropdownOpen,
  noData,
  customStyle,
  customTitleStyle,
  viewType,
  isReq = false,
  isEdit = true,
  isIcon = true,
  edit = true,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [text, setText] = useState<string>(
    Array.isArray(value)
      ? value.map(item => item.label).join(', ')
      : value?.label || '',
  );

  const [searchedDropdownData, setSearchedDropdownData] =
    useState<DropdownItem[]>(dropdownData);

  // Timeout for typing
  let typingTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, []);

  useEffect(() => {
    if (toDisableOtherScroll) toDisableOtherScroll(showDropdown);
  }, [showDropdown, toDisableOtherScroll]);

  useEffect(() => {
    setSearchedDropdownData(dropdownData);
  }, [dropdownData]);

  useEffect(() => {
    if (Array.isArray(value)) {
      setText(value.map(item => item.label).join(', '));
    } else {
      setText(value?.label || '');
    }
  }, [value]);

  const handleTypingEnd = (value: string) => {
    if (onTypingEnd) onTypingEnd(value);
  };

  const searchFilter = (text: string) => {
    let data: DropdownItem[] = [];
    if (text) {
      const newData = dropdownData.filter(item =>
        item.label?.toUpperCase().includes(text.toUpperCase()),
      );
      setSearchedDropdownData(newData);
      data = newData;
    } else {
      setSearchedDropdownData(dropdownData);
      data = dropdownData;
    }

    if (noData) noData(data.length <= 0 ? 1 : 0);
  };

  return (
    <>
      <View
        style={[
          viewType ? styles.fields : styles.container,
          viewType && Boolean(errText) && styles.errorField,
          customStyle,
        ]}>
        {viewType && <Spacer height={hp('0.8%')} />}
        {title && (
          <>
            <Text
              style={[
                viewType
                  ? baseStyle.txtStyleOutInterBold(sizes.size2, colors.black_00)
                  : baseStyle.txtStyleOutInterMedium(
                      sizes.size2,
                      colors.grey_32,
                    ),
                viewType && styles.label,
                customLabelStyle,
              ]}>
              {title}
              {isReq && <Text style={styles.blackColor}>*</Text>}
            </Text>
            <Spacer height={hp('0.5%')} />
          </>
        )}
        <TouchableOpacity
          onPress={() => {
            if (!edit) return;

            if (isEdit) {
              setShowDropdown(!showDropdown);
              if (!showDropdown && onDropdownOpen) onDropdownOpen();
            }
          }}
          disabled={editable}
          style={[
            styles.titleContainer,
            showDropdown && styles.oBottonBorderRadius,
            customTitleStyle,
          ]}>
          <TextInput
            value={
              multiSelect
                ? value && Array.isArray(value) && value.length > 0
                  ? value.map(x => x.label).join(', ')
                  : ''
                : text.length > 25
                ? text.slice(0, 25) + '…'
                : text
            }
            onChangeText={value => {
              if (typingTimeout) clearTimeout(typingTimeout);
              setText(value);
              if (enableLocalSearch) searchFilter(value);
              typingTimeout = setTimeout(() => handleTypingEnd(value), 1000);
            }}
            placeholder={placeholder}
            placeholderTextColor={colors.grey_95}
            style={styles.placeholder}
            onFocus={() => setShowDropdown(true)}
            editable={editable}
          />
          <TouchableOpacity
            disabled={!editable}
            onPress={() => setShowDropdown(!showDropdown)}>
            {isIcon && <DROPDOWN style={styles.dropdownIcon} />}
          </TouchableOpacity>
        </TouchableOpacity>
        {showDropdown && (
          <View
            style={[
              styles.dropdownContainer,
              {
                height: searchedDropdownData.length < 3 ? hp('8%') : hp('14%'),
              },
              customDropdownContainerStyle,
            ]}>
            <ScrollView nestedScrollEnabled>
              {searchedDropdownData.length > 0 ? (
                searchedDropdownData.map((item, index) => {
                  const isItemSelected = multiSelect
                    ? Array.isArray(value)
                      ? value.some(x => x.value === item.value)
                      : false
                    : value && 'value' in value
                    ? value.value === item.value
                    : false;

                  return (
                    <View key={`${index}-${placeholder}`}>
                      {index !== 0 && <Spacer height={hp('1%')} />}
                      <TouchableOpacity
                        onPress={() => {
                          if (!multiSelect) setShowDropdown(false);
                          setSearchedDropdownData(dropdownData);
                          setText(item.label);
                          if (onSelectItem) onSelectItem(item);
                        }}
                        style={styles.dropdownTextContainer}>
                        <Text style={styles.placeholder}>{item.label}</Text>
                        {isItemSelected && (
                          <Image
                            source={{uri: iconPathURL.tick}}
                            style={styles.selectedIcon}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : (
                <Text style={styles.nodataText}>{noDataText}</Text>
              )}
            </ScrollView>
          </View>
        )}
      </View>
      {showErrText && errText && (
        <>
          <Spacer height={hp('0.5%')} />
          <Text
            style={[
              viewType
                ? baseStyle.txtStyleOutInterMedium(sizes.size1, colors.red)
                : baseStyle.txtStyleOutInterRegular(sizes.size1, colors.red),
              viewType && styles.label,
            ]}>
            {viewType && '*'} {errText}
          </Text>
        </>
      )}
    </>
  );
};

export default DropDown;
