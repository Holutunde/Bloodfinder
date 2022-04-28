import {
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native'
import SvgUri from 'expo-svg-uri'
import React from 'react'
import { DONORS, LAB } from '../Model/data'
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons'
import NormalText, { BoldText } from '../components/Text'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topcont}>
        <View style={styles.leftcont}>
          <Feather name="menu" size={30} color="#ffffff" />
          <NormalText style={{ fontSize: 25 }}>Home</NormalText>
        </View>
        <View style={styles.rightcont}>
          <FontAwesome name="bell" size={22} color="#9F9C9C" />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <FontAwesome name="search" size={22} color="#9F9C9C" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imgcont}>
        <Image
          style={styles.img}
          source={require('../assets/images/R520.png')}
        />
      </View>
      <View style={styles.txtcont}>
        <NormalText>Blood delivery has neve been easier!</NormalText>
      </View>
      <View style={styles.labcont}>
        <View style={styles.header}>
          <NormalText style={{ fontSize: 15 }}>Registered Labs</NormalText>
          <Ionicons name="arrow-forward-outline" size={18} color="#ffffff" />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={LAB}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image style={styles.logo} source={item.image} />
              <NormalText style={styles.txt}>{item.title}</NormalText>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.labcont}>
        <View style={styles.header}>
          <NormalText style={{ fontSize: 15 }}>Popular Donors</NormalText>
          <Ionicons name="arrow-forward-outline" size={18} color="#ffffff" />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DONORS}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image style={styles.logo} source={item.image} />
              <NormalText style={styles.txt}>{item.title}</NormalText>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.labcont}>
        <View style={styles.header}>
          <NormalText style={{ fontSize: 15 }}>Health tips</NormalText>
          <Ionicons name="arrow-forward-outline" size={18} color="#ffffff" />
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={LAB}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image style={styles.logo} source={item.image} />
              <NormalText style={styles.txt}>{item.title}</NormalText>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#0a1e30',
  },
  topcont: {
    marginTop: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftcont: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightcont: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgcont: {
    marginTop: 30,
    alignItems: 'center',
  },
  img: {
    alignItems: 'center',
    width: 375,
    height: 240,
  },
  txtcont: {
    marginVertical: 10,
    alignItems: 'center',
  },
  labcont: {
    marginLeft: 18,
    height: 125,
    width: 373,
    paddingLeft: 5,
    marginVertical: 10,
    backgroundColor: '#122332',
  },
  header: {
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    justifyContent: 'center',
    margin: 7,
  },
  title: {
    fontSize: 32,
  },
  logo: {
    borderWidth: 1,
    borderColor: 'black',
    width: 70,
    height: 60,
  },
  txt: {
    marginTop: 2,
    fontSize: 9,
    marginLeft: 10,
  },
})
