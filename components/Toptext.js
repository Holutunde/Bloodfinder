import { StyleSheet, Text, View } from 'react-native'
import NormalText from './Text'
import React from 'react'

const Toptext = () => {
  return (
    <View style={styles.container}>
      <NormalText style={{ color: 'white', fontSize: 50 }}>Blood</NormalText>
      <NormalText style={{ color: 'red', fontSize: 50 }}>HQ</NormalText>
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
