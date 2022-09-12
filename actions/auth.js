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

export const login = (user) => (dispatch) => {
  dispatch(loading(true))
  apiRequest('api/auth/login/', 'POST', user)
    .then(({ data }) => {
      if (!data) {
        Alert.alert(`Kindly input login details`)
      }
      dispatch(saveUser(data))
      Alert.alert(`login successful`)
    })
    .catch((err) => {
      showApiError(err, true, () => dispatch(login(user)))
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

// export const login = (user) => (dispatch) => {
//   dispatch({
//     type: LOADING,
//     payload: true,
//   })

//   apiRequest('/users/login', 'post', user)
//     .then(({ data }) => {
//       console.log('login', data)

//       const {
//         data: {
//           expiresIn,
//           token: accessToken,
//           refreshToken,
//           user: userData,
//         },
//       } = data
//       dispatch(saveUser({ expiresIn, accessToken, refreshToken }, userData))
//       NavigationService.navigate('Home')
//     })
//     .catch((err) => {
//       showApiError(err, true, () => dispatch(login(user)))
//     })
//     .finally(() => {
//       dispatch({
//         type: LOADING,
//         payload: false,
//       })
//     })
// }
