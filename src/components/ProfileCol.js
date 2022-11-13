import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const ProfileCol = ({label, value}) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        padding: 15,
        marginHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
        borderBottomColor: '#20202040',
        borderBottomWidth: 1,
      }}>
      <Text
        style={{
          color: colors.text,
          fontSize: 16,
          flex: 2,
          textAlign: 'left',
        }}>
        {label}
      </Text>
      <Text
        style={{
          color: colors.text,
          fontSize: 16,
          flex: 2,
          textAlign: 'right',
        }}>
        {value}
      </Text>
    </View>
  );
};

export default ProfileCol;
