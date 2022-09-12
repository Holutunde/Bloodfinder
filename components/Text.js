import React, { useContext } from 'react'
import { Text as NativeText } from 'react-native'

const fontSize = 10
const styles = {
  fontSize,
}

const Text = ({ style = {}, children, ...props }) => {
  return (
    <NativeText
      style={{
        fontFamily: 'DMSansRegular',
        color: 'white',
        fontSize: 15,
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
        fontFamily: 'DMSansBold',
        color: 'white',
        lineHeight: 35,
        fontSize: 15,
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
        ...styles,
        ...style,
      }}
      {...props}
    >
      {children}
    </NativeText>
  )
}
