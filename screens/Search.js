import {
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import NormalText, { BoldText } from '../components/Text'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import Button from '../components/Button'

const Search = () => {
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
                <TouchableOpacity>
                  <AntDesign name="minuscircle" size={15} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
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
              source={require('../assets/images/Search1.png')}
            />
            <View style={styles.textcont}>
              <NormalText>Price</NormalText>
              <NormalText>N150000.00</NormalText>
            </View>
            <View style={styles.ltextcont}>
              <NormalText>Amount</NormalText>
              <View style={styles.logic}>
                <TouchableOpacity>
                  <AntDesign name="minuscircle" size={15} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
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
              style={{ width: 100, height: 26, fontSize: 8 }}
              text="Add to cart"
            />
          </View>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <NormalText>Load more......</NormalText>
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
})
