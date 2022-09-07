import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie
        style={{height: 200, width: 200}}
        source={require('../../assets/animation/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;
