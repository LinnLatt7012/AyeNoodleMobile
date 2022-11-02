import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SignIn = () => {
  return (
    <View style={styles.mainComponent}>
      <Text style={styles.title}>Signin</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainComponent: {
    display: 'flex',
    color: 'black',
    alignContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    color: 'black',
  },
});
export default SignIn;
