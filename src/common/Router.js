import 'react-native-gesture-handler';
import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/splash/Splash';
import Home from '../screens/home/Home';
import Speech from '../screens/speech/Speech';

import Fonts from '@theme/Fonts';
import {useTheme} from '@theme/ThemeContext';

import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="speech" component={Speech} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
