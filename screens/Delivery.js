import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'

const Delivery = ({ navigation }) => {
  const orderID = Math.random().toString().substr(4, 6)

  return (
    <View style={styles.container}>
      <View style={styles.uppertext}>
        <BoldText style={styles.toptext}>Confirm Delivery</BoldText>
      </View>
      <View style={styles.imgcont}>
        <Image
          style={styles.img}
          source={require('../assets/images/Delivery.png')}
        />
        <View style={styles.remark}>
          <BoldText style={{ fontSize: 22, marginTop: 90 }}>
            Package Safely Delivered?
          </BoldText>
          <Button
            onPress={() => navigation.navigate('Search')}
            style={{ width: 363, height: 38, marginTop: 120 }}
          >
            Continue Shopping
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Delivery

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  uppertext: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
  toptext: {
    fontSize: 24,
  },
  imgcont: {
    alignItems: 'center',
    marginTop: 30,
  },
  remark: {
    backgroundColor: '#122332',
    width: '100%',
    height: 348,
    alignItems: 'center',
    borderColor: 'white',
    marginTop: 30,
  },
})
