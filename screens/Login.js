import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SingleHeader } from '../components/Header'
import Toptext from '../components/Toptext'

const Login = () => {
  return (
    <View style={styles.content}>
      <View style={styles.toptext}>
        <Toptext />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#0F192B',
  },
  toptext: {
    paddingTop: 50,
  },
})
