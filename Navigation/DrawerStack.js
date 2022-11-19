import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomDrawer from '../components/CustomDrawer'

import Home from '../screens/Home'
import Order from '../screens/Order'
import Delivery from '../screens/Delivery'
import Thank from '../screens/Thank'
import MainStackScreens from './MainStack'

const Drawer = createDrawerNavigator()

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        //drawerActiveBackgroundColor: '#364555',
        drawerActiveTintColor: '#122332',
        // drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 20,
          color: '#E9E2E2',
          marginTop: 20,
          paddingLeft: 20,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MainStackScreens}
        // options={{
        //   drawerIcon: ({ color }) => (
        //     <Ionicons name="home-outline" size={22} color={color} />
        //   ),
        // }}
      />
      <Drawer.Screen name="Track Order" component={Order} />
      <Drawer.Screen name="Confirm Delivery" component={Delivery} />
      <Drawer.Screen name="Settings" component={Thank} />
    </Drawer.Navigator>
  )
}

export default DrawerStack
