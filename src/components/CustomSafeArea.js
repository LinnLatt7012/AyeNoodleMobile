import {StatusBar, useColorScheme, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
const CustomSafeArea = ({children}) => {
  const theme = useColorScheme();
  const {colors} = useTheme();
  useEffect(() => {}, [theme]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={colors.card}
        barStyle={theme == 'dark' ? 'dark-content' : 'light-content'}
      />
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeArea;
