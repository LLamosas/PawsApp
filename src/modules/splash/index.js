import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@src/components/Button';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 16}}>
        <Button
          text="Botone"
          onPress={() => console.log('dataaa')}
          disabled={true}
        />
      </View>
    </View>
  );
};

export {SplashScreen};
