import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useFocusEffect, useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {getProducts} from '../Redux/actions';
import Product from '../components/Product';
import Dashboard from '../components/Dashboard';
import Noti from '../components/Noti';

const useForceRender = () => {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1)];
};

const ProductLists = ({}) => {
  const {products, user} = useSelector(state => state.produtsReducer);
  const [forceRender] = useForceRender();

  useFocusEffect(
    useCallback(() => {
      forceRender();
    }, []),
  );
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

  useEffect(() => {
    console.log('here');
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    NetInfo.fetch().then(networkState => {
      if (networkState.isConnected && networkState.isInternetReachable) {
        dispatch(getProducts(user.jwt));
      } else {
        Noti('Network Error', 'There is no internet connection', [
          {
            text: 'Ok',
          },
        ]);
      }
    });
  };

  const renderItem = ({item}) => <Product item={item} />;
  return (
    <>
      <View style={{height: '42%', marginTop: StatusBar.currentHeight}}>
        <Dashboard products={products} fetchProducts={fetchProducts} />
      </View>
      <View
        style={{
          height: '55%',
          backgroundColor: colors.card,
          // bordeeRadius: 30,
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
        <FlatList
          style={{
            flex: 1,
            marginTop: 5,
          }}
          onEndReached={fetchProducts}
          onEndReachedThreshold={0.5}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.productID}
        />
      </View>
    </>
  );
};

export default ProductLists;
