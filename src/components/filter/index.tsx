import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// constants
import {baseStyle, colors, sizes} from '../../constant/theme';
// utils
import styles from './styles';

import FILTER from '../../assets/svg/filter.svg';

interface FilterListItem {
  id: number | string;
  label: string;
}

interface FilterListProps {
  data: FilterListItem[];
  onSelectionChange: (selectedItems: FilterListItem[]) => void;
  reset: () => void;
}

const FilterList: React.FC<FilterListProps> = ({
  data,
  onSelectionChange,
  reset,
}) => {
  const [selectedItems, setSelectedItems] = useState<FilterListItem[]>([]);

  const handleSelect = (item: FilterListItem) => {
    if (selectedItems.some(selectedItem => selectedItem.id === item.id)) {
      const newSelectedItems = selectedItems.filter(
        selectedItem => selectedItem.id !== item.id,
      );
      setSelectedItems(newSelectedItems);
      onSelectionChange(newSelectedItems);
    } else {
      const newSelectedItems = [...selectedItems, item];
      setSelectedItems(newSelectedItems);
      onSelectionChange(newSelectedItems);
    }
  };

  const renderItem = ({item}: {item: FilterListItem}) => {
    const isSelected = selectedItems.some(
      selectedItem => selectedItem.id === item.id,
    );

    return (
      <TouchableOpacity
        onPress={() => handleSelect(item)}
        style={{
          marginHorizontal: wp('1%'),
          paddingVertical: wp('2%'),
          paddingHorizontal: wp('2.5%'),
          backgroundColor: isSelected ? colors.green_D6 : colors.grey_F1,
          borderColor: colors.transparent,
          borderRadius: wp('6%'),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={[
            baseStyle.txtStyleOutInterRegular(sizes.size011, colors.black_22),
          ]}>
          {item.label || '--'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          setSelectedItems([]);
          reset();
        }}>
        <FILTER />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FilterList;
