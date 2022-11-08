import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../config';

const Dashboard = ({products, fetchProducts}) => {
  const {colors} = useTheme();
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
    <View>
      <View>
        <View
          style={{
            margin: 10,
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'space-around',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.card,
              width: '95%',
              elevation: 4,
              borderRadius: 10,
              padding: 15,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <FontAwesomeIcons name="cubes" color={colors.text} size={24} />
              <Text
                style={{
                  color: colors.text,
                  paddingLeft: 4,
                }}>
                total stcok value
              </Text>
            </View>
            <Text style={{color: colors.text, fontSize: 28}}>
              {totalStockValue()}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.card,
              elevation: 4,
              marginTop: 15,
              borderRadius: 10,
              padding: 15,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <FontAwesomeIcons name="cubes" color={colors.text} size={24} />
              <Text
                style={{
                  color: colors.text,
                  paddingLeft: 4,
                }}>
                total stcok value
              </Text>
            </View>
            <Text style={{color: colors.text, fontSize: 28}}>
              {totalStockValue()}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: colors.card,
              elevation: 4,
              marginTop: 15,
              borderRadius: 10,
              padding: 15,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <FontAwesomeIcons name="cubes" color={colors.text} size={24} />
              <Text
                style={{
                  color: colors.text,
                  paddingLeft: 4,
                }}>
                total stcok value
              </Text>
            </View>
            <Text style={{color: colors.text, fontSize: 28}}>
              {totalStockValue()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
