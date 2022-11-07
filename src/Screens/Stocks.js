import {View, Text, StyleSheet, Alert, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {Button, TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';
import StockForm from '../components/StockForm';
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
  const styles = StyleSheet.create({
    item: {
      backgroundColor: colors.card,
      padding: 15,
      marginTop: 10,
      marginHorizontal: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    title: {
      color: colors.text,
      marginHorizontal: 5,
      fontSize: 16,
      flex: 2,
      textAlign: 'center',
    },
  });
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors.card,
      }}>
      <View style={{height: '50%'}}>
        <StockForm />
      </View>
      {/* <View
        style={{
          height: '52%',
          backgroundColor: colors.card,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 10,
        }}>
        <View
          style={{
            ...styles.item,
            backgroundColor: colors.text,
            color: colors.card,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text style={{...styles.title, flex: 3, color: colors.card}}>
            Product Name
          </Text>
          <Text
            style={{
              ...styles.title,
              flex: 1,
              marginHorizontal: 10,
              fontWeight: 'bold',
              color: colors.card,
            }}>
            Quantity
          </Text>
          <Text style={{...styles.title, color: colors.card}}>Unit Price</Text>
        </View>
      </View> */}
    </View>
  );
};

export default Stocks;
