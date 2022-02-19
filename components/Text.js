import React, { useContext } from 'react'
import { Text as NativeText } from 'react-native'

const fontSize = 14
const styles = {
  fontSize,
}

const Text = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        fontFamily: 'DMSansRegular',
        color: 'white',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}

export default Text

export const BoldText = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        color: 'white',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}

export const VeryBoldText = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        fontFamily: 'DMSansBold',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        color: theme === 'light' ? '#393A4A' : '#fff',
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}

export const LightText = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        fontFamily: 'UbuntuLight',
        lineHeight: (style?.fontSize ?? fontSize) * 1.5,
        color: theme === 'light' ? '#393A4A' : '#fff',
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}
