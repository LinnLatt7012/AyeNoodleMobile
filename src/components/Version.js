import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../config';
import {useSelector} from 'react-redux';
import {ButtonText, NotiText} from '../language';

const Version = ({version, productID, productName, isActive}) => {
  const {navigate} = useNavigation();
  const {user} = useSelector(state => state.auth);
  const {language} = useSelector(state => state.setting);
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
      Alert.alert(
        NotiText[language].changeUnitPrice.title,
        NotiText[language].changeUnitPrice.message(version.unitPrice),
        [
          {
            text: ButtonText[language].ok,
            onPress: async () => {
              await axios
                .put(
                  `${BASE_URL}/api/products/${productID}/versions/${version.id}`,
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${user.jwt}`,
                    },
                  },
                )
                .then(() => navigate('productList'));
            },
          },
          {
            text: ButtonText[language].cancle,
            style: 'cancel',
          },
        ],
      );
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
