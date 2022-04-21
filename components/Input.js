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

export const Picker = ({
  value,
  onSelect,
  placeholder = '',
  coverStyle = {},
  RightIcon = null,
  LeftIcon = null,
  style = {},
  items = [],
  itemStyle = {},
  hasSearch = true,
}) => {
  const bottomSheet = useRef()
  const [search, setSearch] = useState('')

  return (
    <>
      <TouchableOpacity
        onPress={() => bottomSheet.current?.open?.()}
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: borderDarkGrey,
          width: '100%',
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
          paddingHorizontal: 5,
          position: 'relative',
          ...coverStyle,
        }}
      >
        {!!value && (
          <Text
            style={{
              position: 'absolute',
              left: 5,
              top: -12,
              backgroundColor: '#fff',
              paddingHorizontal: 5,
              color: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            {placeholder}
          </Text>
        )}
        {LeftIcon && <LeftIcon />}
        <View
          style={{
            marginHorizontal: 10,
            flex: 1,
            height: 60,
            alignItems: 'flex-start',
            justifyContent: 'center',
            ...style,
          }}
        >
          <Text
            style={{
              color: value ? textColor : textColorSecondary,
              // fontSize: 16,
            }}
          >
            {value ? value?.label : placeholder}
          </Text>
        </View>
        {RightIcon && <RightIcon />}
      </TouchableOpacity>
      <RBSheet
        ref={bottomSheet}
        height={Dimensions.get('window').height * 0.65}
        duration={500}
        dragFromTopOnly
        closeOnDragDown
        customStyles={{
          container: {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          },
          draggableIcon: {
            width: 50,
            height: 5,
            borderRadius: 100,
            backgroundColor: borderDarkGrey,
          },
        }}
      >
        <View style={{ flex: 1 }}>
          {hasSearch && (
            <View style={{ paddingHorizontal: 20 }}>
              <Input
                placeholder="Search"
                value={search}
                onChangeText={(val) => setSearch(val)}
                coverStyle={{ height: 50 }}
                style={{ height: 50 }}
              />
            </View>
          )}
          <ScrollView style={{ padding: 20 }}>
            {items
              .filter((item) =>
                item.label?.toLowerCase()?.includes(search?.toLowerCase()),
              )
              .map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      bottomSheet.current?.close?.()
                      onSelect(item)
                    }}
                    key={item.value}
                    style={{
                      paddingVertical: 10,
                      ...itemStyle,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: value?.value === item.value ? red : textColor,
                      }}
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                )
              })}
          </ScrollView>
        </View>
      </RBSheet>
    </>
  )
}
