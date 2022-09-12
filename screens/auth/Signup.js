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
import { useDispatch } from 'react-redux'
import Toptext from '../../components/Toptext'
import NormalText, { BoldText } from '../../components/Text'
import Input from '../../components/Input'
import { register } from '../../actions/auth'
import { FontAwesome5 } from '@expo/vector-icons'
import Button from '../../components/Button'

const Signup = ({ navigation }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleInput = (value) => {
    setData({
      ...data,
      ...value,
    })
  }

  const handleRegister = () => {
    dispatch(register(data))
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
              {/* <Input placeholder="Name of Hospital/Lab" />
              <Input placeholder="Location" />
              <Input placeholder="Email Address" />
              <Input placeholder="Password" />
            <Input placeholder="Confirm password" /> */}
              <Input
                value={data.name}
                onChangeText={(name) => handleInput({ name })}
                placeholder="Name"
                coverStyle={{}}
              />
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

              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
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
              <Button onPress={handleRegister}>REGISTER</Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#122332',
    paddingTop: 10,
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

  icon: {
    marginHorizontal: 40,
  },
})