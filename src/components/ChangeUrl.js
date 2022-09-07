import React, {useState, useEffect, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity,  } from 'react-native'
import IconPack from '@components/IconPack';
import { AppContext } from '../common/Constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

function ChangeUrl({onClose}){

    // console.warn("pppp", password);

    const { baseurl, setbaseurl, setProtocol } = useContext(AppContext);

    const [password, setPassword] = useState('')
    const [url, seturl] = useState('')

    const changeToLocal = async () => {
        try {
          onClose()
          await AsyncStorage.setItem('@url', `http://${url}`)
          setbaseurl(`http://${url}`)
          setProtocol('http://')
        //   logout()
        } catch (e) {
          // saving error
          console.warn("errr", e);
        }
      }

      const changeToServer = async () => {
        try {
          onClose()
          await AsyncStorage.setItem('@url', 'https://server')
          setbaseurl('https://server')
          setProtocol('https://')
          //   logout()
        } catch (e) {
          // saving error
          console.warn("errr", e);
        }
      }
 
    return (
            <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 40, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <TouchableOpacity onPress={onClose} style={{alignItems: 'flex-end', marginBottom: 10}}>
                <IconPack
                    style={{}}
                    pack={'MaterialCommunityIcons'}
                    iconName={'close-circle-outline'}
                    iconSize={25}
                    iconColor={'red'}
                />
                </TouchableOpacity>
                {password != 'passwordilla' &&
                <View style={{ paddingVertical: 15, backgroundColor: "#ffff", borderRadius: 10, borderWidth: 1, borderColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        // style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        placeholder="password for change url"
                        keyboardType="default"/>
                </View>}
                {password == 'passwordilla' &&
                <View style={{  paddingVertical: 30, backgroundColor: "red", borderRadius: 10, borderWidth: 1, borderColor: 'red' }}>
                    {baseurl == 'https://server'?
                    <>
                    <TextInput
                      style={{backgroundColor: '#fff', borderRadius: 5, paddingHorizontal: 10, marginHorizontal: 15, marginBottom: 15}}
                      onChangeText={(text) => seturl(text)}
                      value={url}
                      placeholder="type local IP"
                      keyboardType="default"/>
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => changeToLocal()}>
                        <Text style={{fontSize: 17, color: '#fff'}}>Change to Local</Text>
                    </TouchableOpacity>
                    </>
                    :
                    <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => changeToServer()}>
                        <Text style={{fontSize: 17, color: '#fff'}}>Change to Server</Text>
                    </TouchableOpacity>
                    }
                </View>}
            </View>
    )
}

export default ChangeUrl;