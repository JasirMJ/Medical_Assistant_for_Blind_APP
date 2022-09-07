import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Keyboard,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Tts from 'react-native-tts';
import Lottie from 'lottie-react-native';
import {DevWidth} from '../../theme/Device';
import Fonts from '../../theme/Fonts';
import Loading from '../static/Loading';

export default function Speech({medicineData, setshowSpeech, navigation}) {
  const animationRef = useRef(null);

  // var medicineData = {
  //   id: 1,
  //   name: 'Paracetamol',
  //   dosage: '500',
  //   side_effects:
  //     'skin rash, wheezing, tightness and  trouble breathing or talking',
  //   interaction_with_other_medicines: 'No problem with other drugs',
  //   special_concerns:
  //     'These medications may interact and cause very harmful effects. Consult your healthcare professional',
  // };
  // console.log(medicineData);

  var voicedata = `Hi Good Day.The name of the scanned medicine is ${medicineData.name}.The dosage of ${medicineData.name} is ${medicineData.dosage}.The side effects of ${medicineData.name} is ${medicineData.side_effects}.The interaction with other medicine is ${medicineData.interaction_with_other_medicines}.Special concerns while consuming this medicine is ${medicineData.special_concerns}`;

  console.log('voicedata', voicedata);

  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  // const [playingAnimation, setplayingAnimation] = useState(false);

  useEffect(() => {
    Tts.addEventListener('tts-start', _event => setTtsStatus('started'));
    Tts.addEventListener('tts-finish', _event => setTtsStatus('finished'));
    Tts.addEventListener('tts-cancel', _event => setTtsStatus('cancelled'));
    Tts.setDefaultRate(0.5);
    Tts.setDefaultPitch(1);
    Tts.getInitStatus().then(initTts);
    return () => {
      Tts.removeEventListener('tts-start', _event => setTtsStatus('started'));
      Tts.removeEventListener('tts-finish', _event => setTtsStatus('finished'));
      Tts.removeEventListener('tts-cancel', _event =>
        setTtsStatus('cancelled'),
      );
    };
  }, []);

  useEffect(() => {
    if (ttsStatus === 'started') {
      animationRef.current?.play();
    } else if (ttsStatus === 'finished' || ttsStatus === 'cancelled') {
      animationRef.current?.pause();
    }
  }, [ttsStatus]);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
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

  const initTts = async () => {
    const voices = await Tts.voices();

    try {
      await Tts.setDefaultLanguage('en-US');
      await Tts.setDefaultVoice('en-us-x-iom-local');
      readText();
    } catch (err) {
      //Samsung S9 has always this error:
      //"Language is not supported"
      await Tts.setDefaultLanguage(voices[0].language);
      await Tts.setDefaultVoice(voices[0].id);
      readText();
      console.log(`setDefaultLanguage error `, err);
    }
    setTtsStatus('initialized');
  };

  const readText = async () => {
    Tts.stop();
    Tts.speak(voicedata);
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie
        ref={animationRef}
        style={{height: 200, width: 200}}
        source={require('../../assets/animation/audioplay.json')}
        loop
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: DevWidth - 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            ttsStatus === 'started' ? Tts.stop() : readText();
          }}
          activeOpacity={0.7}
          style={{
            borderRadius: 10,
            borderColor: '#000',
            borderWidth: 1,
            height: 40,
            width: DevWidth / 2.5,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#ECC5FB',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              ontFamily: Fonts.bold,
              color: '#000',
            }}>
            {ttsStatus === 'started' ? 'Stop' : 'Play Again'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Tts.stop();
            setshowSpeech(false);
          }}
          activeOpacity={0.7}
          style={{
            borderRadius: 10,
            borderColor: '#000',
            borderWidth: 1,
            height: 40,
            width: DevWidth / 2.5,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#F2D388',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              ontFamily: Fonts.bold,
              color: '#000',
            }}>
            Scan
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
