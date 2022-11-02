import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from './Products';
import InputForm from './InputForm';
import SystemNavigationBar from 'react-native-system-navigation-bar';
SystemNavigationBar.navigationHide();
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

const RootNavigator = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Products"
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
        }}
      />
      <Tab.Screen name="Stock" component={InputForm} />
    </Tab.Navigator>
  );
};

const Home = () => {
  return <RootNavigator />;
};

export default Home;
