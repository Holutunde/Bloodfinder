import React from 'react'
import { View } from 'react-native'
import { connect, useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack'
import DrawerStack from './DrawerStack'

const Container = createNativeStackNavigator()

const AppStack = (props) => {
  //const { signedStatus } = useSelector((state) => state.reducers)
  return (
    <Container.Navigator screenOptions={{ headerShown: false }}>
      {props.signedStatus ? (
        <Container.Screen name="Drawer" component={DrawerStack} />
      ) : (
        <Container.Screen name="Auth" component={AuthStack} />
      )}
    </Container.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    signedStatus: state.reducers.signedStatus,
  }
}

export default connect(mapStateToProps, null)(AppStack)
