import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { BoldText } from '../components/Text'
const Thank = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.uppertext}>
        <BoldText style={styles.toptext}>THANK YOU!</BoldText>
      </View>
      <View style={styles.imgcont}>
        <Image
          style={styles.img}
          source={require('../assets/images/Thank.png')}
        />
        <View style={styles.remark}>
          <Button
            style={{ width: 363, height: 38, marginTop: 120 }}
            textStyle={{ fontSize: 22 }}
          >
            Exit
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Thank

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
    paddingTop: 50,
  },
  uppertext: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  toptext: {
    fontSize: 24,
  },
  imgcont: {
    alignItems: 'center',
    marginTop: 100,
  },
  remark: {
    width: '100%',
    height: 348,
    alignItems: 'center',
    borderColor: 'white',
    marginTop: 50,
  },
})
