import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { useFonts } from 'expo-font'
import { Provider, useSelector } from 'react-redux'
import createdStore from './store'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CartContextProvider } from './Util/Cartcontext'
import { getAsyncData } from './helpers/storage'
import AppStack from './Navigation/AppStack'
import AppIntro from './Navigation/AppIntro'
import DrawerStack from './Navigation/DrawerStack'

const customFonts = {
  DMSansRegular: require('./assets/fonts/DMSans-Regular.ttf'),
  DMSansBold: require('./assets/fonts/DMSans-Bold.ttf'),
  DMSansBoldItalic: require('./assets/fonts/DMSans-BoldItalic.ttf'),
  DMSansMeduim: require('./assets/fonts/DMSans-Medium.ttf'),
  DMSansMediumItalic: require('./assets/fonts/DMSans-MediumItalic.ttf'),
  DMSansItalic: require('./assets/fonts/DMSans-Italic.ttf'),
}

const Drawer = createDrawerNavigator()
const store = createdStore()
const App = () => {
  const confirmAsync = getAsyncData('alreadyLoggedin')

  const [fontsLoaded] = useFonts(customFonts)
  //console.log(confirmAsync)
  return (
    <Provider store={store}>
      <CartContextProvider>
        {fontsLoaded && (
          <NavigationContainer>
            {confirmAsync ? <AppIntro /> : <DrawerStack />}
          </NavigationContainer>
        )}
      </CartContextProvider>
    </Provider>
  )
}

export default App
