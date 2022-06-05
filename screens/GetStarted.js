import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Keyboard,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import React, { useState } from 'react'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'
import Input from '../components/Input'

const GetStarted = () => {
  const [chooseData, setchooseData] = useState('Select Item...')
  const [isModalVisible, setisModalVisible] = useState(false)

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
  }
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <ImageBackground
          style={styles.img}
          source={require('../assets/images/Resetpass.png')}
        />
      </View>
      <View style={styles.down}>
        <BoldText>Select Language</BoldText>
        <TouchableOpacity onPress={() => changeModalVisibility(true)}>
          <NormalText>{chooseData}</NormalText>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          nRequestClose={() => changeModalVisibility(false)}
        ></Modal>
      </View>
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
