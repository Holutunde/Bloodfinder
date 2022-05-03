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
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import Button from '../components/Button'

const Search = ({ navigation }) => {
  const { itemNumber1, setItemNumber1 } = useContext(CartContext)
  const { itemNumber2, setItemNumber2 } = useContext(CartContext)

  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.uppertext}>
          <BoldText style={styles.toptext}>
            Search for blood types, lab info, med lab etc.
          </BoldText>
        </View>
        <View style={styles.searchcont}>
          <AntDesign name="search1" size={20} color="white" />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Search for blood..."
          />
          <FontAwesome5 name="sliders-h" size={24} color="white" />
        </View>
      </View>
      <NormalText style={styles.searchtext}>Search Result</NormalText>
      <View style={styles.result}>
        <View style={styles.searchresult}>
          <View style={styles.left}>
            <Image
              style={styles.img}
              source={require('../assets/images/Search1.png')}
            />
            <View style={styles.textcont}>
              <NormalText>Price</NormalText>
              <NormalText>N150000.00</NormalText>
            </View>
            <View style={styles.ltextcont}>
              <NormalText>Amount</NormalText>
              <View style={styles.logic}>
                <TouchableOpacity
                  onPress={() =>
                    setItemNumber2(() => {
                      if (itemNumber2 <= 0) {
                        return 0
                      } else {
                        return itemNumber2 - 1
                      }
                    })
                  }
                >
                  <AntDesign name="minuscircle" size={15} color="white" />
                </TouchableOpacity>
                <NormalText style={{ paddingHorizontal: 4 }}>
                  {itemNumber2}
                </NormalText>
                <TouchableOpacity
                  onPress={() => setItemNumber2(itemNumber2 + 1)}
                >
                  <AntDesign name="pluscircle" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <NormalText style={{ color: 'grey' }}>Info</NormalText>
            <NormalText>Lab: Assured Life</NormalText>
            <NormalText>Blood type: O+</NormalText>
            <NormalText>Can donate to: O+ b+ A+ AB+</NormalText>
            <NormalText>Can receive from O+ 0-</NormalText>
            <NormalText>Pints available: 6</NormalText>
            <Button
              onPress={() => navigation.navigate('Cart')}
              style={{ width: 100, height: 26, fontSize: 8 }}
              text="Add to cart"
            />
          </View>
        </View>
      </View>
      <View style={styles.result}>
        <View style={styles.searchresult}>
          <View style={styles.left}>
            <Image
              style={styles.img}
              source={require('../assets/images/Search2.png')}
            />
            <View style={styles.textcont}>
              <NormalText>Price</NormalText>
              <NormalText>N150000.00</NormalText>
            </View>
            <View style={styles.ltextcont}>
              <NormalText>Amount</NormalText>
              <View style={styles.logic}>
                <TouchableOpacity
                  onPress={() =>
                    setItemNumber1(() => {
                      if (itemNumber1 <= 0) {
                        return 0
                      } else {
                        return itemNumber1 - 1
                      }
                    })
                  }
                >
                  <AntDesign name="minuscircle" size={15} color="white" />
                </TouchableOpacity>
                <NormalText style={{ paddingHorizontal: 4 }}>
                  {itemNumber1}
                </NormalText>
                <TouchableOpacity
                  onPress={() => setItemNumber1(itemNumber1 + 1)}
                >
                  <AntDesign name="pluscircle" size={15} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            <NormalText style={{ color: 'grey' }}>Info</NormalText>
            <NormalText>Lab: Perry's lab</NormalText>
            <NormalText>Blood type: A+</NormalText>
            <NormalText>Can donate to: A+ AB+</NormalText>
            <NormalText>Can receive from: A+ A- O+ 0-</NormalText>
            <NormalText>Pints available: l8</NormalText>
            <Button
              style={{ width: 100, height: 26, fontSize: 8 }}
              text="Add to cart"
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 50 }}>
        <NormalText>Load more......</NormalText>
      </View>
      <View style={styles.cont}>
        <View style={styles.singlecont}>
          <Image
            style={styles.contimg}
            source={require('../assets/images/Search4.png')}
          />
          <NormalText>Total available pints</NormalText>
        </View>
        <View style={styles.singlecont}>
          <Image
            style={styles.contimg}
            source={require('../assets/images/Search5.png')}
          />
          <NormalText>All Available Blood Groups</NormalText>
        </View>
        <View style={styles.singlecont}>
          <Image
            style={styles.contimg}
            source={require('../assets/images/Search6.png')}
          />
          <NormalText>Manual Search</NormalText>
        </View>
      </View>
    </View>
  )
}

export default Search

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
    width: 372,
    marginTop: 20,
    height: 40,
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
  searchtext: {
    marginTop: 20,
    marginLeft: 20,
  },
  result: {
    alignItems: 'center',
  },
  searchresult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#122332',
    width: 387,
    height: 166,
    paddingTop: 20,
    marginTop: 20,
    paddingHorizontal: 55,
  },
  img: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: 'black',
  },
  textcont: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  right: {
    paddingTop: 5,
  },
  ltextcont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  singlecont: {
    backgroundColor: '#122332',
    height: 130,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contimg: {
    marginBottom: 12,
  },
})
