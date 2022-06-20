import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'
import ModelPicker from './ModelPicker'
import { AntDesign } from '@expo/vector-icons'

const GetStarted = ({ navigation }) => {
  const [data, setData] = useState({
    title: 'ENGLISH',
    image: require('../assets/images/country.png'),
  })
  const [isModalVisible, setisModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.img1}
            source={require('../assets/images/Getstarted2.png')}
          >
            <View style={styles.txtcont}>
              <BoldText
                style={{ color: 'white', fontSize: 50, lineHeight: 63 }}
              >
                WELCOME
              </BoldText>
              <NormalText style={{ color: 'white', fontSize: 15 }}>
                Lets get started
              </NormalText>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.img2}
            source={require('../assets/images/Getstarted1.png')}
          ></ImageBackground>
        </View>
      </View>
      <View style={styles.down}>
        <BoldText style={{ color: 'black', fontSize: 20, marginVertical: 30 }}>
          Select Language
        </BoldText>

        <TouchableOpacity
          onPress={() => setisModalVisible(true)}
          style={styles.picker}
        >
          <View style={styles.left}>
            <Image style={styles.icon} source={data.image} />
            <NormalText style={styles.title}>{data.title}</NormalText>
          </View>
          <AntDesign name="caretdown" size={12} color="white" />
        </TouchableOpacity>
        <Button
          textStyle={{
            fontSize: 15,
          }}
          style={{
            borderRadius: 30,
            width: 308,
            height: 58,
            borderColor: '#D33A39',
            marginTop: 50,
          }}
          onPress={() => navigation.navigate('Login')}
        >
          PROCEED
        </Button>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          // nRequestClose={() => changeModalVisibility(false)}
        >
          <ModelPicker
            setData={setData}
            setisModalVisible={setisModalVisible}
          />
        </Modal>
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
  background: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 120,
    width: '100%',
  },
  img1: {
    height: 390,
    width: 250,
  },

  img2: {
    height: 230,
    width: 140,
  },
  txtcont: {
    marginTop: 320,
    justifyContent: 'center',
    marginLeft: 40,
  },
  down: {
    backgroundColor: '#FFFFFF',
    height: '40%',
    alignItems: 'center',
  },
  picker: {
    backgroundColor: '#04172A',
    flexDirection: 'row',
    width: 308,
    height: 58,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 33,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
  },
  left: {
    flexDirection: 'row',
  },
})
