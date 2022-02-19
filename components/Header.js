import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import SvgUri from 'expo-svg-uri'
import { BoldText } from './Text'

const Header = ({
  onBackPress = null,
  navigation,
  style = {},
  children,
  ...props
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 40,
        width: '45%',
      }}
      {...props}
    >
      <TouchableOpacity
        onPress={() => (onBackPress ? onBackPress?.() : navigation.goBack())}
      >
        <SvgUri
          style={{ paddingTop: 9, paddingRight: 15 }}
          source={require('../assets/icon/back-arrow-icon.svg')}
        />
      </TouchableOpacity>
      <BoldText style={{ fontSize: 20 }}>{children}</BoldText>
    </View>
  )
}

export default Header

export const SingleHeader = ({
  navigation,
  style = {},
  children,
  ...props
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 40,
        width: '45%',
      }}
      {...props}
    >
      <BoldText style={{ fontSize: 40 }}>{children}</BoldText>
    </View>
  )
}
