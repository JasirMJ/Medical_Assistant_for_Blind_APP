import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '@theme/ThemeContext';
import Fonts from '../../theme/Fonts';
import {AppContext} from '../../common/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export default function Splash({navigation}) {
  const {colors, isDark} = useTheme();
  const {user, setUser, baseurl} = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 3000);
  }, []);

  return (
    <View style={[styles.mainContainer, {backgroundColor: '#16213E'}]}>
      <Text style={{fontFamily: Fonts.semi_bold, color: '#FFF', fontSize: 20}}>
        Medical Assistant For Blind
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
