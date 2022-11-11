import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import StockForm from '../components/StockForm';
import CustomSafeArea from '../components/CustomSafeArea';
import Header from '../components/Header';

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
      padding: 10,
      marginTop: 10,
      marginHorizontal: 8,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    itemTitle: {
      color: colors.card,
      marginHorizontal: 5,
      fontSize: 12,
      flex: 1,
      textAlign: 'center',
    },
  });
  return (
    <>
      <Header headerText={'Stock'} />
      <View style={{height: '40%', backgroundColor: 'red'}}>
        <StockForm />
      </View>
      {/* <View
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
          <Text style={{...styles.itemTitle, flex: 2}}>Product Name</Text>
          <Text
            style={{
              ...styles.itemTitle,
              flex: 1,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            Status
          </Text>
          <Text
            style={{
              ...styles.itemTitle,
              flex: 1,
            }}>
            Quantity
          </Text>
          <Text style={{...styles.itemTitle, flex: 2}}>Total</Text>
        </View>
      </View> */}
    </>
  );
};

export default Stocks;
