import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  Keyboard,
  Image,
  SafeAreaView,
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
import uuid from 'react-native-uuid'
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
    data.id = uuid.v4()
    const newAdd = [data, ...addressbox]
    setAddressbox(newAdd)
    setModalOpen(false)
  }
  const rmAddress = ({ id }) => {
    //const id = 'c43067e9-09cc-4d09-a4a0-dbc7841235f6'
    const filtered = addressbox.filter((data) => data.id !== id)
    console.log(filtered)
    setAddressbox(filtered)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.uppertext}>
        <BoldText style={styles.toptext}>Checkout(1/3)</BoldText>
      </View>
      <BoldText style={{ marginLeft: 20, fontSize: 17 }}>
        Select delivery address
      </BoldText>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.addcontact}>
          <TouchableOpacity
            onPress={() => setModalOpen(true)}
            style={styles.addaddress}
          >
            <FontAwesome name="plus-circle" size={28} color="white" />
            <NormalText style={{ fontSize: 22, marginLeft: 10 }}>
              Add new address
            </NormalText>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={modalOpen} animationType="slide">
        <SafeAreaView style={styles.container}>
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
                    value={data.lab}
                    onChangeText={(lab) => handleInput({ lab })}
                    placeholder="Lab Name"
                  />
                  <Input
                    value={data.num}
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
        </SafeAreaView>
      </Modal>

      <FlatList
        data={addressbox}
        renderItem={({ item }) => (
          <View style={{ alignItems: 'center' }}>
            <View style={styles.addresscontent}>
              <View style={styles.topcont}>
                <View style={styles.top}>
                  <Ionicons name="location-outline" size={24} color="white" />
                  <BoldText
                    style={{ fontSize: 22, marginLeft: 10, fontWeight: 'bold' }}
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
                  style={{ fontSize: 17, marginLeft: 10, fontWeight: '700' }}
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
                <View style={{ paddingBottom: 10, flexDirection: 'row' }}>
                  <NormalText style={{ marginLeft: 10, fontSize: 12 }}>
                    2 pints of O+
                  </NormalText>
                  <NormalText style={{ marginLeft: 10, fontSize: 12 }}>
                    N30,000.00
                  </NormalText>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.footerbtn}>
        <Button
          onPress={() => navigation.navigate('Checkout2')}
          style={{ width: '90%', height: 38, fontSize: 8 }}
        >
          Proceed to Payment
        </Button>
      </View>
    </SafeAreaView>
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
    marginTop: 10,
    marginBottom: 20,
  },
  toptext: {
    fontSize: 24,
  },
  addcontact: {
    backgroundColor: '#122332',
    width: '90%',
    height: 59,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  addaddress: {
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
  addresscontent: {
    backgroundColor: '#122332',
    width: '90%',
    justifyContent: 'center',
    height: '80%',
    marginVertical: 20,
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
    paddingEnd: 30,
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
    alignItems: 'center',
    marginBottom: 58,
    marginStart: 13,
  },
})
