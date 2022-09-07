import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Alert} from 'react-native';
import Toast from 'react-native-simple-toast';
import {AppContext} from './Constants';
import NetInfo from '@react-native-community/netinfo';
import Router from './Router';
import NoInternetConnection from '../screens/static/NoInternetConnection';
import {ThemeProvider} from '@theme/ThemeContext';
import axios from 'axios';
import Fonts from '@theme/Fonts';

function Context() {
  // user Details
  const [userToken, setUserToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [isLogined, setLogined] = useState(false);

  // live
  // const [baseurl, setbaseurl] = useState('https://serverip.com')
  // const [protocol, setProtocol] = useState('https://')

  // debug
  const [baseurl, setbaseurl] = useState('http://192.168.0.149');
  const [protocol, setProtocol] = useState('http://');

  const [internetIsOn, setinternetIsOn] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setinternetIsOn(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <ThemeProvider>
      <AppContext.Provider
        value={{
          userToken,
          setUserToken,
          protocol,
          setProtocol,
          baseurl,
          setbaseurl,
        }}>
        {internetIsOn ? (
          <>
            {/* {
          protocol === 'http://' &&
          <View style={{backgroundColor:"black" , alignItems:'center' , width:"100%"}}>
            <Text style={{ fontFamily: Fonts.semi_bold, fontSize: 12 , color:"#fff" , marginVertical:5 }}>DEBUG SERVER - {baseurl}</Text>
          </View>
        } */}
            <Router />
          </>
        ) : (
          <NoInternetConnection />
        )}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default Context;
