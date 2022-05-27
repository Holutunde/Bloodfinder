import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { BoldText } from '../components/Text'
import Button from '../components/Button'
import Input from '../components/Input'

const ResetPassword1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgcont}>
        <Image
          style={styles.img}
          source={require('../assets/images/Delivery.png')}
        />

        <BoldText style={{ fontSize: 22, marginTop: 90 }}>
          Package Safely Delivered?
        </BoldText>
        <Input
          style={{ color: '#FFFFFF' }}
          coverStyle={{ backgroundColor: '#0a1e30' }}
          placeholder="Phone number"
        />
        <Button style={{ borderRadius: 30, width: 308, height: 58 }}></Button>
      </View>
    </View>
  )
}

export default ResetPassword1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1e30',
  },
  imgcont: {
    alignItems: 'center',
    marginTop: 30,
  },
})
