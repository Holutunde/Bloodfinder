import { Alert } from 'react-native'

import {
  SAVE_TOKEN,
  SAVE_USER,
  SIGN_OUT,
  LOADING,
  UPDATE_INTRO_STATUS,
  UPDATE_SIGNED_IN_STATUS,
  REFRESHING,
  GET_CURRENT_USER,
  REG_USER,
} from '../types'

import { apiRequest, showApiError } from '../helpers/api'

export const updateIntroStatus = (data) => ({
  type: UPDATE_INTRO_STATUS,
  payload: data,
})

export const regUser = (data) => ({
  type: REG_USER,
  payload: data,
})

export const updateSignedInStatus = (data) => ({
  type: UPDATE_SIGNED_IN_STATUS,
  payload: data,
})

export const saveUser = (token, user) => (dispatch) => {
  dispatch({
    type: SAVE_TOKEN,
    payload: token,
  })

  dispatch({
    type: SAVE_USER,
    payload: user,
  })
}

export const loading = (data) => ({
  type: LOADING,
  payload: data,
})

export const login = (user) => (dispatch) => {
  dispatch(loading(true))
  apiRequest('/login', 'POST', user)
    .then(({ data }) => {
      const { token: accessToken, userData } = data
      dispatch(saveUser(accessToken, { userData }))
      Alert.alert(`login successful`)
    })
    .catch((err) => {
      showApiError(err)
      // console.log('Error =>>>>', err)
      dispatch(updateSignedInStatus(false))
    })
    .finally(() => {
      dispatch(loading(false))
    })
}
export const register = (createUser) => (dispatch) => {
  dispatch(loading(true))
  apiRequest('/register', 'POST', createUser)
    .then(({ data }) => {
      dispatch(regUser(data))
      Alert.alert(`signup successful`)
      console.log(data)
    })
    .catch((err) => {
      console.log('Error =>>>> ', err)
    })
    .finally(() => {
      dispatch(loading(false))
    })
}
