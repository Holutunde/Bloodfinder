import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import ResetPassword1 from '../screens/auth/ResetPassword1'
import ResetPassword2 from '../screens/auth/ResetPassword2'
import ResetPassword3 from '../screens/auth/ResetPassword3'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
      <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
      <Stack.Screen name="ResetPassword3" component={ResetPassword3} />
    </Stack.Navigator>
  )
}

export default AuthStack
