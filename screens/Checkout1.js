import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  Keyboard,
  Image,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'

const Checkout1 = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [addressbox, setAddressbox] = useState([])
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
  const addAddress = () => {
    const newAdd = [...addressbox, data]
    setAddressbox(newAdd)
    setModalOpen(false)
  }
  const rmAddress = ({ id }) => {
    setAddressbox(() => addressbox.filter((address) => address.id !== id))
  }
  return (
    <View style={styles.container}>
      <View style={styles.uppertext}>
        <BoldText style={styles.toptext}>Checkout(1/3)</BoldText>
      </View>
      <BoldText style={{ marginLeft: 10, fontSize: 17 }}>
        Select delivery address
      </BoldText>
      <View style={styles.addcont}>
        <TouchableOpacity
          onPress={() => setModalOpen(true)}
          style={styles.addbtns}
        >
          <FontAwesome name="plus-circle" size={24} color="white" />
          <NormalText style={{ fontSize: 22, marginLeft: 10 }}>
            Add new address
          </NormalText>
        </TouchableOpacity>
      </View>

      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.contain}>
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
                  <BoldText style={{ marginLeft: 10, fontSize: 17 }}>
                    Add Delivery Address
                  </BoldText>
                  <Input
                    onChangeText={(lab) => handleInput({ lab })}
                    placeholder="Lab Name"
                  />
                  <Input
                    onChangeText={(num) => handleInput({ num })}
                    placeholder="Mobile Number"
                    keyboardType="numeric"
                  />

                  <TouchableOpacity onPress={addAddress} style={styles.butcont}>
                    <Text style={styles.buttext}>Add</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      </Modal>

      <FlatList
        data={addressbox}
        keyExtractor={(item, id) => id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cont}>
            <View style={styles.topcont}>
              <View style={styles.top}>
                <Ionicons name="location-outline" size={24} color="white" />
                <BoldText
                  style={{ fontSize: 24, marginLeft: 10, fontWeight: 'bold' }}
                >
                  Work
                </BoldText>
              </View>
              <TouchableOpacity onPress={rmAddress}>
                <AntDesign name="delete" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.name}>
              <Image
                style={styles.img}
                source={require('../assets/images/Search1.png')}
              />
              <NormalText
                style={{ fontSize: 24, marginLeft: 10, fontWeight: '700' }}
              >
                {item.lab}
              </NormalText>
            </View>
            <BoldText style={{ fontSize: 15, marginTop: 2 }}>
              {item.num}
            </BoldText>
            <NormalText style={{ fontSize: 14, marginTop: 2 }}>
              Description
            </NormalText>
            <View style={styles.down}>
              <View style={styles.imgcont}>
                <Image
                  style={styles.downimg}
                  source={require('../assets/images/Search5.png')}
                />
              </View>
              <NormalText style={{ marginLeft: 10 }}>2 pints of O+</NormalText>
              <NormalText style={{ marginLeft: 10 }}>N30,000.00</NormalText>
            </View>
          </View>
        )}
      />
      <View style={styles.footerbtn}>
        <Button
          onPress={() => navigation.navigate('Checkout2')}
          style={{ width: 386, height: 38, fontSize: 8 }}
        >
          Proceed to Payment
        </Button>
      </View>
    </View>
  )
}

export default Checkout1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  uppertext: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  toptext: {
    fontSize: 20,
  },
  addcont: {
    backgroundColor: '#122332',
    width: 378,
    height: 59,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginVertical: 20,
  },
  addbtns: {
    flexDirection: 'row',
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
  contain: {
    paddingTop: 100,
    height: '100%',
    width: '100%',
    backgroundColor: '#122332',
  },
  cont: {
    backgroundColor: '#122332',
    width: 390,
    height: 186,
    marginVertical: 20,
    marginLeft: 12,
    paddingTop: 10,
    paddingLeft: 10,
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  topcont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingEnd: 10,
  },
  top: {
    flexDirection: 'row',
  },
  name: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  down: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  imgcont: {
    backgroundColor: '#04172A',
    height: 33,
    width: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 24,
    width: 24,
  },
  downimg: {
    width: 17,
    height: 22,
  },
  footerbtn: {
    marginBottom: 58,
    marginStart: 13,
  },
})
