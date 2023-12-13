import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './styles';

const AppBar = ({text = ''}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.appbar, {paddingTop: insets.top}]}>
      <View style={styles.appbar__container}>
        <View style={styles.appbar__iconContainer}></View>
        <View>
          <Text style={styles.appbar__text}>{text}</Text>
        </View>
        <View style={styles.appbar__iconContainer} />
      </View>
    </View>
  );
};

export {AppBar};
