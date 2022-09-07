import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Fonts from '@theme/Fonts';
import {DevHeight ,DevWidth } from '@theme/Device'
export default function Maintenance() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{height: 100, width: 100, resizeMode: 'contain'}}
        source={require('../../assets/images/maintanence.png')}
      />
      <Text style={{fontFamily: Fonts.medium, marginTop: 20, textAlign: 'center',}}>
        Server Down {'\n'}Under Maintenance
      </Text>
      <Text
        style={{
          marginTop: 5,
          fontFamily: Fonts.light,
          color: '#666666',
          fontSize: 12,
          textAlign: 'center',
        }}>
        It seems server is down or under{'\n'} maintenance , Thanks for your patience
      </Text>
    </View>
  );
}
