import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import React from 'react'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'
import Input from '../components/Input'

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <ImageBackground
          style={styles.img}
          source={require('../assets/images/Resetpass.png')}
        />
      </View>
      <View style={styles.down}></View>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    backgroundColor: '#0a1e30',
    height: '60%',
  },
  img: {
    width: '50%',
    height: '50%',
    flex: 1,
  },
})
