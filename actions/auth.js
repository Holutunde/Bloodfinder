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

export const updateSignedInStatus = () => ({
  type: UPDATE_SIGNED_IN_STATUS,
  payload: true,
})
export const saveUser = (user) => ({
  type: SAVE_USER,
  payload: user,
})
export const loading = (data) => ({
  type: LOADING,
  payload: data,
})

export const login = (user, navigation) => (dispatch) => {
  dispatch({
    type: LOADING,
    payload: true,
  })
  apiRequest('api/auth/login/', 'POST', user)
    .then(({ data }) => {
      if (data.user == '') {
        Alert.alert(`Kindly input login details`)
      }
      console.log(data)
      dispatch(saveUser(data))
      dispatch({
        type: UPDATE_SIGNED_IN_STATUS,
        payload: true,
      })
      Alert.alert(`login successful`)
    })
    .catch((err) => {
      showApiError(err, true, () => dispatch(login(user)))
      console.log('Error =>>>> ', err)
      dispatch(updateSignedInStatus(false))
    })
    .finally(() => {
      dispatch(loading(false))
    })
}
export const register = (createUser) => (dispatch) => {
  dispatch(loading(true))
  apiRequest('api/auth/register/', 'POST', createUser)
    .then(({ data }) => {
      if (!data) {
        Alert.alert(`Kindly input login details`)
      }
      dispatch(regUser(data))
      Alert.alert(`signup successful`)
      console.log(data)
    })
    .catch((err) => {
      showApiError(err, true, () => dispatch(register(createUser)))
    })
    .finally(() => {
      dispatch(loading(false))
    })
}
