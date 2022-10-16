import axios from 'axios'
import { AsyncStorage, Alert } from 'react-native'

const API_URL = 'https://bloodfinder-api.herokuapp.com/bloodfinder/users'

export const apiRequest = async (endpoint, method, body = {}, token) => {
  try {
    //const token = await AsyncStorage.getItem('token')

    const url = `${API_URL}${endpoint}`

    const request = await axios(url, {
      data: method === 'GET' ? null : { ...body },
      method: method.toUpperCase(),
      headers: {
        Authorization: token ? `Bearer ${JSON.parse(token)}` : null,
        'Content-Type': `application/json`,
        Accept: '*/*',
      },
    })

    return request
  } catch (error) {
    console.log('api', error.response)
  }
}

export const showApiError = (err, title = 'Error') => {
  // console.log("Error Received in Function", err);
  // Alert.alert(title, err, [
  // 	{ text: "Dismiss", onPress: () => console.log("OK Pressed") },
  // ]);
  const message =
    err.name == undefined || err.response?.data
      ? `${Object.values(err.response.data)[0]}`
      : err.response?.data?.error || err.response?.data?.error || err.message

  // if (message && err.response?.status !== 401) {
  console.log('This is the error message: ' + message)
  if (message) {
    Alert.alert(title, message, [
      { text: 'Dismiss', onPress: () => console.log('OK Pressed') },
    ])
  }
}
