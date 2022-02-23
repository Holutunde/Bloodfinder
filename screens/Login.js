import { View,
         Text,
         KeyboardAvoidingView,
         TouchableWithoutFeedback,
         TouchableOpacity,
         ScrollView,
         Platform, 
         StyleSheet } from 'react-native'
import React from 'react'
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.toptext}>
        <Toptext />
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
             
      </View>

      </TouchableWithoutFeedback>
     <KeyboardAvoidingView/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#0F192B',
  },
  toptext: {
    paddingTop: 50,
  },
})
