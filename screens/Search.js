import {
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import NormalText, { BoldText } from '../components/Text'
import { CartContext } from '../Util/Cartcontext'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import Button from '../components/Button'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Search = ({ navigation }) => {
  const { itemNumber1, setItemNumber1 } = useContext(CartContext)
  const { itemNumber2, setItemNumber2 } = useContext(CartContext)

  return (
    <View style={styles.container}>
      <View style={styles.searchsection}>
        <View style={styles.uppertext}>
          <BoldText style={styles.toptext}>
            Search for blood types, lab info, med lab etc.
          </BoldText>
        </View>
        <View style={styles.searchcontainer}>
          <AntDesign name="search1" size={20} color="white" />
          <TextInput
            style={styles.input}
            placeholderTextColor="grey"
            placeholder="Search for blood..."
          />
          <FontAwesome5 name="sliders-h" size={22} color="white" />
        </View>
      </View>
      <View style={styles.searchtextcontainer}>
        <NormalText style={styles.searchtext}>Search Result</NormalText>
      </View>
      <View style={styles.result}>
        <View style={styles.searchresult}>
          <View style={styles.leftcontent}>
            <Image
              style={styles.leftimage}
              source={require('../assets/images/Search1.png')}
            />
            <View style={styles.price}>
              <NormalText style={{ fontSize: 12 }}>Price</NormalText>
              <NormalText style={{ fontSize: 12 }}>N150000.00</NormalText>
            </View>
            <View style={styles.amountcontainer}>
              <NormalText style={{ fontSize: 12 }}>Amount</NormalText>
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
                <NormalText style={{ paddingHorizontal: 7, fontSize: 14 }}>
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
          <View style={styles.rightcontent}>
            <NormalText style={{ color: 'grey', fontSize: 12 }}>
              Info
            </NormalText>
            <NormalText style={{ fontSize: 12 }}>Lab: Assured Life</NormalText>
            <NormalText style={{ fontSize: 12 }}>Blood type: O+</NormalText>
            <NormalText style={{ fontSize: 12 }}>
              Can donate to: O+ b+ A+
            </NormalText>
            <NormalText style={{ fontSize: 12 }}>
              Can receive from O+ 0-
            </NormalText>
            <NormalText style={{ fontSize: 12 }}>Pints available: 6</NormalText>
            <Button
              onPress={() => navigation.navigate('Cart')}
              style={{ width: 100, height: 26, fontSize: 8 }}
            >
              Add to cart
            </Button>
          </View>
        </View>
      </View>
      <View style={styles.result}>
        <View style={styles.searchresult}>
          <View style={styles.leftcontent}>
            <Image
              style={styles.leftimage}
              source={require('../assets/images/Search2.png')}
            />
            <View style={styles.price}>
              <NormalText style={{ fontSize: 12 }}>Price</NormalText>
              <NormalText style={{ fontSize: 12 }}>N150000.00</NormalText>
            </View>
            <View style={styles.amountcontainer}>
              <NormalText style={{ fontSize: 12 }}>Amount</NormalText>
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
                <NormalText style={{ paddingHorizontal: 7, fontSize: 14 }}>
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
          <View style={styles.rightcontent}>
            <NormalText style={{ color: 'grey', fontSize: 12 }}>
              Info
            </NormalText>
            <NormalText style={{ fontSize: 12 }}>Lab: Perry's lab</NormalText>
            <NormalText style={{ fontSize: 12 }}>Blood type: A+</NormalText>
            <NormalText style={{ fontSize: 12 }}>
              Can donate to: A+ AB+
            </NormalText>
            <NormalText style={{ fontSize: 12 }}>
              Can receive from: A+ A- O+
            </NormalText>
            <NormalText style={{ fontSize: 12 }}>
              Pints available: l8
            </NormalText>
            <Button
              onPress={() => navigation.navigate('Cart')}
              style={{ width: 100, height: 26, fontSize: 8 }}
            >
              Add to cart
            </Button>
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginVertical: 30 }}>
        <NormalText style={{ fontSize: 15 }}>Load more......</NormalText>
      </View>
      <View style={styles.lowercontainer}>
        <View style={styles.singlecontent}>
          <Image
            style={styles.contentimg}
            source={require('../assets/images/Search4.png')}
          />
          <NormalText>Total available pints</NormalText>
        </View>
        <View style={styles.singlecontent}>
          <Image
            style={styles.contentimg}
            source={require('../assets/images/Search5.png')}
          />
          <NormalText>All Available Blood Groups</NormalText>
        </View>
        <View style={styles.singlecontent}>
          <Image
            style={styles.contentimg}
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
  searchsection: {
    alignItems: 'center',
  },
  uppertext: {
    marginTop: 50,
  },
  toptext: {
    fontSize: 17,
  },
  searchtextcontainer: {
    alignItems: 'center',
  },
  searchcontainer: {
    flexDirection: 'row',
    backgroundColor: '#122332',
    width: '90%',
    marginTop: 20,
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 10,
    width: '80%',
    color: '#ffffff',
    paddingLeft: 4,
    fontSize: 20,
  },
  searchtext: {
    marginTop: 20,
    fontSize: 15,
    marginLeft: 20,
  },
  result: {
    alignItems: 'center',
  },
  searchresult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#122332',
    width: '90%',
    height: 200,
    paddingTop: 20,
    marginTop: 20,
    paddingHorizontal: 25,
  },
  leftimage: {
    width: 120,
    height: 90,
    borderWidth: 1,
    borderColor: 'black',
  },
  price: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  right: {
    paddingTop: 5,
  },
  amountcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lowercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  singlecontent: {
    backgroundColor: '#122332',
    height: 130,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentimg: {
    marginBottom: 13,
  },
})
