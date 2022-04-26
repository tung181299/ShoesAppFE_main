import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartSceen';
import ProfileScreen from '../screens/ProfileScreen';
import SeeMoreScreen from '../screens/SeeMoreScreen';
import ProductDetailScreen from '../screens/ProductDetail';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="See More"
        component={SeeMoreScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Product Detail"
        component={ProductDetailScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator
      initialRouteName='My Cart'
      screenOptions={{
        headerShown: false,
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <CartStack.Screen
        options={{ headerShown: false }}
        name="My Cart"
        component={CartScreen}
      />
    </CartStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      initialRouteName='My Profile'
      screenOptions={{
        headerShown: false,
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="My Profile"
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'My Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'My Profile') {
            iconName = focused ? 'user' : 'user-o';
          }
          return route.name === 'My Profile' ? 
            <FontAwesome name={iconName} size={size} color={color} /> :
            <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#31456A',
        tabBarInactiveTintColor: 'gray',
        headerTitleStyle: { fontWeight: 'bold' }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false
        }}
      />
      <Tab.Screen
        name="My Cart"
        component={CartStackScreen}
        options={{
          tabBarLabel: 'My Cart',
          tabBarBadge: 3,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'My Profile',
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

console.disableYellowBox = true;
export default MyTabs;