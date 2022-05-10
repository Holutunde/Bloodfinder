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
    </Stack.Navigator>
  )
}

export default AuthStack
