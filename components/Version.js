import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, version} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../config';

const Version = ({version, productID, isActive}) => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    item: {
      padding: 20,
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
  const onPressHandler = async () => {
    try {
      // Alert.alert(
      //   'Alert Title',
      //   'My Alert Msg',
      //   [
      //     {
      //       text: 'Ok',
      //       onPress: async () => {
      //         await axios
      //           .put(`${BASE_URL}/api/${productID}/versions/${version.id}`)
      //           .then(() => Alert.alert('Change Version successed'));
      //         navigate('Products');
      //       },
      //     },
      //     {
      //       text: 'Cancel',
      //       onPress: () => Alert.alert('Cancel Pressed'),
      //       style: 'cancel',
      //     },
      //   ],
      //   {
      //     cancelable: true,
      //     onDismiss: () =>
      //       Alert.alert(
      //         'This alert was dismissed by tapping outside of the alert dialog.',
      //       ),
      //   },
      // );
      // axios.post(`${BASE_URL}/api/${productID}/versions/${version.id}`);
      console.log('id', productID, 'vid', version.id);
      await axios
        .put(`${BASE_URL}/api/products/${productID}/versions/${version.id}`)
        .then(res => {
          console.log(res.data);
        });
      navigate('productList');
    } catch (error) {
      console.log('Post error', error);
    }
  };
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
