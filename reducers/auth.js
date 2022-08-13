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
    email: '',
    password: '',
    role: '',
  },
  user: null,
  token: null,
  isLoading: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REG_USER:
      return {
        ...state,
        regData: { ...action.data },
      }

    case SAVE_USER:
      //AsyncStorage.setItem('user', JSON.stringify(payload))
      return {
        ...state,
        user: action.data,
      }
    case LOADING:
      return { ...state, isLoading: action.data }
    default:
      return state
  }
}

export default authReducer
