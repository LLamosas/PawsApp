import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';

const INPUT_TYPES = {
  default: 'default',
  error: 'error',
  approved: 'approved',
};

const Input = ({
  value = '',
  label = '',
  placeholderTextColor = '#CCC',
  keyboardType = 'default',
  maxLength = undefined,
  secureText = false,
  editable = true,
  type = INPUT_TYPES.default,
  onChangeText = () => null,
  caption = undefined,
  ...props
}) => {
  const [focus, setFocus] = useState(false);

  const inputHolderStyle = [
    styles['input__holder__' + type],
    props.style,
    focus && type === INPUT_TYPES.default ? styles.input__holder__focus : {},
    !editable ? styles.input__holder__disabled : null,
  ];

  const getInputComponent = () => {
    return (
      <TextInput
        {...props}
        placeholderTextColor={placeholderTextColor}
        numberOfLines={1}
        keyboardType={keyboardType}
        maxLength={maxLength}
        secureTextEntry={secureText}
        onChangeText={text => {
          /* istanbul ignore else */
          if (onChangeText) {
            onChangeText(text);
          }
        }}
        onFocus={e => {
          setFocus(true);
          /* istanbul ignore else */
          if (props.onFocus) {
            props.onFocus(e);
          }
        }}
        onBlur={e => {
          setFocus(false);
          /* istanbul ignore else */
          if (props.onBlur) {
            props.onBlur(e);
          }
        }}
        style={styles.input}
        value={value}
      />
    );
  };

  return (
    <View style={styles.input__container}>
      <Text style={styles['input__label__' + type]}>{label}</Text>
      <View style={inputHolderStyle}>
        {props.prefix ? (
          <Text style={styles.input__prefix}>{props.prefix}</Text>
        ) : null}
        {getInputComponent()}
        {props.suffix ? (
          <Text style={styles.input__suffix}>{props.suffix}</Text>
        ) : null}
      </View>
      {caption ? (
        <View style={{width: 16}}>
          <Text style={styles['input__caption__' + type]}>{caption}</Text>
        </View>
      ) : null}
    </View>
  );
};
Input.types = INPUT_TYPES;

export {Input};
