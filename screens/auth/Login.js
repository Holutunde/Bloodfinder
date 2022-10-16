import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Platform,
  StyleSheet,
} from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toptext from '../../components/Toptext'
import NormalText from '../../components/Text'
import Input from '../../components/Input'
import { login } from '../../actions/auth'
import { FontAwesome5 } from '@expo/vector-icons'
import Button from '../../components/Button'
import { saveAsyncData } from '../../helpers/storage'

const Login = ({ navigation }) => {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInput = (value) => {
    setData({
      ...data,
      ...value,
    })
  }

  const handleLogin = () => {
    if (data.email != '' && data.password != '') {
      // console.log(data)
      saveAsyncData('alreadyLoggedin', true)
      dispatch(login(data))
    }
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
            <View style={styles.head}>
              <Toptext />
            </View>
            <View style={styles.formcontainer}>
              <Input
                value={data.email}
                onChangeText={(email) => handleInput({ email })}
                placeholder="Email Address"
                coverStyle={{}}
              />
              <Input
                value={data.password}
                onChangeText={(password) => handleInput({ password })}
                placeholder="Password"
                secureTextEntry
              />

              <TouchableOpacity
                onPress={() => navigation.navigate('ResetPassword1')}
                style={styles.forgotpasscont}
              >
                <Text style={styles.passtext}>Forgot Password?</Text>
              </TouchableOpacity>

              <Button style={{ borderRadius: 30 }} onPress={handleLogin}>
                SIGN IN
              </Button>
              <View style={styles.linecontainer}>
                <View style={styles.line}></View>
                <Text style={styles.linetext}>OR</Text>
                <View style={styles.line}></View>
              </View>
              <View style={styles.iconcont}></View>
            </View>
            <View style={styles.linkscontainer}>
              <TouchableOpacity style={styles.icon}>
                <FontAwesome5 name="twitter-square" size={34} color="#1C7ED6" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <FontAwesome5
                  name="facebook-square"
                  size={34}
                  color="#0E17ED"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icon}>
                <FontAwesome5
                  name="instagram-square"
                  size={34}
                  color="#D33A39"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 30 }}>
              <NormalText style={{ paddingRight: 10, fontSize: 15 }}>
                Not a user yet?
              </NormalText>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <NormalText style={{ color: '#D33A39', fontSize: 15 }}>
                  Sign up
                </NormalText>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122332',
  },
  formcontainer: {
    paddingTop: 10,
  },
  forgotpasscont: {
    alignItems: 'center',
    marginVertical: 18,
  },
  passtext: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
  },
  linecontainer: {
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#9ba0a8',
    width: '38%',
  },
  linetext: {
    color: '#9ba0a8',
    fontSize: 20,
  },
  linkscontainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 40,
  },
})
