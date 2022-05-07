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
import Input from '../components/Input'

const AddressForm = ({ navigation, setModalOpen }) => {
  const [data, setData] = useState({
    lab: '',
    num: '',
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
              flex: 1,
            }}
          >
            <View style={styles.form}>
              <Input
                value={data.lab}
                onChangeText={(lab) => handleInput({ lab })}
                placeholder="Lab Address"
                coverStyle={{}}
              />
              <Input
                value={data.password}
                onChangeText={(num) => handleInput({ num })}
                placeholder="Mobile Number"
              />

              <TouchableOpacity
                onPress={() => setModalOpen(false)}
                activeOpacity={0.5}
                style={styles.butcont}
              >
                <Text style={styles.buttext}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default AddressForm

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#122332',
    paddingTop: 30,
  },
})
