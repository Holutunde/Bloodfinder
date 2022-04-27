import { StyleSheet, Image, FlatList, Text, View } from 'react-native'
import SvgUri from 'expo-svg-uri'
import React from 'react'
import { DONORS, LAB } from '../Model/data'
import NormalText, { BoldText } from '../components/Text'

const Home = () => {
  return (
    <View style={styles.container}>
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
          <NormalText>Registered Labs</NormalText>
        </View>
        <FlatList
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
          <NormalText>Popular Donors</NormalText>
        </View>
        <FlatList
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
          <NormalText>Registered Labs</NormalText>
        </View>
        <FlatList
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
    alignItems: 'center',
    backgroundColor: '#0a1e30',
  },
  imgcont: {
    marginTop: 60,
  },
  img: {
    alignItems: 'center',
    width: 375,
    height: 240,
  },
  txtcont: {
    marginVertical: 10,
  },
  labcont: {
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
