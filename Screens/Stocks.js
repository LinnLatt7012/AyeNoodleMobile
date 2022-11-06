import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';
import Picker from '../components/Picker';
import axios from 'axios';
import {BASE_URL} from '../config';
const products = [
  {
    productID: 1,
    enName: 'Bean Sauces',
    mmName: 'ပဲငံပြာရည်',
    activeVersion: 2,
    totalQuantity: 100,
    minStock: 10,
    versions: [
      {
        id: 1,
        date: '9-11-10',
        unitPrice: 2000,
      },
      {
        id: 2,
        date: '9-11-10',
        unitPrice: 3500,
      },
      {
        id: 3,
        date: '9-11-10',
        unitPrice: 3500,
      },
    ],
  },
  {
    productID: 2,
    enName: 'Red Sauces',
    mmName: 'ငရုတ်ကောင်း',
    activeVersion: 4,
    totalQuantity: 20,
    minStock: 20,
    versions: [
      {
        id: 4,
        date: '9-11-10',
        unitPrice: 1500,
      },
      {
        id: 5,
        date: '9-11-10',
        unitPrice: 5500,
      },
    ],
  },
  {
    productID: 3,
    enName: 'Soy Sauces',
    mmName: 'ပဲငံပြာရည်အကြည်',
    activeVersion: 7,
    totalQuantity: 90,
    minStock: 10,
    versions: [
      {
        id: 6,
        date: '9-11-10',
        unitPrice: 4000,
      },
      {
        id: 7,
        date: '9-11-10',
        unitPrice: 1500,
      },
      {
        id: 8,
        date: '9-11-10',
        unitPrice: 5500,
      },
    ],
  },
];
const options = [
  {enName: 'In', mmName: 'In', value: 1},
  {enName: 'Out', mmName: 'Out', value: 2},
  {enName: 'Ready-made', mmName: 'Ready-made', value: 3},
];
const Stocks = () => {
  const {colors} = useTheme();
  const [quantity, setQuantity] = useState(0);
  // const {products} = useSelector(state => state.produtsReducer);
  const [option, setOption] = useState(1);
  const [productID, setProductID] = useState(1);
  const styles = StyleSheet.create({
    mainComponent: {
      display: 'flex',
      color: 'black',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
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
      marginTop: 10,
      // borderWidth: 1,
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
                .post(`${BASE_URL}/api/stocks/`, {
                  productID,
                  status: parseInt(option),
                  quantity: parseInt(quantity),
                })
                .then(res => console.log(res.data));
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
        backgroundColor: colors.card,
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

export default Stocks;
