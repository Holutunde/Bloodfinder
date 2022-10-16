import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/intro/Onboarding'
import GetStarted from '../screens/intro/GetStarted'

const IntroStart = createNativeStackNavigator()

const IntroStack = () => {
  return (
    <IntroStart.Navigator screenOptions={{ headerShown: false }}>
      <IntroStart.Screen name="Onboarding" component={Onboarding} />
      <IntroStart.Screen name="GetStarted" component={GetStarted} />
    </IntroStart.Navigator>
  )
}

export default IntroStack
