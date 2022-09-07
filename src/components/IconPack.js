import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function IconPack({
  iconName,
  pack,
  iconColor,
  iconSize,
  style,
  svgName,
}) {
  return (
    <View style={[style]}>

      {pack == 'EvilIcons' && (
        <EvilIcons
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}

      {
        pack == 'SimpleLineIcons' &&(
          <SimpleLineIcons
            name={iconName}
            size={iconSize}
            color={iconColor == null ? 'white' : iconColor}
          />
        )}

      {pack == 'Octicons' && (
        <Octicons
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}

      {pack == 'Feather' && (
        <Feather
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'FontAwesome5' && (
        <FontAwesome5
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'AntDesign' && (
        <AntDesign
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'Zocial' && (
        <Zocial
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'FontAwesome' && (
        <FontAwesome
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'MaterialIcons' && (
        <MaterialIcons
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'Ionicons' && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
      {pack == 'Entypo' && (
        <Entypo
          name={iconName}
          size={iconSize}
          color={iconColor == null ? 'white' : iconColor}
        />
      )}
    </View>
  );
}
