// import React, { useState } from 'react'
// import { Image, StyleSheet, Text, View } from 'react-native'
// import { Dropdown } from 'react-native-element-dropdown'
// import AntDesign from 'react-native-vector-icons/AntDesign'

// const data = [
//   { label: 'Item 1', value: '1' },
//   { label: 'Item 2', value: '2' },
//   { label: 'Item 3', value: '3' },
//   { label: 'Item 4', value: '4' },
//   { label: 'Item 5', value: '5' },
//   { label: 'Item 6', value: '6' },
//   { label: 'Item 7', value: '7' },
//   { label: 'Item 8', value: '8' },
// ]

// const LANGUAGE = [
//   {
//     id: 1,
//     title: 'ENGLISH',
//     image: require('../assets/images/country.png'),
//   },

//   {
//     id: 2,
//     title: 'GERMAN',
//     image: require('../assets/images/country.png'),
//   },

//   {
//     id: 3,
//     title: 'FRENCH',
//     image: require('../assets/images/country.png'),
//   },

//   {
//     id: 4,
//     title: 'CHINESE',
//     image: require('../assets/images/country.png'),
//   },
//   {
//     id: 5,
//     title: 'SPANISH',
//     image: require('../assets/images/country.png'),
//   },
//   {
//     id: 6,
//     title: 'FRENCH',
//     image: require('../assets/images/country.png'),
//   },

//   {
//     id: 7,
//     title: 'CHINESE',
//     image: require('../assets/images/country.png'),
//   },
//   {
//     id: 8,
//     title: 'SPANISH',
//     image: require('../assets/images/country.png'),
//   },
// ]

// import {
//   textInputBackground,
//   textInputBorder,
//   textBorderFocused,
//   inputTextColor,
// } from '../constants/color'
// const DropDown = () => {
//   const [value, setValue] = useState(null)
//   const [isFocus, setIsFocus] = useState(false)

//   const renderLabel = () => {
//     if (value || isFocus) {
//       return (
//         <Text style={[styles.label, isFocus && { color: 'blue' }]}>
//           Dropdown label
//         </Text>
//       )
//     }
//     return null
//   }

//   return (
//     <View style={styles.container}>
//       {renderLabel}
//       <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={LANGUAGE}
//         search
//         maxHeight={300}
//         labelField="title"
//         valueField="id"
//         placeholder={!isFocus ? 'ENGLISH' : '...'}
//         searchPlaceholder="Search..."
//         value={value}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={(item) => {
//           setValue(item.value)
//           setIsFocus(false)
//         }}
//         renderLeftIcon={() => (
//           // <AntDesign
//           //   style={styles.icon}
//           //   color={isFocus ? 'blue' : 'black'}
//           //   name="Safety"
//           //   size={20}
//           // />
//           <Image
//             style={styles.icon}
//             source={require('../assets/images/country.png')}
//           />
//         )}
//       />
//     </View>
//   )
// }

// export default DropDown

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     padding: 16,
//     width: '80%',
//   },
//   dropdown: {
//     height: 50,
//     borderColor: 'gray',
//     backgroundColor: '#04172A',
//     borderWidth: 0.5,
//     borderRadius: 30,
//     paddingHorizontal: 8,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//     color: '#FFFFFF',
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// })

import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
const { width } = Dimensions.get('window')
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import SelectDropdown from 'react-native-select-dropdown'

const SelectDropDown = () => {
  const LanguageWithFlags = [
    { title: 'Egypt', image: require('../assets/images/country.png') },
    { title: 'Canada', image: require('../assets/images/country.png') },
    { title: 'Australia', image: require('../assets/images/country.png') },
    { title: 'Ireland', image: require('../assets/images/country.png') },
    { title: 'Brazil', image: require('../assets/images/country.png') },
    { title: 'England', image: require('../assets/images/country.png') },
    { title: 'Dubai', image: require('../assets/images/country.png') },
  ]

  return (
    <SafeAreaView style={styles.saveAreaViewContainer}>
      <View style={styles.viewContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <SelectDropdown
            search
            searchInputTxtColor="#ffffff"
            searchPlaceholder={'Search...'}
            searchInputStyle={styles.searchInput}
            data={LanguageWithFlags}
            //defaultValueByIndex={0}
            onSelect={(selectedItem, index) => {}}
            buttonStyle={styles.dropdowncontainer}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.languagecontent}>
                  <View style={styles.leftcontent}>
                    {selectedItem ? (
                      <Image
                        source={selectedItem.image}
                        style={styles.languageImage}
                      />
                    ) : (
                      <Ionicons
                        name="md-earth-sharp"
                        color="#ffffff"
                        size={32}
                      />
                    )}
                    <Text style={styles.languageText}>
                      {selectedItem ? selectedItem.title : 'Language'}
                    </Text>
                  </View>
                  <FontAwesome name="chevron-up" color={'#ffffff'} size={18} />
                </View>
              )
            }}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdownRowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                  <Text style={styles.dropdownRowTxt}>{item.title}</Text>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SelectDropDown

const styles = StyleSheet.create({
  saveAreaViewContainer: {},
  viewContainer: { width },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#04172A',
    height: 70,
  },
  dropdowncontainer: {
    width: '80%',
    height: 58,
    backgroundColor: '#04172A',
    borderRadius: 30,
  },
  languagecontent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  leftcontent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  languageImage: {
    width: 24,
    height: 24,
  },
  languageText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 22,
    paddingLeft: 12,
  },
  dropdownStyle: {
    backgroundColor: '#04172A',
    borderRadius: 30,
  },
  dropdownRowStyle: {
    backgroundColor: '#04172A',
    height: 58,
  },
  dropdownRowChildStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  },
  dropdownRowTxt: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 24,
    marginLeft: 18,
  },
})
