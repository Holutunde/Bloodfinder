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
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 335,
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
          fontSize: 15,
          ...textStyle,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
