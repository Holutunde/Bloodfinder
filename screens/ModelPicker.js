import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import React from 'react'

const ModelPicker = () => {
  const options = ['red', 'blue', 'yello', 'green', 'black']

  const option = options.map((select, index) => {
    return (
      <View>
        <Text>ModelPicker</Text>
      </View>
    )
  })
}

export default ModelPicker

const styles = StyleSheet.create({})
