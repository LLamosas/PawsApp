import {StyleSheet} from 'react-native';
import {getTheme} from '@src/constants/colors';
const colors = getTheme();
const styles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  button__pressed: {
    backgroundColor: colors.primary70,
  },
  button__disabled: {
    backgroundColor: '#CCC',
  },
  button__text: {
    fontSize: 16,
    color: colors.white,
  },
  button__text__disabled: {
    color: colors.text70,
  },
});

export {styles};
