import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Product from '../components/Product';
import {useTheme} from '@react-navigation/native';
const products = [
  {
    productID: 1,
    productName: ['Bean Sauces', 'ပဲငံပြာရည်'],
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
    productName: ['Red Sauces', ' ငရုတ်ကောင်း'],
    activeVersion: 4,
    totalQuantity: 20,
    minStock: 20,
    versions: [
      {
        id: 4,
        unitPrice: 1500,
      },
      {
        id: 5,
        unitPrice: 5500,
      },
    ],
  },
  {
    productID: 3,
    productName: ['Soy Sauces', 'ပဲငံပြာရည်အကြည်'],
    activeVersion: 7,
    totalQuantity: 90,
    minStock: 10,
    versions: [
      {
        id: 6,
        unitPrice: 4000,
      },
      {
        id: 7,
        unitPrice: 1500,
      },
      {
        id: 8,
        unitPrice: 5500,
      },
    ],
  },
];

const ProductLists = ({}) => {
  const renderItem = ({item}) => <Product item={item} />;
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    item: {
      backgroundColor: colors.card,
      padding: 15,
      marginTop: 10,
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
  return (
    <>
      <View style={styles.item}>
        <Text style={{...styles.title, flex: 3}}>Product Name</Text>
        <Text
          style={{
            ...styles.title,
            flex: 1,
            marginHorizontal: 10,
            fontWeight: 'bold',
          }}>
          Quantity
        </Text>
        <Text style={styles.title}>Unit Price</Text>
      </View>
      <FlatList
        style={{
          flex: 1,
          marginTop: 10,
        }}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.productID}
      />
    </>
  );
};

export default ProductLists;
