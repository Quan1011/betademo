import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "../screens/login";
import Register from "../screens/register";
import MovieSchedule from "../screens/movieschedule";
import Voucher from "../screens/voucher";
import Promotion from "../screens/promotion";
import MovieTheater from "../screens/movietheater";
import Other from "../screens/other";
import User from "../screens/user";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}
      // tabBarOptions={{showLabel: false}}
      >
      <Tab.Screen name="Lịch chiếu theo phim" component={MovieSchedule} options={{
        tabBarIcon: ({focused}) => (
          // <MaterialCommunityIcons name="youtube" size={24} color="#86919E" style={{tintColor: focused ? 'grey' : 'blue'}}/>
          <Image
          source={require('../image/YouTube-icon.png')}
          resizeMode="contain"
          style={{ width: 25, height: 25, tintColor: focused ? '#1477B8' : 'grey'}}
          />
        )
      }}/>
      <Tab.Screen name="Lịch chiếu theo rạp" component={MovieTheater} options={{
        tabBarIcon: ({focused}) => (
          // <MaterialIcons name="place" size={24} color="#86919E" />
          <Image
          source={require('../image/map-marker-icon.png')}
          resizeMode="contain"
          style={{ width: 25, height: 25, tintColor: focused ? '#1477B8' : 'grey'}}
          />
        )
      }}/>
      <Tab.Screen name="Voucher" component={Voucher} options={{
        tabBarIcon: ({focused}) => (
          // <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color="#86919E" />
          <Image
          source={require('../image/ticket.png')}
          resizeMode="contain"
          style={{ width: 25, height: 25, tintColor: focused ? '#1477B8' : 'grey'}}
          />
        )
      }}/>
      <Tab.Screen name="Khuyến mãi" component={Promotion} options={{
        tabBarIcon: ({focused}) => (
          // <Ionicons name="md-gift-outline" size={24} color="#86919E" />
          <Image
          source={require('../image/Present-icon.png')}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: focused ? '#1477B8' : 'grey'}}
          />
        )
      }}/>
      <Tab.Screen name="Khác" component={Other} options={{
        tabBarIcon: ({focused}) => (
          // <AntDesign name="appstore-o" size={24} color="#86919E" />
          <Image
          source={require('../image/layout.png')}
          resizeMode="contain"
          style={{ width: 20, height: 20, tintColor: focused ? '#1477B8' : 'grey'}}
          />
        )
      }}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MovieTheater" component={MovieTheater} />
          <Stack.Screen name="MovieSchedule" component={MovieSchedule} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Other" component={Other} />
          <Stack.Screen name="HomeTabs" component={MyTabs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
  // function TestStackScreen() {
  //   return(
  //     <NavigationContainer >
  //       <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
  //         {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
  //         <Stack.Screen name="Login" component={Login} />
  //         <Stack.Screen name="Register" component={Register} />
  //         <Stack.Screen name="Home" component={Home} />
  //         {/* <Stack.Screen name="HomeTabs" component={MyTabs} /> */}
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   )
  // }
}



export default AppNavigation;