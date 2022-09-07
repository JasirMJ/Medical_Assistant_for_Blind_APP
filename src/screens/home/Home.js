import {View, Alert, BackHandler} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import Loading from '../static/Loading';
import Snackbar from 'react-native-snackbar';

import Speech from '../speech/Speech';

const Home = ({navigation}) => {
  const [loading, setloading] = useState(false);
  const [showSpeech, setshowSpeech] = useState(false);
  const [medicineData, setmedicineData] = useState({});

  const readQrCode = data => {
    console.log(data.nativeEvent.codeStringValue);
    setloading(true);
    // getApi('https://api.covid19india.org/data.json');
    getApi(data.nativeEvent.codeStringValue);
  };

  const getApi = apilink => {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: apilink,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        var data = response.data;
        // var data = {
        //   id: 1,
        //   name: 'Paracetamol',
        //   dosage: '500',
        //   side_effects:
        //     'skin rash, wheezing, tightness and  trouble breathing or talking',
        //   interaction_with_other_medicines: 'No problem with other drugs',
        //   special_concerns:
        //     'These medications may interact and cause very harmful effects. Consult your healthcare professional',
        // };
        console.log('response', response.status);

        if (response.status === 200) {
          setloading(false);
          setmedicineData(data);
          setshowSpeech(true);
          // navigation.navigate('speech', {medicineData: data});
        } else {
          setTimeout(() => {
            setloading(false);
            Snackbar.show({
              text: 'Something Wrong, Please try Again',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#0000FF',
            });
          }, 3000);
        }
      })
      .catch(function (error) {
        setTimeout(() => {
          setloading(false);
          Snackbar.show({
            text: 'Something Wrong, Please try Again',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: '#0000FF',
          });
        }, 3000);
      });
  };

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want to exit App', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      } else {
        return false;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{flex: 1}}>
      {showSpeech ? (
        <Speech
          navigation
          medicineData={medicineData}
          setshowSpeech={setshowSpeech}
        />
      ) : loading ? (
        <Loading />
      ) : (
        <CameraScreen
          // Barcode props
          scanBarcode={true}
          onReadCode={readQrCode} // optional
          showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
          laserColor="red" // (default red) optional, color of laser in scanner frame
          frameColor="white" // (default white) optional, color of border of scanner frame
        />
      )}
    </View>
  );
};

export default Home;
