import {
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  View,
} from 'react-native'
import React from 'react'
import { DONORS, LAB } from '../Model/data'
import { FontAwesome, Feather, Ionicons } from '@expo/vector-icons'
import NormalText from '../components/Text'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.leftcontent}>
          <Feather name="menu" size={30} color="#ffffff" />
          <NormalText style={{ fontSize: 20, paddingTop: 7 }}>Home</NormalText>
        </View>
        <View style={styles.rightcontent}>
          <FontAwesome name="bell" size={22} color="#ffffff" />
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <FontAwesome name="search" size={22} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.herocontainer}>
        <Image
          style={styles.heroimage}
          source={require('../assets/images/R520.png')}
        />
      </View>
      <View style={styles.textcontainer}>
        <NormalText style={{ fontSize: 15 }}>
          Blood delivery has neve been easier!
        </NormalText>
      </View>
      <View style={styles.allcontent}>
        <View style={styles.labcontainer}>
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
                <NormalText style={styles.title}>{item.title}</NormalText>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.labcontainer}>
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
        <View style={styles.labcontainer}>
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
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  topcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  leftcontent: {
    width: 105,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightcontent: {
    width: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  herocontainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  heroimage: {
    alignItems: 'center',
    width: '90%',
  },
  textcontainer: {
    marginVertical: 14,
    alignItems: 'center',
  },
  allcontent: {
    alignItems: 'center',
  },
  labcontainer: {
    marginVertical: 10,
    width: '90%',
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
  title: {
    marginTop: 2,
    fontSize: 9,
    marginLeft: 10,
  },
})
