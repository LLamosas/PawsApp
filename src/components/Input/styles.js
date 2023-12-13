import {StyleSheet} from 'react-native';
import {getTheme} from '@src/constants/colors';
const colors = getTheme();

const baseStyles = StyleSheet.create({
  input__holder: {
    borderRadius: 12,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    marginTop: 8,
    fontSize: 12,
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

const styles = StyleSheet.create({
  input__container: {
    width: '100%',
  },
  input: {
    height: 48,
    flex: 1,
    paddingHorizontal: 16,
    lineHeight: Platform.select({ios: undefined, android: 20}),
  },
  input__disabled: {
    color: colors.text50,
  },
  input__holder__default: {
    ...baseStyles.input__holder,
    borderColor: colors.primary30,
  },
  input__holder__error: {
    ...baseStyles.input__holder,
    borderColor: colors.error,
  },
  input__holder__approved: {
    ...baseStyles.input__holder,
    borderColor: colors.approved,
  },
  input__holder__focus: {
    borderColor: colors.secondary,
  },
  input__holder__disabled: {
    backgroundColor: colors.primary30,
    borderColor: colors.primary30,
  },
  input__caption__default: {
    ...baseStyles.caption,
    color: colors.text,
  },
  input__caption__error: {
    ...baseStyles.caption,
    color: colors.error,
  },
  input__caption__approved: {
    ...baseStyles.caption,
    color: colors.approved,
  },
  input__label__default: {
    ...baseStyles.label,
    color: colors.text,
  },
  input__label__error: {
    ...baseStyles.label,
    color: colors.error,
  },
  input__label__approved: {
    ...baseStyles.label,
    color: colors.approved,
  },

  input__prefix: {
    fontSize: 14,
    color: colors.text50,
    paddingLeft: 14,
  },
  input__suffix: {
    fontSize: 14,
    color: colors.text50,
    marginRight: 12,
  },
});

export {styles};
