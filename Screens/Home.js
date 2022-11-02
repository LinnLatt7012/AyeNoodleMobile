import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case 'Products':
      iconName = 'file';
      break;
    case 'SignIn':
      iconName = 'home';
      break;
    default:
      break;
  }
  return <FontAwesomeIcons name={iconName} color={color} size={24} />;
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Products"
        screenOptions={({route}) => ({
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: '#4f0e63',
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="SignIn" component={SignIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
