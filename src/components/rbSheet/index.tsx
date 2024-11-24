// import React, {ReactNode} from 'react';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import {heightPercentageToDP} from 'react-native-responsive-screen';

// // constants
// import {colors} from '../../constant/theme';

// // TypeScript types
// interface RBSheetRef {
//   open: () => void;
//   close: () => void;
// }

// interface RBSheetComponentProps {
//   refRBSheet: React.RefObject<RBSheetRef>;
//   children: ReactNode;
//   height?: number;
//   closeOnPressMask?: boolean;
//   onClose?: () => void;
//   draggable?: boolean;
//   customStyles?: object;
// }

// const RBSheetComponent: React.FC<RBSheetComponentProps> = ({
//   refRBSheet,
//   children,
//   height = heightPercentageToDP('40%'),
//   closeOnPressMask = false,
//   onClose,
//   draggable = false,
//   customStyles,
// }) => {
//   return (
//     <RBSheet
//       ref={refRBSheet}
//       onClose={onClose}
//       height={height}
//       closeOnPressMask={closeOnPressMask}
//       draggable={draggable}
//       customStyles={{
//         wrapper: {
//           backgroundColor: 'rgba(0,0,0,.6)',
//         },
//         draggableIcon: {
//           backgroundColor: colors.grey_DD,
//         },
//         container: {
//           borderTopLeftRadius: heightPercentageToDP('3%'),
//           borderTopRightRadius: heightPercentageToDP('3%'),
//         },
//         ...customStyles,
//       }}>
//       {children}
//     </RBSheet>
//   );
// };

// export default RBSheetComponent;
