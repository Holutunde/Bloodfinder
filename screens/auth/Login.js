import {
  View,
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
import { SingleHeader } from '../../components/Header'
import Toptext from '../../components/Toptext'
import NormalText, { BoldText } from '../../components/Text'
import Input from '../../components/Input'
import { login } from '../../actions/auth'
import { FontAwesome5 } from '@expo/vector-icons'

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

  return (
    <View style={styles.container}>
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
                value={data.email}
                onChangeText={(email) => handleInput({ email })}
                placeholder="Email Address"
                coverStyle={{}}
              />
              <Input
                value={data.password}
                onChangeText={(password) => handleInput({ password })}
                placeholder="Password"
              />

              <TouchableOpacity
                onPress={() => navigation.navigate('ResetPassword1')}
                style={styles.pascont}
              >
                <Text style={styles.pas}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(login(data))
                  navigation.navigate('Home')
                }}
                activeOpacity={0.5}
                style={styles.butcont}
              >
                <Text style={styles.buttext}>SIGN IN</Text>
              </TouchableOpacity>
              <View style={styles.lncont}>
                <View style={styles.leftln}></View>
                <Text style={styles.lntext}>OR</Text>
                <View style={styles.rightln}></View>
              </View>
              <View style={styles.iconcont}></View>
            </View>
            <View style={styles.smlinks}>
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
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#122332',
    paddingTop: 30,
  },

  toptext: { marginTop: 70 },
  form: {
    paddingTop: 60,
  },
  pascont: {
    alignItems: 'center',
    marginVertical: 30,
  },
  pas: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
  },
  butcont: {
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#FFFFFF',
    borderRadius: 30,
    backgroundColor: '#D33A39',
    justifyContent: 'center',
    height: 50,
  },
  buttext: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  lncont: {
    marginVertical: 10,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  leftln: {
    borderWidth: 0.5,
    width: '90%',
    borderColor: '#9ba0a8',
    width: 140,
  },
  lntext: {
    color: '#9ba0a8',
    fontSize: 20,
  },
  rightln: {
    borderWidth: 0.5,
    borderColor: '#9ba0a8',
    width: 140,
  },
  smlinks: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 40,
  },
})
