import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';

const Product = ({
  item: {
    productName,
    minStock,
    productID,
    totalQuantity,
    activeVersion,
    versions,
  },
}) => {
  const {navigate} = useNavigation();
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    item: {
      backgroundColor: colors.card,
      padding: 15,
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
  const getUnitPrice = () => {
    const version = versions.find(version => version.id == activeVersion);
    return version.unitPrice;
  };
  useEffect(() => {
    // const json = JSON.stringify(productName);
    // console.log(`json`, json, 'array', JSON.parse(json)[0]);
  }, []);
  const onPressHandler = () => {
    navigate('allVersion', {productID, productName, versions, activeVersion});
  };
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      underlayColor="#000000"
      onPress={onPressHandler}>
      <View
        style={{
          ...styles.item,
          borderBottomColor: '#606060',
          borderBottomWidth: 1,
        }}>
        <Text style={{...styles.title, flex: 3}}>{productName[1]}</Text>
        <Text
          style={{
            ...styles.title,
            flex: 1,
            marginHorizontal: 10,
            color: totalQuantity > minStock ? '#B6ED85' : '#D33939',
            fontWeight: 'bold',
          }}>
          {totalQuantity}
        </Text>
        <Text style={styles.title}>{getUnitPrice()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
