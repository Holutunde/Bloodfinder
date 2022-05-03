import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts } from 'expo-font'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './Navigation/AuthStack'
import Login from './screens/Login'
import { CartContextProvider } from './Util/Cartcontext'

const customFonts = {
  DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
  DMSansBold: require('./assets/fonts/DMSans-Bold.ttf'),
  DMSansBoldItalic: require('./assets/fonts/DMSans-BoldItalic.ttf'),
  DMSansMeduim: require('./assets/fonts/DMSans-Medium.ttf'),
  DMSansMediumItalic: require('./assets/fonts/DMSans-MediumItalic.ttf'),
  DMSansItalic: require('./assets/fonts/DMSans-Italic.ttf'),
}
const App = () => {
  const [fontsLoaded] = useFonts(customFonts)
  return (
    <CartContextProvider>
      <NavigationContainer>{fontsLoaded && <AuthStack />}</NavigationContainer>
    </CartContextProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {},
})
