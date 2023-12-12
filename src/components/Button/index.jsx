import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';

const Button = ({text = '', disabled = false, onPress = () => null}) => {
  return (
    <Pressable style={styles.button} disabled={disabled} onPress={onPress}>
      {({pressed}) => (
        <View
          style={[
            styles.button,
            pressed ? styles.button__pressed : null,
            disabled ? styles.button__disabled : null,
          ]}>
          <Text
            style={[
              styles.button__text,
              disabled ? styles.button__text__disabled : null,
            ]}>
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export {Button};
