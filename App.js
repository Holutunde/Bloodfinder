import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts } from 'expo-font'
import store from './store'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AuthStack from './Navigation/AuthStack'
import { CartContextProvider } from './Util/Cartcontext'
import DrawerContent from './screens/DrawerContent'
import MainStack from './Navigation/MainStack'
import Home from './screens/Home'
import AppStack from './Navigation/AppStack'

const customFonts = {
  DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
  DMSansBold: require('./assets/fonts/DMSans-Bold.ttf'),
  DMSansBoldItalic: require('./assets/fonts/DMSans-BoldItalic.ttf'),
  DMSansMeduim: require('./assets/fonts/DMSans-Medium.ttf'),
  DMSansMediumItalic: require('./assets/fonts/DMSans-MediumItalic.ttf'),
  DMSansItalic: require('./assets/fonts/DMSans-Italic.ttf'),
}

const Drawer = createDrawerNavigator()

const App = () => {
  const [fontsLoaded] = useFonts(customFonts)
  return (
    <CartContextProvider>
      <NavigationContainer>
        {fontsLoaded && (
          <Provider store={store}>
            <AppStack />
          </Provider>
        )}
      </NavigationContainer>
    </CartContextProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {},
})
