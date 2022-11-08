import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
const Card = ({data, label}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.card,
        elevation: 4,
        marginTop: 15,
        borderRadius: 10,
        padding: 15,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <FontAwesomeIcons name="cubes" color={colors.text} size={24} />
        <Text
          style={{
            color: colors.text,
            paddingLeft: 4,
          }}>
          {label}
        </Text>
      </View>
      <Text style={{color: colors.text, fontSize: 28}}>{data}</Text>
    </View>
  );
};

export default Card;
