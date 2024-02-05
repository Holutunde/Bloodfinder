import React from "react";
import { View } from "react-native";
import { connect, useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroStack from "./IntroStack";
import AppStack from "./AppStack";

const Start = createNativeStackNavigator();

const AppIntro = (props) => {
  console.log("intro screen", props.startStatus);
  return (
    <Start.Navigator screenOptions={{ headerShown: false }}>
      {props.startStatus ? (
        <Start.Screen name="App" component={AppStack} />
      ) : (
        <Start.Screen name="Auth" component={IntroStack} />
      )}
    </Start.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    startStatus: state.reducers.startStatus,
  };
};

export default connect(mapStateToProps, null)(AppIntro);
