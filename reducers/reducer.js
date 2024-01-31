import {
  SAVE_TOKEN,
  SIGN_OUT,
  SAVE_USER,
  UPDATE_SIGNED_IN_STATUS,
  UPDATE_INTRO_STATUS,
  GET_CURRENT_USER,
  REG_USER,
  LOADING,
} from "../types";

const initialState = {
  regData: {
    email: "",
    username: "",
    password: "",
  },
  userData: {
    email: "",
    password: "",
  },
  startStatus: false,
  token: null,
  isLoading: false,
  signedStatus: false,
  isLoggedIn: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REG_USER:
      return {
        ...state,
        regData: payload,
      };
    case UPDATE_SIGNED_IN_STATUS:
      return { ...state, signedStatus: payload };
    case UPDATE_INTRO_STATUS:
      return { ...state, startStatus: payload };
    case SAVE_USER:
      return {
        ...state,
        userData: payload,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: payload,
        isLoggedIn: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        user: null,
        isLoggedIn: false,
      };
    case LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
};
