import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Cart from '../screens/Cart'
import Checkout1 from '../screens/Checkout1'
import Checkout2 from '../screens/Checkout2'
import Checkout3 from '../screens/Checkout3'
import Order from '../screens/Order'
import Delivery from '../screens/Delivery'
import Thank from '../screens/Thank'
import ResetPassword1 from '../screens/ResetPassword1'
import ResetPassword2 from '../screens/ResetPassword2'
import ResetPassword3 from '../screens/ResetPassword3'
import GetStarted from '../screens/GetStarted'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout1" component={Checkout1} />
      <Stack.Screen name="Checkout2" component={Checkout2} />
      <Stack.Screen name="Checkout3" component={Checkout3} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="Thank" component={Thank} />
      <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
      <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
      <Stack.Screen name="ResetPassword3" component={ResetPassword3} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  )
}

export default AuthStack
