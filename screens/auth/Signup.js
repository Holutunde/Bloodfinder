import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Keyboard,
  Alert,
  Platform,
  StyleSheet,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toptext from '../../components/Toptext'
import NormalText, { BoldText } from '../../components/Text'
import Input from '../../components/Input'
import { register } from '../../actions/auth'
import Button from '../../components/Button'

const Signup = ({ navigation }) => {
  const validator = require('validator')
  const dispatch = useDispatch()
  const { regData } = useSelector((state) => state.reducers)
  // console.log(regData)
  const [isValidUser, setValidUser] = useState(true)
  const [isValidPassword, setValidPassword] = useState(true)
  const [isValidEmail, setVaidEmail] = useState(true)
  const [authorization, setAuthorization] = useState()
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleInput = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        username: val,
      }),
        setValidUser(true)
    } else {
      setValidUser(false)
    }
  }

  const handlePassword = (pass) => {
    if (pass.length >= 5) {
      setData({
        ...data,
        password: pass,
      }),
        setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }
  const handleEmail = (mail) => {
    setData({
      ...data,
      email: mail,
    })
  }

  const handleRegister = () => {
    if (
      data.username.length == 0 ||
      data.password.length == 0 ||
      data.email.length == 0
    ) {
      setAuthorization(false)
    } else if (!validator.isEmail(data.email)) {
      setVaidEmail(false)
      setAuthorization(false)
    }
    setAuthorization(true)
    dispatch(register(data))
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <View style={styles.toptext}>
              <Toptext />
            </View>
            <View style={styles.form}>
              <Input
                onChangeText={(username) => handleInput(username)}
                placeholder="Username"
                coverStyle={{}}
              />
              {isValidUser ? null : (
                <Animatable.Text
                  animation="fadeInLeft"
                  duration={500}
                  style={styles.errorMsg}
                >
                  Username must exceed 5 characters long.
                </Animatable.Text>
              )}
              <Input
                onChangeText={(email) => handleEmail(email)}
                placeholder="Email Address"
                coverStyle={{}}
              />
              {isValidEmail ? null : (
                <Animatable.Text
                  animation="shake"
                  duration={500}
                  style={styles.errorMsg}
                >
                  Invalid email address
                </Animatable.Text>
              )}
              <Input
                onChangeText={(password) => handlePassword(password)}
                placeholder="Password"
              />
              {isValidPassword ? null : (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>
                    Password must exceed 5 characters long.
                  </Text>
                </Animatable.View>
              )}
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                  justifyContent: 'center',
                }}
              >
                <NormalText style={{ paddingRight: 10, fontSize: 15 }}>
                  Already a user?
                </NormalText>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <NormalText style={{ color: '#D33A39', fontSize: 15 }}>
                    Sign in
                  </NormalText>
                </TouchableOpacity>
              </View>
              <Button style={{ borderRadius: 30 }} onPress={handleRegister}>
                REGISTER
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122332',
  },
  form: {
    paddingTop: 15,
  },
  errorMsg: {
    color: '#D33A39',
    fontSize: 14,
  },
})
