import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'

const Checkout3 = ({ navigation }) => {
  const orderID = Math.random().toString().substr(4, 6)

  return (
    <View style={styles.container}>
      <View style={styles.uppertext}>
        <BoldText style={styles.toptext}>Checkout(3/3)</BoldText>
      </View>
      <View style={styles.imgcont}>
        <Image
          style={styles.img}
          source={require('../assets/images/Checkout3.png')}
        />
        <BoldText style={{ fontSize: 22, marginTop: 40 }}>
          Order Placed Successfully!
        </BoldText>
        <View style={styles.remark}>
          <NormalText style={{ fontSize: 18, marginTop: 10 }}>
            Congratulations, your order has been placed.
          </NormalText>
          <NormalText style={{ fontSize: 18, marginTop: 10 }}>
            You can track your order with{' '}
            <NormalText style={{ fontSize: 18, color: '#D33A39' }}>
              {orderID}
            </NormalText>
          </NormalText>
        </View>
      </View>
      <View style={styles.downbtns}>
        <Button
          onPress={() => navigation.navigate('Search')}
          style={{ width: 181, height: 38, backgroundColor: '#122332' }}
        >
          Continue Shopping
        </Button>
        <Button
          onPress={() => navigation.navigate('Delivery')}
          style={{ width: 181, height: 38 }}
        >
          Track Order
        </Button>
      </View>
    </View>
  )
}

export default Checkout3

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
    marginTop: 70,
  },
  remark: {
    backgroundColor: '#122332',
    width: 378,
    height: 78,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'white',
    marginVertical: 70,
  },
  downbtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 45,
  },
})
