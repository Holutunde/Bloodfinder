import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import NormalText, { BoldText } from '../components/Text'
import Button from '../components/Button'

const Checkout2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.uppertext}>
        <BoldText style={styles.toptext}>Checkout(2/3)</BoldText>
      </View>
      <BoldText style={{ marginLeft: 10, fontSize: 17 }}>
        Select payment method
      </BoldText>
      <View style={styles.cont}>
        <View style={styles.topcont}>
          <View style={styles.top}>
            <FontAwesome name="credit-card" size={24} color="#D33A39" />
            <BoldText
              style={{ fontSize: 24, marginLeft: 10, fontWeight: 'bold' }}
            >
              Credit Card
            </BoldText>
          </View>
          <Ionicons name="checkmark-done-circle" size={24} color="white" />
        </View>
        <View style={styles.name}>
          <NormalText style={{ fontSize: 22, fontWeight: '700' }}>
            Thompson
          </NormalText>
        </View>
        <BoldText style={{ fontSize: 22, marginTop: 2 }}>
          3456 6675 57438 ****
        </BoldText>
        <NormalText style={{ fontSize: 22, marginTop: 2 }}>
          Expiry: 12/13
        </NormalText>
      </View>
      <View style={styles.lowercont}>
        <Ionicons name="card-outline" size={24} color="#D33A39" />
        <BoldText style={{ fontSize: 24, marginLeft: 10, fontWeight: 'bold' }}>
          Cash on Delivery
        </BoldText>
      </View>
      <View style={styles.footerbtn}>
        <Button
          onPress={() => navigation.navigate('Checkout3')}
          style={{
            width: 386,
            height: 38,
            fontSize: 8,
          }}
        >
          Place Order
        </Button>
      </View>
    </View>
  )
}

export default Checkout2

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
  cont: {
    backgroundColor: '#122332',
    width: 390,
    height: 186,
    marginVertical: 20,
    marginLeft: 12,
    paddingTop: 10,
    paddingLeft: 15,
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
  lowercont: {
    marginTop: 50,
    backgroundColor: '#122332',
    width: 390,
    height: 96,
    marginLeft: 12,
    flexDirection: 'row',
    paddingTop: 12,
    paddingLeft: 15,
  },
  footerbtn: {
    marginStart: 13,
    marginTop: 270,
  },
})
