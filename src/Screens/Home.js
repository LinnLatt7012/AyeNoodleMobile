import {View, Text, StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './Products';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Stocks from './Stocks';
import CustomSafeArea from '../components/CustomSafeArea';
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
  return (
    <>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: colors.primary,
          headerShown: false,
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            title: 'Products List',
            tabBarLabel: 'Products',
          }}
        />
        <Tab.Screen name="Stock" component={Stocks} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
