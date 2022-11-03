import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Versions from './Versions';
import ProductLists from './ProductLists';
const Stack = createNativeStackNavigator();

const Products = () => {
  return (
    <Stack.Navigator
      initialRouteName="productList"
      screenOptions={
        {
          // headerShown: false,
        }
      }>
      <Stack.Screen name="productList" component={ProductLists} />
      <Stack.Screen name="allVersion" component={Versions} />
    </Stack.Navigator>
  );
};

export default Products;
