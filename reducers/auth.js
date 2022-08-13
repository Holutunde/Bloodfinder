import { AsyncStorage } from 'react-native'
import {
  SAVE_TOKEN,
  SIGN_OUT,
  SAVE_USER,
  GET_CURRENT_USER,
  REG_USER,
  LOADING,
} from '../types'

const initialState = {
  regData: {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    role: '',
  },
  user: {
    email: '',
    password: '',
  },
  token: null,
  isLoading: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REG_USER:
      return {
        ...state,
        regData: { ...payload },
      }

    case SAVE_USER:
      //AsyncStorage.setItem('user', JSON.stringify(payload))
      return {
        ...state,
        user: payload,
      }
    case LOADING:
      return { ...state, isLoading: payload }
    default:
      return state
  }
}

export default authReducer
