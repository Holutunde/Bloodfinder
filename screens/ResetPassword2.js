import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import React from 'react'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'
import Input from '../components/Input'
import { AntDesign } from '@expo/vector-icons'

const ResetPassword2 = ({ navigation }) => {
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
            <View style={styles.imgcont}>
              <Image
                style={styles.img}
                source={require('../assets/images/Resetpass.png')}
              />

              <BoldText style={{ fontSize: 25, marginTop: 80 }}>
                Forgot Password
              </BoldText>
              <NormalText style={{ width: 308, fontSize: 13, marginTop: 30 }}>
                Enter the six- digit reset code sent to your mobile phone
              </NormalText>
              <View style={styles.inputcont}>
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={{
                    backgroundColor: '#0a1e30',
                    borderColor: 'grey',
                    borderRadius: 0,
                    width: 36,
                    height: 29,
                    paddingHorizontal: 6,
                    marginRight: 10,
                  }}
                  KeyboardType="numeric"
                  maxLength="1"
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={{
                    backgroundColor: '#0a1e30',
                    borderColor: 'grey',
                    borderRadius: 0,
                    width: 36,
                    height: 29,
                    paddingHorizontal: 6,
                    marginRight: 10,
                  }}
                  KeyboardType="numeric"
                  maxLength="1"
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={{
                    backgroundColor: '#0a1e30',
                    borderColor: 'grey',
                    borderRadius: 0,
                    width: 36,
                    height: 29,
                    paddingHorizontal: 6,
                    marginRight: 10,
                  }}
                  KeyboardType={'numeric'}
                  maxLength={1}
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={{
                    backgroundColor: '#0a1e30',
                    borderColor: 'grey',
                    borderRadius: 0,
                    width: 36,
                    height: 29,
                    paddingHorizontal: 6,
                    marginRight: 10,
                  }}
                  KeyboardType={'numeric'}
                  maxLength={1}
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={{
                    backgroundColor: '#0a1e30',
                    borderColor: 'grey',
                    borderRadius: 0,
                    width: 36,
                    height: 29,
                    paddingHorizontal: 6,
                    marginRight: 10,
                  }}
                  KeyboardType={'numeric'}
                  maxLength={1}
                />
                <Input
                  style={{ color: '#FFFFFF' }}
                  coverStyle={{
                    backgroundColor: '#0a1e30',
                    borderColor: 'grey',
                    borderRadius: 0,
                    width: 36,
                    height: 29,
                    paddingHorizontal: 6,
                    marginRight: 10,
                  }}
                  KeyboardType={'numeric'}
                  maxLength={1}
                />
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
                  marginTop: 40,
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
  inputcont: {
    flexDirection: 'row',
  },
})
