import React, {useState, useEffect, useContext, createContext} from 'react';
import {lightColors, darkColors} from '@theme/Colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Appearance,
} from 'react-native';
const {height, width} = Dimensions.get('window');
export const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
});

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View
    style={[Platform.OS == 'ios' ? styles.statusBar : null, {backgroundColor}]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

export const ThemeProvider = props => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = Appearance.getColorScheme(); // Can be dark | light | no-preference

  /*
   * To enable changing the app theme dynamicly in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  const getTheme = async () => {
    AsyncStorage.getItem('DarkTheme').then(async currentMode => {
      if (currentMode === 'false') {
        setIsDark(true);
      }
    });
  };

  const setTheme = async () => {
    await AsyncStorage.setItem('DarkTheme', JSON.stringify(isDark));
    AsyncStorage.getItem('DarkTheme').then(async currentMode => {
      console.log(currentMode);
    });
  };

  // Listening to changes of device appearance while in run-time
  useEffect(() => {
    setIsDark(colorScheme === 'dark');
    if (colorScheme != 'dark') {
      getTheme();
    }
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    // Chaning color schemes according to theme
    colors: isDark ? darkColors : lightColors,

    // Overrides the isDark value will cause re-render inside the context.
    setScheme: scheme => {
      setIsDark(scheme === 'dark');
      setTheme();
    },
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <MyStatusBar backgroundColor={isDark ? '#222222' : '#16213E'} />
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => useContext(ThemeContext);

const styles = StyleSheet.create({
  statusBar: {
    height:
      Platform.OS == 'ios' ? getStatusBarHeight() : StatusBar.currentHeight,
    width,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999,
  },
});
