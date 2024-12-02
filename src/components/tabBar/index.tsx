import React from 'react';
import {
  FlatList,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
// Package
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
// Style
import styles from './styles';
// Component
import Spacer from '../spacer';
// Constant
import {baseStyle, colors, sizes} from '../../constant/theme';

// Define the types for the props
interface StatusBarProps {
  name?: string;
  data: Array<{id: number; title: string; count?: number | null}>;
  selectedItemData: {selectedItem: string};
  setSelectedItem: (data: {selectedItem: string}) => void;
  containerStyles?: StyleProp<ViewStyle>;
  itemStyles?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  countTxtColor?: string;
}

const StatusBar: React.FC<StatusBarProps> = props => {
  const {
    name,
    data,
    selectedItemData,
    setSelectedItem,
    containerStyles,
    itemStyles,
    backgroundColor = 'transparent',
    countTxtColor = colors.grey_32,
  } = props;
  
  const isSelected = data.some(item => item.title === selectedItemData.selectedItem);

  // Render single bar view
  const renderBar = ({
    item,
  }: {
    item: {title: string; count?: number | null; countColor?: string};
  }) => {
    const isSelected = selectedItemData.selectedItem === item.title;

    return (
      <TouchableOpacity
        onPress={() => {
          if (setSelectedItem) {
            setSelectedItem({selectedItem: item.title});
          }
        }}
        style={[
          item?.count ? styles.row : styles.barItemView,
          {
            borderBottomColor: isSelected
              ? colors.orange_05
              : colors.grey_DD,
            backgroundColor: backgroundColor,
          },
          itemStyles,
        ]}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size02, colors.grey_32),
          ]}>
          {item.title}
        </Text>
        {item?.count && (
          <>
            <Spacer width={wp('2%')} />
            <View style={[styles.count, {backgroundColor: item?.countColor}]}>
              <Text
                style={[
                  baseStyle.txtStyleOutInterSemiBold(
                    sizes.size11,
                    countTxtColor,
                  ),
                ]}>
                {item.count}
              </Text>
            </View>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        containerStyles,
        {
          backgroundColor: backgroundColor,
          // borderBottomColor: colors.grey_DD,
          // borderBottomColor: isSelected ? colors.orange_05 : colors.grey_DD,
        },
      ]}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderBar}
        keyExtractor={(item, index) => `${name || 'statusBar'}${index}`}
        ListEmptyComponent={() => null}
        // ItemSeparatorComponent={() => <Spacer width={wp('2%')} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default StatusBar;
