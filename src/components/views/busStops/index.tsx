import React from 'react';
import {Text, View} from 'react-native';

// packages
import {widthPercentageToDP} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import StatusBar from '../../tabBar';
import styles from './styles';

interface BusStop {
  time: string;
  point: string;
}

interface TabData {
  id: number;
  title: string;
  count: number | null;
}

interface TabData {
  id: number;
  title: string;
  count: number | null;
}

interface BusStopsProps {
  data: BusStop[];
}

const tabData = [
  {id: 0, title: 'Pickup Points', count: null},
  {id: 1, title: 'Drop Points', count: null},
];

const BusStops: React.FC<BusStopsProps> = ({data}) => {
  const [currentTab, setCurrentTab] = React.useState<{selectedItem: string}>({
    selectedItem: tabData[0]?.title,
  });

  return (
    <View style={styles.container}>
      <View style={styles.tabView}>
        <StatusBar
          name="BusStops"
          data={tabData}
          selectedItemData={currentTab}
          setSelectedItem={setCurrentTab}
          backgroundColor={colors.transparent}
        />
      </View>
      {data.map((x, y) => {
        const isLastIndex = y == data?.length - 1;
        return (
          <View
            key={y}
            style={[
              styles.row,
              {
                borderBottomColor: !isLastIndex
                  ? colors.grey_5DD
                  : colors.transparent,
                borderBottomWidth: 1,
              },
            ]}>
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_55),
              ]}>
              {x?.time}
            </Text>
            <Spacer width={widthPercentageToDP('10%')} />
            <Text
              style={[
                baseStyle.txtStyleOutInterRegular(sizes.size2, colors.grey_55),
              ]}>
              {x?.point}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default BusStops;
