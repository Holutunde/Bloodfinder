import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { changePassword } from "../../actions/auth";
import NormalText, { BoldText } from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Animatable from "react-native-animatable";

const ChangePassword = ({ navigation }) => {
  const { otpToken } = useSelector((state) => state.reducers);
  const dispatch = useDispatch();

  const [authorize, setAuthorize] = useState(true);
  const [errorText, setErrorText] = useState("");

  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleChanged = () => {
    if (newpassword.length === 0 || confirmpassword.length === 0) {
      setAuthorize(false);
      setErrorText("Password fields cannot be blank");
    } else if (newpassword !== confirmpassword) {
      setAuthorize(false);
      setErrorText("Passwords do not match");
    } else {
      dispatch(
        changePassword(otpToken.otpToken.email, newpassword, confirmpassword)
      );
      navigation.navigate("Login");
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
                source={require("../../assets/images/Resetpass3.png")}
              />

              <BoldText style={{ fontSize: 25, marginTop: 80 }}>
                Set New Password
              </BoldText>
              {!authorize && (
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
                onChangeText={(text) => setNewPassword(text)}
                placeholder="New Password"
                secureTextEntry
                LeftIcon={() => (
                  <AntDesign name="lock" size={20} color="white" />
                )}
              />
              <Input
                style={{ color: "#FFFFFF" }}
                coverStyle={{
                  backgroundColor: "#0a1e30",
                  width: 308,
                  paddingLeft: 20,
                }}
                onChangeText={(text) => setConfirmPassword(text)}
                placeholder="Confirm Password"
                secureTextEntry
                LeftIcon={() => (
                  <AntDesign name="lock" size={20} color="white" />
                )}
              />
              <Button
                textStyle={{ fontSize: 15 }}
                style={{
                  borderRadius: 30,
                  width: 308,
                  height: 60,
                  borderColor: "#D33A39",
                }}
                onPress={handleChanged}>
                CHANGE PASSWORD
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a1e30",
  },
  imgcont: {
    alignItems: "center",
    marginTop: 90,
  },
  img: {
    width: 100,
    height: 100,
  },
  errorMsg: {
    color: "#D33A39",
    fontSize: 14,
  },
});
