import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import NormalText, { BoldText } from '../components/Text'
import Login from './Login'
import AddressForm from './AddressForm'

const Checkout1 = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.uppertext}>
        <BoldText style={styles.toptext}>Checkout(1/3)</BoldText>
      </View>
      <BoldText style={{ marginLeft: 10, fontSize: 17 }}>
        Select Delivery Address
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
        <AddressForm setModalOpen={setModalOpen} />
      </Modal>
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
})
