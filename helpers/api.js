import axios from "axios";
import { AsyncStorage, Alert } from "react-native";

const API_URL = "http://localhost:5000/bloodfinder/users";

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
  let message = "";
  let statusCode = null;

  if (err.response) {
    // If there is a response object in the error
    message = err.response.data.message || "An error occurred.";
    statusCode = err.response.status;
  } else if (err.data) {
    // If there is a data property in the error
    message = err.data;
  } else {
    // If no specific error message is found
    message = "An unexpected error occurred.";
  }

  console.log("Error message:", message);
  console.log("Status code:", statusCode);

  if (message && statusCode !== 401) {
    Alert.alert(title, message, [
      { text: "Dismiss" },
      tryAgain && {
        text: tryAgainText,
        onPress: tryAgainFunc,
      },
    ]);
  }
};
