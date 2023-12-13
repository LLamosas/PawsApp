import {StyleSheet} from 'react-native';
import {getTheme} from '@src/constants/colors';
const colors = getTheme();

const styles = StyleSheet.create({
  selectContainer: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  textButton: {
    fontSize: 16,
    color: colors.text50,
    textAlign: 'left',
  },
  textButton__selected: {
    color: colors.text,
  },
  rowItem: {
    width: '100%',
    minHeight: 35,
    paddingLeft: 0,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  rowTextItem: {
    fontSize: 14,
    color: '#0F191E',
    textAlign: 'left',
  },
  rowItem__selected: {backgroundColor: '#EDEDED'},
  dropdown: {
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
export {styles};
