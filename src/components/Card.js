import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
const Card = ({data, label, icon, width = '48%'}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.card,
        elevation: 2,
        marginTop: 10,
        borderRadius: 10,
        padding: 15,
        width: width,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingRight: 15,
        }}>
        <FontAwesomeIcons name={icon} color={colors.text} size={24} />
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
