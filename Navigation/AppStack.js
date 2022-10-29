import React from 'react'
import { View } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack'
import DrawerStack from './DrawerStack'

const Container = createNativeStackNavigator()

const AppStack = (props) => {
  //const { isLoggedIn } = useSelector((state) => state.reducers)
  console.log(props.isLoggedIn)
  return (
    <Container.Navigator screenOptions={{ headerShown: false }}>
      {props.isLoggedIn ? (
        <Container.Screen name="Drawer" component={DrawerStack} />
      ) : (
        <Container.Screen name="Auth" component={AuthStack} />
      )}
    </Container.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.reducers.isLoggedIn,
  }
}

export default connect(mapStateToProps, null)(AppStack)
