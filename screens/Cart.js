import {
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import NormalText, { BoldText } from '../components/Text'
import { CartContext } from '../Util/Cartcontext'
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons'
import Button from '../components/Button'

const Cart = ({ navigation }) => {
  const { addItemNumber } = useContext(CartContext)

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.uppertext}>
          <BoldText style={styles.toptext}>Shopping Cart</BoldText>
        </View>
        <View style={styles.searchcont}>
          <NormalText style={{ fontSize: 22, marginHorizontal: 22 }}>
            Your cart
          </NormalText>
          <Button style={{ width: 106, height: 36, fontSize: 8 }}>
            {addItemNumber} Items
          </Button>
        </View>
        <View style={styles.cart}>
          <View style={styles.left}>
            <View style={styles.upperleft}>
              <Image
                style={styles.img}
                source={require('../assets/images/Search1.png')}
              />
              <NormalText style={{ fontSize: 15, paddingLeft: 10 }}>
                Perry's Lab
              </NormalText>
            </View>
            <View style={styles.lowerleft}>
              <Image
                style={styles.lowerimg}
                source={require('../assets/images/Search5.png')}
              />
            </View>
          </View>
          <View style={styles.middle}>
            <NormalText style={{ fontSize: 12 }}>Description</NormalText>
            <NormalText style={{ marginTop: 10 }}>2 pints of O+</NormalText>
            <NormalText style={{ marginTop: 5 }}>N30,000.00</NormalText>
            <View style={styles.cont}>
              <View style={styles.innercont}>
                <FontAwesome5 name="edit" size={9} color="white" />
                <NormalText style={{ marginLeft: 7 }}>Edit</NormalText>
              </View>
              <View style={styles.innercont}>
                <FontAwesome5 name="remove-format" size={9} color="white" />
                <NormalText style={{ marginLeft: 7 }}>Remove</NormalText>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <Entypo name="dots-three-vertical" size={16} color="white" />
          </View>
        </View>
        <View style={styles.cart}>
          <View style={styles.left}>
            <View style={styles.upperleft}>
              <Image
                style={styles.img}
                source={require('../assets/images/Search1.png')}
              />
              <NormalText style={{ fontSize: 15, paddingLeft: 10 }}>
                Assured Life
              </NormalText>
            </View>
            <View style={styles.lowerleft}>
              <Image
                style={styles.lowerimg}
                source={require('../assets/images/Search5.png')}
              />
            </View>
          </View>
          <View style={styles.middle}>
            <NormalText style={{ fontSize: 12 }}>Description</NormalText>
            <NormalText style={{ marginTop: 10 }}>2 pints of AB+</NormalText>
            <NormalText style={{ marginTop: 5 }}>N30,000.00</NormalText>
            <View style={styles.cont}>
              <View style={styles.innercont}>
                <FontAwesome5 name="edit" size={9} color="white" />
                <NormalText style={{ marginLeft: 7 }}>Edit</NormalText>
              </View>
              <View style={styles.innercont}>
                <FontAwesome5 name="remove-format" size={9} color="white" />
                <NormalText style={{ marginLeft: 7 }}>Remove</NormalText>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <Entypo name="dots-three-vertical" size={16} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.lower}>
        <View style={styles.acct}>
          <View style={styles.leftacct}>
            <BoldText>Sub-total</BoldText>
            <BoldText>Value Added Tax(VAT)</BoldText>
            <BoldText>Delivery Charges</BoldText>
            <BoldText style={{ color: '#D33A39' }}>Order Total</BoldText>
          </View>
          <View style={styles.rightacct}>
            <BoldText>N75,000.00</BoldText>
            <BoldText>N5.00</BoldText>
            <BoldText>N2000.00</BoldText>
            <BoldText>N77,005.00</BoldText>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footertxt}>
            <NormalText>{addItemNumber} Items on cart</NormalText>
            <NormalText>N77,005.00</NormalText>
          </View>

          <Button
            onPress={() => navigation.navigate('Checkout1')}
            style={{ width: 131, height: 36, fontSize: 8 }}
          >
            Secure Checkout
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  upper: {
    alignItems: 'center',
  },
  uppertext: {
    marginTop: 70,
  },
  toptext: {
    fontSize: 24,
  },
  searchcont: {
    flexDirection: 'row',
    backgroundColor: '#122332',
    width: 378,
    marginTop: 30,
    height: 62,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 10,
    width: 270,
    color: '#ffffff',
    paddingLeft: 20,
    fontSize: 20,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#122332',
    width: 378,
    marginTop: 20,
    height: 110,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  left: {},
  leftcont: {},
  upperleft: {
    flexDirection: 'row',
  },
  img: {
    width: 24,
    height: 23,
    borderColor: 'black',
    borderWidth: 0.5,
  },

  lowerleft: {
    marginTop: 10,
    backgroundColor: '#04172A',
    height: 33,
    width: 31,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  lowerimg: {
    width: 17,
    height: 22,
  },
  middle: {
    width: 100,
    marginTop: 5,
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  innercont: {
    flexDirection: 'row',
  },
  lower: {
    marginTop: 80,
  },
  acct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 45,
    marginTop: 122,
  },
})
