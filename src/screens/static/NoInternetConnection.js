import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@theme/ThemeContext';
import Fonts from '@theme/Fonts';

export default function NoInternetConnection() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Image
        style={{height: 100, width: 100, resizeMode: 'contain'}}
        source={require('../../assets/images/nointernet.png')}
      /> */}
      <Text style={{fontFamily: Fonts.medium, marginTop: 20}}>
        No internet {'\n'}connection
      </Text>
      <Text
        style={{
          marginTop: 5,
          fontFamily: Fonts.light,
          color: '#666666',
          fontSize: 12,
          width: 200,
          textAlign: 'center',
        }}>
        It seems you're offline{'\n'} please check connection
      </Text>
    </View>
  );
}