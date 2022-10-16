import { StyleSheet, SafeAreaView, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import NormalText, { BoldText } from '../../components/Text'
import Button from '../../components/Button'
import { updateIntroStatus } from '../../actions/auth'
import { saveAsyncData } from '../../helpers/storage'
import SelectDropDown from './DropDown'
import { useDispatch } from 'react-redux'

const GetStarted = () => {
  const dispatch = useDispatch()
  const proceed = () => {
    saveAsyncData('introHasBeenPlayed', true)
    dispatch(updateIntroStatus(true))
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <ImageBackground
          style={styles.img1}
          source={require('../../assets/images/Getstarted2.png')}
        >
          <View style={styles.txtcont}>
            <BoldText style={{ color: 'white', fontSize: 44, lineHeight: 63 }}>
              WELCOME
            </BoldText>
            <NormalText style={{ color: 'white', fontSize: 17 }}>
              Lets get started
            </NormalText>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.img2}
          source={require('../../assets/images/Getstarted1.png')}
        ></ImageBackground>
      </View>

      <View style={styles.down}>
        <BoldText style={{ color: 'black', fontSize: 24, marginVertical: 30 }}>
          Select Language
        </BoldText>
        <SelectDropDown />

        <Button
          textStyle={{
            fontSize: 20,
          }}
          style={{
            borderRadius: 30,
            width: '80%',
            height: 58,
            borderColor: '#D33A39',
            marginTop: 50,
          }}
          onPress={proceed}
        >
          PROCEED
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },

  background: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '60%',
  },
  img1: {
    height: 390,
    width: 270,
  },

  img2: {
    height: 230,
    width: 100,
  },
  txtcont: {
    marginTop: 320,
    justifyContent: 'center',
    marginLeft: 40,
  },
  down: {
    backgroundColor: '#FFFFFF',
    height: '45%',
    alignItems: 'center',
  },
  picker: {
    backgroundColor: '#04172A',
    flexDirection: 'row',
    width: 308,
    height: 58,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 33,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
  },
  left: {
    flexDirection: 'row',
  },
})
