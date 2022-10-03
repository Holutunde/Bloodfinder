import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Cart from '../screens/Cart'
import Checkout1 from '../screens/Checkout1'
import Checkout2 from '../screens/Checkout2'
import Checkout3 from '../screens/Checkout3'
import Order from '../screens/Order'
import Delivery from '../screens/Delivery'
import Thank from '../screens/Thank'

const MainStack = createNativeStackNavigator()

const MainStackScreens = ({ navigation }) => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeScreen" component={Home} />
      <MainStack.Screen name="Search" component={Search} />
      <MainStack.Screen name="Cart" component={Cart} />
      <MainStack.Screen name="Checkout1" component={Checkout1} />
      <MainStack.Screen name="Checkout2" component={Checkout2} />
      <MainStack.Screen name="Checkout3" component={Checkout3} />
      <MainStack.Screen name="Order" component={Order} />
      <MainStack.Screen name="Delivery" component={Delivery} />
      <MainStack.Screen name="Thank" component={Thank} />
    </MainStack.Navigator>
  )
}

export default MainStackScreens
