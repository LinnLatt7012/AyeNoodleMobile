import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';
import axios from 'axios';
import Picker from './Picker';
import {BASE_URL} from '../config';
const options = [
  {enName: 'In', mmName: 'In', value: 1},
  {enName: 'Out', mmName: 'Out', value: 2},
  {enName: 'Ready-made', mmName: 'Ready-made', value: 3},
];
const StockForm = () => {
  const {colors} = useTheme();
  const [quantity, setQuantity] = useState(0);
  const {products, user} = useSelector(state => state.produtsReducer);
  const [option, setOption] = useState(1);
  const [productID, setProductID] = useState(1);
  const styles = StyleSheet.create({
    mainComponent: {
      display: 'flex',
      color: 'black',
      flexDirection: 'row',
      backgroundColor: colors.card,
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: 20,
      alignItems: 'center',
    },
    textInput: {
      width: '100%',
      height: 40,
      color: colors.text,
      backgroundColor: colors.card,
      borderColor: '',
      borderRadius: 5,
      marginTop: 20,
    },
    Submit: {
      backgroundColor: colors.primary,
      marginTop: 15,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });
  const onStockHandler = async () => {
    try {
      Alert.alert(
        `Stock ${option == 1 ? 'Add' : 'Remove'}`,
        `${quantity} is added`,
        [
          {
            text: 'Ok',
            onPress: async () => {
              await axios
                .post(
                  `${BASE_URL}/api/stocks/`,
                  {
                    productID,
                    status: parseInt(option),
                    quantity: parseInt(quantity),
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${user.jwt}`,
                    },
                  },
                )
                .then(res => console.log(res.data))
                .catch(err => console.log('err at stock'));
            },
          },
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ],
      );
    } catch (error) {
      console.log('Post error', error);
    }
  };
  useEffect(() => {}, []);

  return (
    <View
      style={{
        ...styles.mainComponent,
      }}>
      <Text
        style={{
          color: colors.text,
          fontSize: 24,
          marginBottom: 10,
          fontWeight: '800',
        }}>
        Stock Information
      </Text>
      <Picker
        setValue={setProductID}
        value={productID}
        items={products}
        label="mmName"
        style={{zIndex: 5}}
        dropDownContainerStyle={{zIndex: 10}}
        val="productID"
        placeholder="Select Product"
      />
      <Picker
        setValue={setOption}
        value={option}
        items={options}
        label="mmName"
        style={{marginTop: 10, zIndex: 5}}
        dropDownContainerStyle={{zIndex: 5}}
        contain
        val="value"
        placeholder="Select Product"
      />
      <TextInput
        onChangeText={setQuantity}
        placeholder="Quantity"
        value={quantity}
        style={styles.textInput}
        keyboardType="numeric"
        textContentType="numeric"
        underlineColor={colors.primary}
      />
      {/* <RadioButtom /> */}
      <View style={{width: '100%'}}>
        <Button
          compact
          color={colors.text}
          onPress={onStockHandler}
          children="Submit"
          style={{
            ...styles.Submit,
          }}
        />
      </View>
    </View>
  );
};

export default StockForm;
