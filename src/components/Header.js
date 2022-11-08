import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Header = ({headerText, rightEle = null}) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    title: {
      color: colors.text,
      height: 65,
      backgroundColor: colors.card,
      elevation: 20,
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
  return (
    <View style={styles.title}>
      <Text
        style={{
          ...styles.text,
          fontWeight: '600',
          color: colors.text,
          borderBottomWidth: 4,
          marginLeft: 15,
          marginBottom: 3,
          paddingHorizontal: 4,
        }}>
        {headerText}
      </Text>
      {rightEle()}
    </View>
  );
};

export default Header;
