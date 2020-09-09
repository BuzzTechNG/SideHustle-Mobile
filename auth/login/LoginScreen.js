import React from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  Layout,
  Button,
  Card,
  Input,
  Text,
  useTheme,
} from "@ui-kitten/components";
import {
  PersonOutlineIcon,
  FacebookIcon,
  LockOutlineIcon,
  EyeOffIcon,
  GoogleIcon,
  ArrowForwardIcon,
} from "../../assets/Icons";
import { KeyboardAvoidingView } from "../../components/evakeyBoard";
export const LoginScreen = (props) => {
  const theme = useTheme();
  return (
    <>
    
      <Layout style={styles.container}>
        <KeyboardAvoidingView>
          <View
            style={{ paddingHorizontal: 16, paddingVertical: 10 }}
          >
            <View>
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: "100%",
                  minHeight:216,
                  alignSelf: "center",
                }}
                source={require("../../assets/undraw_receipt_ecdd.png")}
              >
                <Button
                  appearance="ghost"
                  accessoryRight={ArrowForwardIcon}
                  style={{ alignSelf: "flex-end" }}
                  onPress={() => props.navigation.navigate("RegisterScreen")}
                >
                  SIGN UP
                </Button>
              </ImageBackground>
              <Text  category="h2" style={{alignSelf:"center"}}>Welcome Back!</Text>
              <Text appearance="hint" style={{alignSelf:"center"}}>Log in to view jobs avalible</Text>
            </View>
          </View>
          <View style={[styles.container ,styles.loginContainer] }>
            <Input
              style={styles.formInput}
              placeholder="Username / Email"
              size="medium"
              accessoryLeft={PersonOutlineIcon}
            />
            <Input
              style={styles.formInput}
              size="medium"
              placeholder="Passord"
              accessoryLeft={LockOutlineIcon}
            />
            <View style={{ alignItems: "flex-end" }}>
              <Text onPress={() => props.navigation.navigate('ForgotPassword')} appearance="hint" category="h6" >Forgot Password ?</Text>
            </View>
            <Button style={styles.btnLogin} size="large">Login</Button>
            {/* Oauth */}
            <View>
              <Text appearance="hint" style={{ alignSelf: "center", marginBottom:"10%" }}>
                Or connect using
              </Text>

              <View style={styles.oauthContainer}>
                <Button status="danger" accessoryLeft={GoogleIcon} size="medium">
                  Google
                </Button>
                <Button status="info" accessoryLeft={FacebookIcon} size="medium">
                  Facebook
                </Button>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Don't have an account yet?</Text>
              <Button
                appearance="ghost"
                onPress={() => props.navigation.navigate("RegisterScreen")}
              >
                Sign Up
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Layout>
    </>
  );
};
const styles = StyleSheet.create({
  container:{
      flex:1
  },
  loginContainer: {
    paddingHorizontal: "8%", paddingVertical: 10, marginTop:"3%"
  },
  formInput: {
    borderRadius: 20,
    marginVertical: 10,
  },
  btnLogin: {
    minWidth: 100,
    maxWidth: 200,
    borderRadius: 20,
    marginVertical: 20,
    alignSelf: "center",
    shadowRadius: 10,
  },
  oauthContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    marginBottom: "15%",
  },
});

// export default LoginScreen;
