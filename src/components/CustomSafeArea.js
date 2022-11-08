import {
  View,
  Text,
  StatusBar,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {} from 'react-native-gesture-handler';
const CustomSafeArea = ({children}) => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <StatusBar
        backgroundColor={colors.card}
        barStyle={scheme !== 'dark' ? 'white-content' : 'dark-content'}
      />
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeArea;
