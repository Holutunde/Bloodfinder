import axios from "axios";
import { AsyncStorage, Alert } from "react-native";

const API_URL = "https://bloodfinder.onrender.com/bloodfinder/users";

export const apiRequest = async (endpoint, method, body = {}, token) => {
  try {
    //const token = await AsyncStorage.getItem('token')

    const url = `${API_URL}${endpoint}`;

    const request = await axios(url, {
      data: method === "GET" ? null : { ...body },
      method: method.toUpperCase(),
      headers: {
        Authorization: token ? `Bearer ${JSON.parse(token)}` : null,
        "Content-Type": `application/json`,
        Accept: "*/*",
      },
    });

    return request;
  } catch (error) {
    console.log("api", error.response);
  }
};

export const showApiError = (
  err,
  tryAgain = true,
  tryAgainFunc = null,
  tryAgainText = "Try Again",
  title = ""
) => {
  const message = err.response?.data?.message || err.data;
  console.log("message", err);

  if (message && err.response?.status !== 401) {
    Alert.alert(title, message, [
      { text: "Dismiss" },
      tryAgain && {
        text: tryAgainText,
        onPress: tryAgainFunc,
      },
    ]);
  }
};
