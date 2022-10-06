// import React from 'react'
// import { StyleSheet } from 'react-native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import OnBoarding from '../screens/intro/Onboarding'

// const IntroStart = createNativeStackNavigator()

// const IntroStack = () => {
//   return (
//     <IntroStart.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <IntroStart.Screen name="Onboarding" component={OnBoarding} />
//     </IntroStart.Navigator>
//   )
// }

// export default IntroStack

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// })

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/auth/Login'
import Signup from '../screens/auth/Signup'
import ResetPassword1 from '../screens/auth/ResetPassword1'
import ResetPassword2 from '../screens/auth/ResetPassword2'
import ResetPassword3 from '../screens/auth/ResetPassword3'
import GetStarted from '../screens/GetStarted'
import Onboarding from '../screens/intro/Onboarding'

const IntroStart = createNativeStackNavigator()

const IntroStack = () => {
  return (
    <IntroStart.Navigator screenOptions={{ headerShown: false }}>
      <IntroStart.Screen name="Onboarding" component={Onboarding} />
    </IntroStart.Navigator>
  )
}

export default IntroStack
