import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import React from 'react'
import { BoldText } from '../components/Text'
import { LANGUAGE } from '../Model/data'

const ModelPicker = ({ setisModalVisible, setData }) => {
  const onPresskey = ({ item }) => {
    setisModalVisible(false)
  }
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={LANGUAGE}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={onPresskey}>
            <Image style={styles.logo} source={item.image} />
            <BoldText style={styles.txt}>{item.title}</BoldText>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default ModelPicker

const styles = StyleSheet.create({
  container: {
    marginTop: 490,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#04172A',
    width: 308,
    height: 58,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
    paddingLeft: 30,
  },
  logo: {
    marginRight: 20,
  },
})
