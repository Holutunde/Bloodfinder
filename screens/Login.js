import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'
import { SingleHeader } from '../components/Header'
import Toptext from '../components/Toptext'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [isFocused, setFocused] = useState(false)

  const [loginData, setLoginData] = useState({
    email: ' ',
    password: ' ',
    check_textInputChange: false,
    secureTextEntry: true,
  })

  const handleInput = (value) => {
    setLoginData({
      ...loginData,
      ...value,
      check_textInputChange: true,
    })
  }

  const updateSecureTextEntry = () => {
    setLoginData({
      ...loginData,
      secureTextEntry: !loginData.secureTextEntry,
    })
  }
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={styles.toptext}>
          <Toptext />
          <Text>yguyg</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.action}>
            <TextInput
              onFocus={() => setFocused(true)}
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(email) => handleInput({ email })}
            />
          </View>
          <View style={styles.action}>
            <TextInput
              placeholder="********"
              secureTextEntry={loginData.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(password) => handleInput({ password })}
            />
          </View>
          <TouchableOpacity style={styles.pascont}>
            <Text style={styles.pas}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butcont}>
            <Text style={styles.buttext}>SIGN IN</Text>
          </TouchableOpacity>
          <View style={styles.lncont}>
            <View style={styles.leftln}></View>
            <Text style={styles.lntext}>OR</Text>
            <View style={styles.rightln}></View>
          </View>
          <View style={styles.iconcont}></View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F192B',
  },
  toptext: {
    paddingTop: 50,
  },
  action: {
    borderWidth: 1,
    borderColor: '#D33A39',
    borderRadius: 30,
    backgroundColor: '#5E6A75',
    justifyContent: 'center',
    margin: 30,
    height: 58,
    width: '80%',
  },
  textInput: {
    color: '#ffffff',
    paddingLeft: 15,
  },
})
