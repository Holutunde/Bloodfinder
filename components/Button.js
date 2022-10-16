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
        height: 60,
        width: 335,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#D33A39',
        marginVertical: 15,
        ...style,
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" animating />
      ) : (
        <Text
          style={{
            color: '#ffffff',
            fontSize: 15,
            ...textStyle,
          }}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
