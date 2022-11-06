import {View, Text, StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './Products';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Stocks from './Stocks';
const Tab = createBottomTabNavigator();
const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Products':
      iconName = 'store-alt';
      break;
    case 'Stock':
      iconName = 'cubes';
      break;
    default:
      break;
  }
  return <FontAwesomeIcons name={iconName} color={color} size={24} />;
};

const Home = ({navigation}) => {
  const scheme = useColorScheme();
  const {colors} = useTheme();
  useEffect(() => {
    SystemNavigationBar.navigationHide();
  });
  return (
    <>
      <StatusBar
        backgroundColor={colors.card}
        barStyle={scheme !== 'dark' ? 'white-content' : 'dark-content'}
      />
      <Tab.Navigator
        initialRouteName="Stock"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: colors.primary,
          tabBarStyle: {
            height: 65,
            paddingVertical: 10,
            paddingBottom: 10,
          },
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            title: 'Products List',
            tabBarLabel: 'Products',
            headerShown: false,
          }}
        />
        <Tab.Screen name="Stock" component={Stocks} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
