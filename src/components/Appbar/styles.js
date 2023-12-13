import {StyleSheet} from 'react-native';
import {getTheme} from '@src/constants/colors';
const colors = getTheme();
const styles = StyleSheet.create({
  appbar: {
    backgroundColor: colors.primary,
    width: '100%',
  },
  appbar__container: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appbar__text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  appbar__iconContainer: {
    width: 16,
    height: 16,
  },
});

export {styles};
