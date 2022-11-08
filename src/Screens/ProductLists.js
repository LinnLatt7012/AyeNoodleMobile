import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {getProducts} from '../Redux/actions';
import Product from '../components/Product';
import Dashboard from '../components/Dashboard';
import Noti from '../components/Noti';
import {useState} from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import CustomSafeArea from '../components/CustomSafeArea';
import Header from '../components/Header';
import axios from 'axios';
import {BASE_URL} from '../config';

const ProductLists = ({}) => {
  const {products} = useSelector(state => state.products);
  const {user} = useSelector(state => state.auth);
  const [stockIn, setStockIn] = useState(0);
  const [stockOut, setStockOut] = useState(0);
  const [readyMade, setReadyMade] = useState(0);
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    setStockIn(fetchDashboard());
    setStockOut(fetchDashboard(7, true));
    setReadyMade(fetchDashboard(7, true, true));
    fetchProducts();
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };
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
    itemTitle: {
      color: colors.card,
      marginHorizontal: 5,
      fontSize: 16,
      flex: 2,
      textAlign: 'center',
    },
  });

  useEffect(() => {
    fetchProducts();
    setStockIn(fetchDashboard());
    setStockOut(fetchDashboard(7, true));
    setReadyMade(fetchDashboard(7, true, true));
    // console.log(stockIn, stockOut, readyMade);
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
  const refreshButton = () => (
    <TouchableWithoutFeedback onPress={async () => handleAnimation()}>
      <Animated.View
        style={{
          ...animatedStyle,
          marginRight: 20,
          marginTop: 25,
          height: 28,
        }}>
        <FontAwesomeIcons
          name="redo-alt"
          color={colors.text}
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: colors.text,
            // marginRight: 15,
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
  const fetchDashboard = async (
    nofDays = 7,
    stockOut = false,
    readyMade = false,
  ) => {
    const res = await axios.get(
      `${BASE_URL}/api/stocks/dashboard?nofDays=${nofDays}&stockOut=${stockOut}&readyMade=${readyMade}`,
      {
        headers: {
          Authorization: `Bearer ${user.jwt}`,
        },
      },
    );
    const json = JSON.parse(res.data.value['0'].TotalStockValue);
    return json;
  };
  const renderItem = ({item}) => <Product item={item} />;
  return (
    <>
      <Header headerText={'Dashboard'} rightEle={refreshButton} />
      <View style={{height: '38%'}}>
        <Dashboard
          products={products}
          totalStockIN={stockIn}
          totalStockOUT={stockOut}
          totalReadyMade={readyMade}
        />
      </View>
      <View
        style={{
          height: '58%',
          backgroundColor: colors.card,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 4,
        }}>
        <View
          style={{
            ...styles.item,
            backgroundColor: colors.text,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text style={{...styles.itemTitle, flex: 3}}>Product Name</Text>
          <Text
            style={{
              ...styles.itemTitle,
              flex: 1,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            Quantity
          </Text>
          <Text style={{...styles.itemTitle}}>Unit Price</Text>
        </View>
        <FlatList
          style={{
            flex: 1,
            marginTop: 5,
            marginBottom: 40,
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
