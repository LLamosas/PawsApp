/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRouter from '@src/navigation/';

const App = () => {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
};

export default App;
