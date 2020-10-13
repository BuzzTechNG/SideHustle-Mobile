import React from "react";
import {
  StatusBar,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  Layout,
  Button,
  Card,
  Input,
  Text,
  useTheme,
  Modal,
} from "@ui-kitten/components";
import {
  PersonOutlineIcon,
  FacebookIcon,
  LockOutlineIcon,
  EyeOffIcon,
  GoogleIcon,
  ArrowForwardIcon,
} from "../../assets/Icons";
import { useQuery, gql, useMutation } from "@apollo/client";
import Apollo from "../../apolloHelper";
import { KeyboardAvoidingView } from "../../components/evakeyBoard";
import * as Facebook from "expo-facebook";
import AsyncStorage from "@react-native-community/async-storage";
import { setLoggedIn, getLoggedIn } from "../../utilities/localstorage";
import { ChangeNavContext } from "../../navigation/app.navigation";

Facebook.initializeAsync("333080151368637", "test1");
const apollo = new Apollo();

export const LoginScreen = (props) => {
  const changeNav = React.useContext(ChangeNavContext);

  const theme = useTheme();
  const [isLoggedin, setLoggedinStatus] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [email , setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isImageLoading, setImageLoadStatus] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [handleLogin ] = useMutation(apollo.LOGIN)
  const facebookLogIn = async () => {
    try {
      const {
        type,
        token,
        expires,
        permission,
        declinedPermission,
      } = await Facebook.logInWithReadPermissionsAsync("333080151368637", {
        permissions: ["public_profile", "email"],
      });
      if (type == "success") {
        fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,gender,last_name,link,locale,timezone,verified,name,email,picture.height(500)`
        )
          .then((response) => response.json())

          .then((data) => {
            changeNav(true);
            //save logging state asyncstorage
            setUserData(data);
            setVisible(true);
          })

          .catch((e) => console.log(e + "okay"));
      } else {
        console.log(type); // type === 'cancel'
      }
    } catch ({ message }) {
      console.log(message + "catch");
    }
  };
  return (
    <>
      <Layout style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          animating={visible}
          style={{ position: "absolute" }}
        />
        <KeyboardAvoidingView>
          <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
            <View>
              <ImageBackground
                resizeMode="contain"
                style={{
                  width: "100%",
                  minHeight: 216,
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
              <Text category="h2" style={{ alignSelf: "center" }}>
                Welcome Back!
              </Text>
              <Text appearance="hint" style={{ alignSelf: "center" }}>
                Log in to view jobs avalible
              </Text>
            </View>
          </View>
          <View style={[styles.container, styles.loginContainer]}>
            <Input
              style={styles.formInput}
              placeholder="Username / Email"
              size="medium"
              accessoryLeft={PersonOutlineIcon}
              value={email}
              onChangeText={email=>setEmail(email)}
            />
            <Input
              style={styles.formInput}
              size="medium"
              placeholder="Passord"
              accessoryLeft={LockOutlineIcon}
              value={password}
              onChangeText={password => setPassword(password)}
            />
            <View style={{ alignItems: "flex-end" }}>
              <Text
                onPress={() => props.navigation.navigate("ForgotPassword")}
                appearance="hint"
                category="h6"
              >
                Forgot Password ?
              </Text>
            </View>
            <Button
              style={styles.btnLogin}
              size="large"
              onPress={() => handleLogin({ variables: { userId:email, userPassword: password } })}
            >
              Login
            </Button>
            {/* Oauth */}
            <View>
              <Text
                appearance="hint"
                style={{ alignSelf: "center", marginBottom: "10%" }}
              >
                Or connect using
              </Text>

              <View style={styles.oauthContainer}>
                <Button
                  status="danger"
                  accessoryLeft={GoogleIcon}
                  size="medium"
                >
                  Google
                </Button>
                <Button
                  status="info"
                  accessoryLeft={FacebookIcon}
                  size="medium"
                  onPress={() => facebookLogIn()}
                >
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
              <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>
              <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
              >
                <Card disabled={true}>
                  <Text style={{ fontSize: 22, marginVertical: 10 }}>
                    Hi {userData ? userData.name : "Palsm"}!
                  </Text>
                  <View>
                    {/* <ScrollView>
                    <ExchangeRates/>
                </ScrollView> */}
                  </View>
                  {/* <ActivityIndicator size="large" color="#0000ff" animating={!isImageLoading} style={{ position: "absolute" }} />   */}
                  {/* <View style={styles.container}>

                          <Image

                            style={{ width: 200, height: 200, borderRadius: 50 }}

                            source={{ uri: userData.picture.data.url }}

                            onLoadEnd={() => setImageLoadStatus(true)} />

                            

                        <Text style={{ fontSize: 22, marginVertical: 10 }}>Hi {userData.name}!</Text> 
                      

                        </View>  */}

                  <Text>Logout </Text>
                  <Button onPress={() => setVisible(false)}>DISMISS</Button>
                </Card>
              </Modal>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Layout>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    paddingHorizontal: "8%",
    paddingVertical: 10,
    marginTop: "3%",
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
