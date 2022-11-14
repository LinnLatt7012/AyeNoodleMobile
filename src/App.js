/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';

import SystemNavigationBar from 'react-native-system-navigation-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import {MD3LightTheme, Provider as PaperProvider} from 'react-native-paper';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import {persistor, store} from './Redux/store';
import SignUp from './Screens/SignUp';
import CustomSafeArea from './components/CustomSafeArea';

const Stack = createNativeStackNavigator();
const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a8c5f0',
  },
};
const App = () => {
  return (
    <CustomSafeArea>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Nav />
        </PersistGate>
      </Provider>
    </CustomSafeArea>
  );
};

const Nav = () => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  const {user} = useSelector(state => state.auth);
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer
        theme={scheme == 'dark' ? myTheme : myTheme}
        onStateChange={() => {}}>
        {user?.jwt ? (
          <Home />
        ) : (
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
