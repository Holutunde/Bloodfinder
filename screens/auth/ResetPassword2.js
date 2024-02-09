import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import { confirmOTP } from "../../actions/auth";
import NormalText, { BoldText } from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";

const ResetPassword2 = ({ navigation }) => {
  const [authorize, setAuthorize] = useState();
  const [errorText, setErrorText] = useState();
  const dispatch = useDispatch();
  const { isUserRegistered, otpToken } = useSelector((state) => state.reducers);

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  const [otp, setOtp] = React.useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });

  const handleConfimOTP = () => {
    const enteredOTP = Object.values(otp).join("");

    if (enteredOTP.length !== 6) {
      setErrorText("Invalid OTP");
    } else {
      dispatch(confirmOTP(enteredOTP, otpToken.otpToken.email));
      navigation.navigate("ChangePassword");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              flex: 1,
            }}>
            <View style={styles.imgcont}>
              <Image
                style={styles.img}
                source={require("../../assets/images/Resetpass.png")}
              />
              <BoldText style={{ fontSize: 25, marginTop: 80 }}>
                Forgot Password
              </BoldText>
              <NormalText style={{ fontSize: 13, marginVertical: 20 }}>
                Enter the six digit reset code sent to your mobile phone
              </NormalText>
              {authorize ? null : (
                <Animatable.Text
                  animation="shake"
                  duration={500}
                  style={styles.errorMsg}>
                  {errorText}
                </Animatable.Text>
              )}
              <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={firstInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 1: text });
                      text && secondInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={secondInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 2: text });
                      text
                        ? thirdInput.current.focus()
                        : firstInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={thirdInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 3: text });
                      text
                        ? fourthInput.current.focus()
                        : secondInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={fourthInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 4: text });
                      text
                        ? fifthInput.current.focus()
                        : thirdInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={fifthInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 5: text });
                      text
                        ? sixthInput.current.focus()
                        : fourthInput.current.focus();
                    }}
                  />
                </View>
                <View style={styles.otpBox}>
                  <TextInput
                    style={styles.otpText}
                    keyboardType="number-pad"
                    maxLength={1}
                    ref={sixthInput}
                    onChangeText={(text) => {
                      setOtp({ ...otp, 6: text });
                      !text && fifthInput.current.focus();
                    }}
                  />
                </View>
              </View>

              <Button
                textStyle={{
                  fontSize: 15,
                }}
                style={{
                  marginTop: 20,
                  borderRadius: 30,
                  width: 308,
                  height: 58,
                  borderColor: "#D33A39",
                }}
                onPress={handleConfimOTP}>
                VERIFY
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetPassword2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a1e30",
  },
  imgcont: {
    alignItems: "center",
    marginTop: 90,
  },
  errorMsg: {
    color: "#D33A39",
    fontSize: 14,
  },
  otpBox: {
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 0.5,
    marginHorizontal: 10,
  },
  otpText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    padding: 0,
    textAlign: "centuuer",
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  otpContainer: {
    marginHorizontal: 20,
    marginVertical: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});
