/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { AsyncStorage, Alert } from 'react-native'

//import NavigationService from '../navigation/NavigationService'
// import store from '../store'
// import { SAVE_TOKEN } from '../types'

const API_URL = 'https://job-api-99.herokuapp.com/'

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

export const showApiError = (
  err,
  tryAgain = true,
  tryAgainFunc = null,
  tryAgainText = 'Try Again',
  title = '',
) => {
  const message =
    err.response?.data?.message || err.response?.data?.detail || err.message

  if (message && err.response?.status !== 401) {
    Alert.alert(title, message, [
      { text: 'Dismiss' },
      tryAgain && {
        text: tryAgainText,
        onPress: tryAgainFunc,
      },
    ])
  }
}