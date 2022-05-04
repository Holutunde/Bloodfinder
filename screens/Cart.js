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
  const { itemNumber1, setItemNumber1 } = useContext(CartContext)
  const { itemNumber2, setItemNumber2 } = useContext(CartContext)
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
            <View style={styles.leftcont}>
              <View style={styles.upperleft}>
                <Image
                  style={styles.img}
                  source={require('../assets/images/Search4.png')}
                />
                <NormalText>Perry's Lab</NormalText>
              </View>
            </View>
            <View style={styles.lowerleft}>
              <Image
                style={styles.lowerimg}
                source={require('../assets/images/Search5.png')}
              />
            </View>
          </View>
          <View style={styles.middle}>
            <NormalText>Description</NormalText>
            <NormalText>2 pints of O+</NormalText>
            <NormalText>N30,000</NormalText>
            <View style={styles.cont}>
              <View style={styles.innercont}>
                <FontAwesome5 name="edit" size={24} color="white" />
                <NormalText>Edit</NormalText>
              </View>
              <View style={styles.innercont}>
                <FontAwesome5 name="remove-format" size={24} color="white" />
                <NormalText>Remove</NormalText>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <Entypo name="dots-three-vertical" size={12} color="white" />
          </View>
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
    marginTop: 50,
  },
  toptext: {
    fontSize: 20,
  },
  searchcont: {
    flexDirection: 'row',
    backgroundColor: '#122332',
    width: 378,
    marginTop: 20,
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
  },
  left: {},
  leftcont: {},
  upperleft: {},
  img: {},

  lowerleft: {},
  lowerimg: {},
})
