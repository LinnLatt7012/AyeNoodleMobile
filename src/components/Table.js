import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Product from './Product';

const Table = ({children, columns}) => {
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
    itemTitle: {
      color: colors.card,
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
          ...styles.item,
          backgroundColor: colors.text,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        {columns.map(
          ({title, flex, fontWeight, fontSize, marginHorizontal}, index) => (
            <Text
              key={index}
              style={{
                ...styles.itemTitle,
                flex: flex ? flex : 2,
                fontWeight: fontWeight ? fontWeight : 'normal',
                fontSize: fontSize ? fontSize : 16,
                marginHorizontal: marginHorizontal ? marginHorizontal : 5,
              }}>
              {title['en']}
            </Text>
          ),
        )}
      </View>
      {children}
    </>
  );
};

export default Table;
