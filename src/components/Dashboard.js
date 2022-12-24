import {View, StyleSheet} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useTheme} from '@react-navigation/native';

import Card from './Card';
import {HeaderText} from '../language';
import {useSelector} from 'react-redux';

const Dashboard = ({products, totalStockIN, totalStockOUT, totalReadyMade}) => {
  const {colors} = useTheme();
  const {language} = useSelector(state => state.setting);
  const styles = StyleSheet.create({
    title: {
      color: colors.text,
      height: 65,
      backgroundColor: colors.card,
      elevation: 10,
      shadowColor: '#171717',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    text: {
      color: colors.text,
      fontSize: 28,
      paddingLeft: 10,
      paddingTop: 20,
    },
  });
  const totalStockValue = () => {
    var total = 0;
    products.forEach(product => {
      const versions = product.versions;
      const version = versions.find(
        version => version.id == product.activeVersion,
      );
      totalPrice = version.unitPrice * product.totalQuantity;
      total = total + totalPrice;
    });
    return total;
  };
  return (
    <View
      style={{
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}>
      <Card
        data={totalStockValue() || 0}
        label={HeaderText[language].totalStockValue}
        icon="cubes"
        width="95%"
      />
      <Card
        data={totalReadyMade || 0}
        label={HeaderText[language].totalReadyMade}
        icon="cubes"
        width="95%"
      />
      <Card
        data={totalStockIN || 0}
        label={HeaderText[language].totalStockIN}
        icon="cubes"
        width="95%"
      />
      <Card
        data={totalStockOUT || 0}
        label={HeaderText[language].totalStockOUT}
        icon="cubes"
        width="95%"
      />
    </View>
  );
};

export default memo(Dashboard);
