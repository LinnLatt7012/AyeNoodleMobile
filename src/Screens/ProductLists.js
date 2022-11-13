import {
  Animated,
  FlatList,
  ScrollView,
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
import Table from '../components/Table';

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
    fetchDashboard();
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
    fetchDashboard();
  }, []);
  const fetchDashboard = async () => {
    setStockIn(await fetchStock());
    setStockOut(await fetchStock(7, true));
    setReadyMade(await fetchStock(7, true, true));
  };
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
  const fetchStock = async (
    nofDays = 7,
    stockOut = false,
    readyMade = false,
  ) => {
    try {
      const res = await axios
        .get(
          `${BASE_URL}/api/stocks/dashboard?nofDays=${nofDays}&stockOut=${stockOut}&readyMade=${readyMade}`,
          {
            headers: {
              Authorization: `Bearer ${user.jwt}`,
            },
          },
        )
        .then(res => {
          return res.data.value['0'].TotalStockValue;
        });
      return parseInt(res);
    } catch (error) {
      return 0;
    }
  };
  const columns = [
    {
      title: {en: 'Product Name', mm: 'ပစ္စည်းနာမည်'},
    },
    {
      title: {en: 'Quantity', mm: 'အရေအတွက်'},
      flex: 1,
      fontWeight: 'bold',
      marginHorizontal: 5,
    },
    {
      title: {en: 'Unit Price', mm: 'တစ်ခုချင်းစျေး'},
    },
  ];
  const renderItem = ({item}) => <Product item={item} />;
  return (
    <ScrollView>
      <Header headerText={'Dashboard'} rightEle={refreshButton} />
      <View style={{}}>
        <Dashboard
          products={products}
          totalStockIN={stockIn}
          totalStockOUT={stockOut}
          totalReadyMade={readyMade}
        />
      </View>
      <View
        style={{
          backgroundColor: colors.card,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 4,
        }}>
        <Table columns={columns}>
          <View style={{}}>
            {products.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </View>
        </Table>
      </View>
    </ScrollView>
  );
};

export default ProductLists;
