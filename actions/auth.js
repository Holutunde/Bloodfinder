import axios from 'axios'
import { Alert } from 'react-native'

import {
  SAVE_TOKEN,
  SAVE_USER,
  SIGN_OUT,
  LOADING,
  REFRESHING,
  GET_CURRENT_USER,
  REG_USER,
} from '../types'
import NavigationService from '../Navigation/NavigationService'
import { apiRequest, showApiError } from '../helpers/api'

export const regUser = (data) => ({
  type: REG_USER,
  payload: data,
})

export const saveUser = (data) => ({
  type: SAVE_USER,
  payload: data,
})
export const loading = (data) => ({
  type: LOADING,
  payload: data,
})

export const login = (data) => (dispatch) => {
  dispatch(loading(true))
  apiRequest('users/login', 'POST', data)
    .then(({ data }) => {
      console.log('login', data)

      if (data.error) {
        console.log('data error')
      }
      dispatch(saveUser(data))
      NavigationService.navigate('Home')
    })
    .catch((err) => console.log('wrong input'))
    .finally(() => {
      dispatch(loading(false))
    })
}

export const signup = (user) => (dispatch) => {
  dispatch(loading(true))

  apiRequest('/register', 'POST', data)
    .then(({ data }) => {
      console.log('login', data)
      //   const {
      //     data: {
      //       expiresIn,
      //       token: accessToken,
      //       refreshToken,
      //       user: userData,
      //     },
      //   } = data
      dispatch(saveUser(userData))
      NavigationService.navigate('Login')
    })
    .catch((err) => {
      f
      showApiError(err, true, () => dispatch(login(user)))
    })
    .finally(() => {
      dispatch(loading(false))
    })
}
