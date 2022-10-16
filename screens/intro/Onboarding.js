import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AppIntroSlider from 'react-native-app-intro-slider'
import { useNavigation } from '@react-navigation/native'

const slides = [
  {
    key: 1,
    image: require('../../assets/images/onboarding/BloodHQ.png'),
  },
  {
    key: 2,
    image: require('../../assets/images/onboarding/pint.png'),
  },
  {
    key: 3,
    text: 'Blood Quality',
    image: require('../../assets/images/onboarding/redheart.png'),
  },
]

const Onboarding = () => {
  const navigation = useNavigation()
  const _onDone = () => {
    navigation.navigate('GetStarted')
  }
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item.text}</Text>
      </View>
    )
  }
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonStyle}>
        <Ionicons name="arrow-forward" color="white" size={24} />
      </View>
    )
  }
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonStyle}>
        <Ionicons name="checkmark" size={24} color="white" />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <AppIntroSlider
        onDone={_onDone}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderItem={_renderItem}
        data={slides}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  dotStyle: {
    backgroundColor: 'white',
    marginRight: 10,
    width: 10,
  },
  activeDotStyle: {
    backgroundColor: 'red',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '40%',
    width: '65%',
    resizeMode: 'contain',
  },
  textStyle: {
    color: '#dbd5d5',
    fontSize: 25,
    fontFamily: 'DMSansBold',
  },
  buttonStyle: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Onboarding
