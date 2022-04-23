import React, { useState, useRef } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Keyboard,
} from 'react-native'

import Text from './Text'
import {
  textInputBackground,
  textInputBorder,
  textBorderFocused,
  inputTextColor,
} from '../constants/color.js'

const Input = ({
  value,
  onChangeText,
  placeholder = '',
  autoCapitalize = 'sentences',
  secureTextEntry = false,
  coverStyle = {},
  RightIcon = null,
  LeftIcon = null,
  multiline = false,
  style = {},
  editable = true,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setFocused] = useState(false)

  return (
    <View
      style={{
        borderRadius: 30,
        borderWidth: 1,
        borderColor: isFocused ? textBorderFocused : textInputBorder,
        width: '80%',
        height: multiline ? 150 : 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15,
        paddingVertical: multiline ? 10 : 0,
        paddingHorizontal: 10,
        position: 'relative',
        backgroundColor: textInputBackground,
        ...coverStyle,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        placeholderTextColor={inputTextColor}
        autoCapitalize={secureTextEntry ? 'none' : autoCapitalize}
        secureTextEntry={secureTextEntry && !showPassword}
        multiline={multiline}
        editable={editable}
        style={{
          color: '#dadee6',
          flex: 1,
          height: '100%',
          paddingLeft: 5,
          textAlignVertical: multiline ? 'top' : 'center',
          ...style,
        }}
        {...props}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          onPress={() => setShowPassword(() => !showPassword)}
          style={{ marginLeft: 10 }}
        >
          <Ionicons
            color={textColor}
            size={22}
            name={showPassword ? 'ios-eye-off' : 'ios-eye'}
          />
        </TouchableOpacity>
      ) : (
        RightIcon && (
          <View style={{ marginLeft: 10 }}>
            <RightIcon />
          </View>
        )
      )}
    </View>
  )
}

export default Input
