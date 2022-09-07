import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

export default ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal:11,
  },
})