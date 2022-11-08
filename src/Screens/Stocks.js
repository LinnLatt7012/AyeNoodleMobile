import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import StockForm from '../components/StockForm';
import CustomSafeArea from '../components/CustomSafeArea';

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
    <>
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
    </>
  );
};

export default Stocks;
