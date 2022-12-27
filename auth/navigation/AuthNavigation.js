import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../login/LoginScreen";
import { RegisterScreen } from "../register/RegisterScreen";
import { ForgotPassword } from "../others/ForgotPassword";

const { Navigator, Screen } = createStackNavigator();

export const AuthNavigation = () => (
  <Navigator headerMode="none">
    <Screen name="LoginScreen" component={LoginScreen} />
    <Screen name="RegisterScreen" component={RegisterScreen} />
    <Screen name="ForgotPassword" component={ForgotPassword} />
  </Navigator>
);

//  default AuthNavigation;
