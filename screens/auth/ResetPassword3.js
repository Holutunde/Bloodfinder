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
import NormalText, { BoldText } from '../../components/Text'
import Button from '../../components/Button'

const ResetPassword3 = ({ navigation }) => {
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
                source={require('../../assets/images/Resetpass3.png')}
              />

              <BoldText
                style={{ fontSize: 24, marginTop: 80, fontWeight: '700' }}
              >
                Password reset
              </BoldText>
              <NormalText style={{ fontSize: 13, marginTop: 30 }}>
                Your password has been reset successfully
              </NormalText>
              <Button
                textStyle={{
                  fontSize: 15,
                }}
                style={{
                  borderRadius: 30,
                  width: 308,
                  height: 58,
                  borderColor: '#D33A39',
                  marginTop: 20,
                }}
                onPress={() => navigation.navigate('GetStarted')}
              >
                SIGN IN
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default ResetPassword3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  imgcont: {
    alignItems: 'center',
    marginTop: 90,
  },
})
