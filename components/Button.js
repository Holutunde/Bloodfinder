import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

const Button = ({
  children,
  onPress,
  style = {},
  textStyle = {},
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 38,
        width: 386,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#D33A39',
        marginVertical: 15,
        ...style,
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          ...textStyle,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
