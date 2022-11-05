import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Product from '../components/Product';
import {useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {getProducts} from '../Redux/actions';

const ProductLists = ({}) => {
  const {products} = useSelector(state => state.produtsReducer);
  const dispatch = useDispatch();
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

  useEffect(() => {
    fetchProducts();
    return () => {};
  }, [products]);

  const fetchProducts = () => {
    NetInfo.fetch().then(networkState => {
      if (networkState.isConnected && networkState.isInternetReachable) {
        dispatch(getProducts());
      } else {
        console.log('no Connection');
      }
    });
  };

  const renderItem = ({item}) => <Product item={item} />;
  return (
    <>
      <View style={{height: '40%'}}></View>
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
          height: '0%',
        }}
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.5}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.productID}
      />
    </>
  );
};

export default ProductLists;
