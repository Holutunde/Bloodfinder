import { StyleSheet, Text, View } from 'react-native'
import { BoldText } from './Text'
import React from 'react'

const Toptext = () => {
  return (
    <View style={styles.container}>
      <BoldText style={{ color: 'white', fontSize: 50 }}>Blood</BoldText>
      <BoldText style={{ color: 'red', fontSize: 50 }}>HQ</BoldText>
    </View>
  )
}

export default Toptext

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
