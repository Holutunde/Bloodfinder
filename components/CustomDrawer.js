import React from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import NormalText from './Text'

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#122332' }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#364555' }}
      >
        <View style={{ paddingLeft: 30, paddingBottom: 25 }}>
          <Image
            source={require('../assets/images/bloodprofile.png')}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            Green's Lab
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#fff',
                marginTop: 10,
              }}
            >
              View profile
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#122332' }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 15,
          }}
        >
          <NormalText style={{ color: 'white', fontSize: 23 }}>
            Blood
          </NormalText>
          <NormalText style={{ color: 'red', fontSize: 23 }}>HQ</NormalText>
        </View>
      </View>
    </View>
  )
}

export default CustomDrawer
