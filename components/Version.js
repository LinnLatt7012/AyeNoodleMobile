import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, version} from 'react';
import {useTheme} from '@react-navigation/native';

const Version = ({version, productID, isActive}) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    item: {
      padding: 20,
      // marginVertical: 8,
      marginHorizontal: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    title: {
      color: colors.text,
      marginHorizontal: 5,
      fontSize: 16,
      flex: 2,
      textAlign: 'center',
    },
  });
  useEffect(() => {
    // console.log(isActive);
  });
  const onPressHandler = () => {};
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      underlayColor="#000000"
      disabled={isActive}
      onPress={onPressHandler}>
      <View
        style={{
          ...styles.item,
          backgroundColor: isActive ? '#B6ED85' : colors.card,
          borderBottomColor: '#606060',
          borderBottomWidth: 1,
        }}>
        <Text style={{...styles.title, flex: 1}}>{version.id}</Text>
        <Text
          style={{
            ...styles.title,
            flex: 3,
            marginHorizontal: 10,
            fontWeight: 'bold',
          }}>
          {version.date}
        </Text>
        <Text style={styles.title}>{version.unitPrice}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Version;
