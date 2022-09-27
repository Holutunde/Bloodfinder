import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import React, { useRef, useState } from 'react'
import NormalText, { BoldText } from '../../components/Text'
import Button from '../../components/Button'
import Input from '../../components/Input'

const ResetPassword2 = ({ navigation }) => {
  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' })
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <View style={styles.imgcont}>
              <Image
                style={styles.img}
                source={require('../../assets/images/Resetpass.png')}
              />

              <BoldText style={{ fontSize: 25, marginTop: 80 }}>
                Forgot Password
              </BoldText>
              <NormalText style={{ width: 308, fontSize: 13, marginTop: 30 }}>
                Enter the four digit reset code sent to your mobile phone
              </NormalText>
              <View style={styles.otpcontainer}>
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={styles.otptext}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={firstInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 1: text })
                    text && secondInput.current.focus()
                  }}
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={styles.otptext}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={secondInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 2: text })
                    text
                      ? thirdInput.current.focus()
                      : firstInput.current.focus()
                  }}
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={styles.otptext}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={thirdInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 3: text })
                    text
                      ? fourthInput.current.focus()
                      : secondInput.current.focus()
                  }}
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={styles.otptext}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={fourthInput}
                  onChangeText={(text) => {
                    setOtp({ ...otp, 4: text })
                    !text && thirdInput.current.focus()
                  }}
                />
              </View>
              <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={firstInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 1: text })
                      text && secondInput.current.focus()
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={secondInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 2: text })
                      text
                        ? thirdInput.current.focus()
                        : firstInput.current.focus()
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={fourthInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 4: text })
                      !text && thirdInput.current.focus()
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={thirdInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 3: text })
                      text
                        ? fourthInput.current.focus()
                        : secondInput.current.focus()
                    }}
                  />
                </View>
              </View>
              <Button
                textStyle={{
                  fontSize: 15,
                }}
                style={{
                  borderRadius: 30,
                  width: 308,
                  height: 58,
                  borderColor: '#D33A39',
                }}
                onPress={() => navigation.navigate('ResetPassword3')}
              >
                UPDATE PASSWORD
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ResetPassword2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  imgcont: {
    alignItems: 'center',
    marginTop: 90,
  },

  otpcontainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  otptext: {
    backgroundColor: '#0a1e30',
    borderRadius: 5,
    width: 50,
    height: 38,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  otpBox: {
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
})
