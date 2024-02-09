import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import NormalText, { BoldText } from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Animatable from "react-native-animatable";
import { resetPassword } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

const ResetPassword1 = ({ navigation }) => {
  // const { otpSent } = useSelector((state) => state.reducers);
  const dispatch = useDispatch();

  const validator = require("validator");
  const [authorize, setAuthorize] = useState();
  const [errorText, setErrorText] = useState();

  const [email, setEmail] = useState("");
  const handleInput = (email) => {
    setEmail(email);
  };
  const handleReset = () => {
    if (email.length == 0) {
      setAuthorize(false);
      setErrorText("Email cannot be blank");
    } else if (!validator.isEmail(email)) {
      setAuthorize(false);
      setErrorText("Invalid Email address");
    } else {
      dispatch(resetPassword(email));
      navigation.navigate("ResetPassword2");
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
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}>
            <View style={styles.imgcont}>
              <Image
                style={styles.img}
                source={require("../../assets/images/Resetpass.png")}
              />

              <BoldText style={{ fontSize: 25, marginTop: 80 }}>
                Password Reset
              </BoldText>
              <NormalText
                style={{ width: 308, fontSize: 13, marginVertical: 30 }}>
                Enter your email below we will send you an sms with a pin code
                to confirm your identity
              </NormalText>
              {authorize ? null : (
                <Animatable.Text
                  animation="shake"
                  duration={500}
                  style={styles.errorMsg}>
                  {errorText}
                </Animatable.Text>
              )}
              <Input
                style={{ color: "#FFFFFF" }}
                coverStyle={{
                  backgroundColor: "#0a1e30",
                  width: 308,
                  paddingLeft: 20,
                }}
                onChangeText={(text) => handleInput(text, "email")}
                placeholder="Email"
                LeftIcon={() => (
                  <AntDesign name="phone" size={20} color="white" />
                )}
              />
              <Button
                textStyle={{
                  fontSize: 15,
                }}
                style={{
                  borderRadius: 30,
                  width: 308,
                  height: 60,
                  borderColor: "#D33A39",
                }}
                onPress={handleReset}>
                RESET PASSWORD
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetPassword1;

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
});
