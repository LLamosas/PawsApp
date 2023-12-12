import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '@src/modules/splash';

const {Navigator, Screen} = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Navigator
      initialRouteName={'splashScreen'}
      screenOptions={{headerShown: false}}>
      <Screen name={'splashScreen'} component={SplashScreen} />
    </Navigator>
  );
}

export default RootNavigator;
