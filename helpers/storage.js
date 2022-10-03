import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveAsyncData = async (key, data) => {
  try {
    const jsonValue = JSON.stringify(data)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {}
}

export const getAsyncData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return value != null ? JSON.parse(value) : null
  } catch (e) {}
}

export const removeAsyncData = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {}
}
