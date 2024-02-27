import { Alert } from "react-native";

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
  SAVE_OTP_TOKEN,
  VALID_USER,
  OTP_SENT,
} from "../types";

import { apiRequest, showApiError } from "../helpers/api";

export const updateIntroStatus = (data) => ({
  type: UPDATE_INTRO_STATUS,
  payload: data,
});

export const regUser = (data) => ({
  type: REG_USER,
  payload: data,
});

export const updateSignedInStatus = (data) => ({
  type: UPDATE_SIGNED_IN_STATUS,
  payload: data,
});

export const saveOTPToken = (otpToken) => (dispatch) => {
  dispatch({
    type: SAVE_OTP_TOKEN,
    payload: {
      otpToken: otpToken,
    },
  });

  dispatch({
    type: OTP_SENT,
    payload: true,
  });
};

export const validUser = (data) => ({
  type: VALID_USER,
  payload: data,
});

export const saveUser = (token, user) => (dispatch) => {
  dispatch({
    type: SAVE_TOKEN,
    payload: token,
  });

  dispatch({
    type: SAVE_USER,
    payload: user,
  });
};

export const loading = (data) => ({
  type: LOADING,
  payload: data,
});

export const login = (user) => (dispatch) => {
  dispatch(loading(true));
  apiRequest("/login", "POST", user)
    .then(({ data }) => {
      const { token: accessToken, userData } = data;
      dispatch(saveUser(accessToken, { userData }));
      Alert.alert(`login successful`);
    })
    .catch((err) => {
      showApiError(err);
      //console.log("Error =>>>>", err);
      // Alert.alert(`unable to login with provided details`);
      dispatch(updateSignedInStatus(false));
    })
    .finally(() => {
      dispatch(loading(false));
    });
};
export const resetPassword = (email) => (dispatch) => {
  dispatch(loading(true));

  apiRequest("/otp/generate", "POST", { email })
    .then(({ data }) => {
      dispatch(validUser(true));
      dispatch(saveOTPToken(data, true)); // Fix the syntax here
      Alert.alert("Success", `Token sent`);
    })
    .catch((err) => {
      console.log("Error =>>>> ", err);
      Alert.alert("Failed", `OTP not sent`);
    })
    .finally(() => {
      dispatch(loading(false));
    });
};

export const confirmOTP = (token, email) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(loading(true));

    apiRequest(`/otp/verify/${token}`, "POST", { token, email })
      .then(({ data }) => {
        Alert.alert("Success", `OTP Confirmed`);
        dispatch(loading(false));
        resolve(); // Resolve the promise to indicate successful OTP confirmation
      })
      .catch((err) => {
        console.log("Error =>>>> ");
        Alert.alert("Error", "Invalid OTP");
        dispatch(loading(false));
        reject(); // Reject the promise to indicate failure in OTP confirmation
      });
  });
};

export const changePassword =
  (email, newpassword, confirmpassword) => (dispatch) => {
    dispatch(loading(true));

    apiRequest(`/changepassword`, "POST", {
      email,
      newpassword,
      confirmpassword,
    })
      .then(({ data }) => {
        Alert.alert("Success", `Password Successfully Changed`);
      })
      .catch((err) => {
        console.log("Error =>>>> ");
        Alert.alert("Error", "Invalid OTP");
      })
      .finally(() => {
        dispatch(loading(false));
      });
  };

export const register = (createUser) => (dispatch) => {
  dispatch(loading(true));
  apiRequest("/register", "POST", createUser)
    .then(({ data }) => {
      dispatch(regUser(data));
      Alert.alert(`signup successful`);
      console.log(data);
    })
    .catch((err) => {
      console.log("Error =>>>> ", err);
    })
    .finally(() => {
      dispatch(loading(false));
    });
};
