import {StyleSheet} from 'react-native';
import {baseStyle, colors} from '../../constant/theme';

const styles = StyleSheet.create({
  subContainer: {
    flex: 0.8,
    backgroundColor: colors.white_FF,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texAlign: {
    textAlign: 'center',
  },
  image: {
    ...baseStyle.iconStyle('20%'),
  },
  imageView: {
    alignSelf: 'center',
  },
});

export default styles;
