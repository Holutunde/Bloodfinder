import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { red, white } from '../constants/color.js'
const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator color={red} animating size="large" />
    </View>
  )
}

export default Loader
