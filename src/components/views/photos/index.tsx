// import React, { useState } from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';

// // packages
// import { widthPercentageToDP } from 'react-native-responsive-screen';
// import { SvgProps } from 'react-native-svg';

// // components

// // constants
// import { baseStyle, colors, sizes } from '../../../constant/theme';

// // style
// import styles from './styles';

// interface PhotosViewProps {
//   data: React.ElementType<SvgProps>[];
// }

// const PhotosView: React.FC<PhotosViewProps> = ({data}) => {
//   const [showAll, setShowAll] = useState(false);

//   const handleToggle = () => {
//     setShowAll(prev => !prev);
//   };

//   const displayedData = showAll ? data : data.slice(0, 4);

//   return (
//     <View style={styles.container}>
//       {displayedData.map((IconComponent, index) => {
//         const opacity = index === 3 && !showAll ? 0.5 : 1;
//         return (
//           <View key={index} style={[styles.iconContainer, {opacity}]}>
//             {IconComponent && (
//               <IconComponent
//                 height={widthPercentageToDP('30%')}
//                 width={widthPercentageToDP('43%')}
//               />
//             )}
//             {index == 3 && !showAll && (
//               <TouchableOpacity
//                 onPress={handleToggle}
//                 style={styles.seeMoreButton}>
//                 <Text
//                   style={[
//                     baseStyle.txtStyleOutInterMedium(
//                       sizes.size2,
//                       colors.white_FF,
//                     ),
//                   ]}>
//                   See More
//                 </Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         );
//       })}

//     </View>
//   );
// };

// export default PhotosView;
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';

// packages
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {SvgProps} from 'react-native-svg';

// components

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';
import Spacer from '../../spacer';

interface PhotosViewProps {
  data: React.ElementType<SvgProps>[];
}

const PhotosView: React.FC<PhotosViewProps> = ({data}) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(prev => !prev);
  };

  const displayedData = showAll ? data : data.slice(0, 4);

  const renderItem = ({
    item,
    index,
  }: {
    item: React.ElementType<SvgProps>;
    index: number;
  }) => {
    const opacity = index === 3 && !showAll ? 0.5 : 1;
    const IconComponent = item;
    return (
      <View key={index} style={[styles.iconContainer, {opacity}]}>
        {IconComponent && (
          <IconComponent
            height={widthPercentageToDP('30%')}
            width={widthPercentageToDP('43%')}
          />
        )}
        {index === 3 && !showAll && (
          <TouchableOpacity onPress={handleToggle} style={styles.seeMoreButton}>
            <Text
              style={[
                baseStyle.txtStyleOutInterMedium(sizes.size2, colors.white_FF),
              ]}>
              See More
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ItemSeparatorComponent={() => (
          <Spacer width={widthPercentageToDP('2%')} />
        )}
      />
    </View>
  );
};

export default PhotosView;
