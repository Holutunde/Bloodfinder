import {
  StyleSheet,
  TextInput,
  Image,
  SafeAreaView,
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
    <SafeAreaView style={styles.container}>
      <View style={styles.uppercontent}>
        <View style={styles.uppertext}>
          <BoldText style={styles.toptext}>Shopping Cart</BoldText>
        </View>
        <View style={styles.cartdetails}>
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
                style={styles.upperleftimage}
                source={require('../assets/images/Search1.png')}
              />
              <NormalText style={{ fontSize: 15, paddingLeft: 10 }}>
                Perry's Lab
              </NormalText>
            </View>
            <View style={styles.lowerleft}>
              <Image
                style={styles.lowerleftimage}
                source={require('../assets/images/Search5.png')}
              />
            </View>
          </View>
          <View style={styles.middlecontent}>
            <NormalText style={{ fontSize: 13 }}>Description</NormalText>
            <NormalText style={{ marginTop: 12, fontSize: 12 }}>
              2 pints of O+
            </NormalText>
            <NormalText style={{ fontSize: 11 }}>N30,000.00</NormalText>
            <View style={styles.allcontrol}>
              <View style={styles.controls}>
                <FontAwesome5 name="edit" size={11} color="white" />
                <NormalText style={{ marginLeft: 7, fontSize: 11 }}>
                  Edit
                </NormalText>
              </View>
              <View style={styles.controls}>
                <FontAwesome5 name="remove-format" size={11} color="white" />
                <NormalText style={{ marginLeft: 7, fontSize: 11 }}>
                  Remove
                </NormalText>
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
                style={styles.upperleftimage}
                source={require('../assets/images/Search1.png')}
              />
              <NormalText style={{ fontSize: 15, paddingLeft: 10 }}>
                Assured Life
              </NormalText>
            </View>
            <View style={styles.lowerleft}>
              <Image
                style={styles.lowerleftimage}
                source={require('../assets/images/Search5.png')}
              />
            </View>
          </View>
          <View style={styles.middlecontent}>
            <NormalText style={{ fontSize: 13 }}>Description</NormalText>
            <NormalText style={{ marginTop: 12, fontSize: 12 }}>
              2 pints of O+
            </NormalText>
            <NormalText style={{ fontSize: 11 }}>N30,000.00</NormalText>
            <View style={styles.allcontrol}>
              <View style={styles.controls}>
                <FontAwesome5 name="edit" size={11} color="white" />
                <NormalText style={{ marginLeft: 7, fontSize: 11 }}>
                  Edit
                </NormalText>
              </View>
              <View style={styles.controls}>
                <FontAwesome5 name="remove-format" size={11} color="white" />
                <NormalText style={{ marginLeft: 7, fontSize: 11 }}>
                  Remove
                </NormalText>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <Entypo name="dots-three-vertical" size={16} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.lower}>
        <View style={styles.ordersummary}>
          <View style={styles.chargestitle}>
            <BoldText>Sub-total</BoldText>
            <BoldText>Value Added Tax(VAT)</BoldText>
            <BoldText>Delivery Charges</BoldText>
            <BoldText style={{ color: '#D33A39' }}>Order Total</BoldText>
          </View>
          <View style={styles.chargesprice}>
            <BoldText>N75,000.00</BoldText>
            <BoldText>N5.00</BoldText>
            <BoldText>N2000.00</BoldText>
            <BoldText>N77,010.00</BoldText>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.footertext}>
            <NormalText style={{ fontSize: 14 }}>
              {addItemNumber} Items on cart
            </NormalText>
            <NormalText style={{ fontSize: 12 }}>N77,010.00</NormalText>
          </View>

          <Button
            onPress={() => navigation.navigate('Checkout1')}
            style={{ width: 131, height: 36, fontSize: 8 }}
          >
            Secure Checkout
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  uppercontent: {
    alignItems: 'center',
  },
  uppertext: {
    marginTop: 10,
  },
  toptext: {
    fontSize: 24,
  },
  cartdetails: {
    flexDirection: 'row',
    backgroundColor: '#122332',
    width: '90%',
    marginTop: 35,
    height: 62,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#122332',
    width: '90%',
    marginTop: 20,
    height: 140,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  upperleft: {
    flexDirection: 'row',
  },
  upperleftimage: {
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
  lowerleftimage: {
    width: 17,
    height: 22,
  },
  middlecontent: {
    width: 120,
    marginTop: 5,
  },
  allcontrol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  controls: {
    flexDirection: 'row',
  },
  ordersummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
    marginVertical: 40,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 45,
    marginTop: 10,
  },
})
