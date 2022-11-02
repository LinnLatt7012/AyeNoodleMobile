/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import SystemNavigationBar from 'react-native-system-navigation-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './Redux/store';
import {Provider} from 'react-redux';
import SignIn from './Screens/SignIn';
import Home from './Screens/Home';
import {useColorScheme} from 'react-native';

SystemNavigationBar.navigationHide();

const Stack = createNativeStackNavigator();
const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#a8c5f0',
  },
};
const App = () => {
  const scheme = useColorScheme();
  const [login, setLogin] = useState(true);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={scheme !== 'dark' ? DarkTheme : myTheme}>
          <Stack.Navigator
            initialRouteName={login ? 'Home' : 'Login'}
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
