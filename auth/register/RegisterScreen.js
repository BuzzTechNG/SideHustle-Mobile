import React from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  StyleSheet,
  ScrollView,
  ScrollViewProps,
} from "react-native";
import {
  Layout,
  Text,
  Button,
  Divider,
  Input,
  CheckBox,
} from "@ui-kitten/components";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { KeyboardAvoidingView } from "../../components/evakeyBoard";
import {
  FacebookIcon,
  GoogleIcon,
  PersonOutlineIcon,
  ArrowBackIcon,
} from "../../assets/Icons";

export const RegisterScreen = (props) => {
  console.log(Layout);
  return (
    <>
      <StatusBar style="auto" backgroundColor="gray" />
      <Layout style={{ flex: 1 }}>
        <KeyboardAvoidingView>
          <View>
            <ImageBackground
              style={{
                width: "100%",
                alignSelf: "center",
                minHeight: 216,
                alignItems: "flex-start",
              }}
              resizeMode="contain"
              source={require("../../assets/undraw_receipt_ecdd.png")}
            >
              <Button
              onPress={()=>props.navigation.goBack()}
                status="basic"
                appearance="ghost"
                style={{ margin: "5%" }}
                accessoryLeft={ArrowBackIcon}
              >
                SIGN IN
              </Button>
            </ImageBackground>
            <Divider />
          </View>
          <View style={{ paddingHorizontal: 16, paddingVertical: 10 }}>
            <View>
              <Text style={{ alignSelf: "center" }}>
                Sign up with social account
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginTop: 10,
                }}
              >
                <Button
                  appearance="ghost"
                  size="giant"
                  status="basic"
                  accessoryRight={FacebookIcon}
                />
                <Button
                  appearance="ghost"
                  size="giant"
                  status="basic"
                  accessoryRight={GoogleIcon}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Divider style={{ flex: 1 }} />
              <Text category="h4" style={{ marginHorizontal: 10 }}>
                Or
              </Text>
              <Divider style={{ flex: 1 }} />
            </View>
            <Text style={{ alignSelf: "center" }}>Fill the form</Text>
            <View>
              <Input
                style={styles.formInput}
                placeholder="Firstname"
                size="medium"
                accessoryLeft={PersonOutlineIcon}
              />
              <Input
                style={styles.formInput}
                placeholder="Lastname"
                size="medium"
                accessoryLeft={PersonOutlineIcon}
              />
              <Input
                style={styles.formInput}
                placeholder="Email"
                size="medium"
                accessoryLeft={PersonOutlineIcon}
              />
              <Input
                style={styles.formInput}
                placeholder="Mobile"
                size="medium"
                accessoryLeft={PersonOutlineIcon}
              />
              <Input
                style={styles.formInput}
                placeholder="DOB"
                size="medium"
                accessoryLeft={PersonOutlineIcon}
              />
              <Input
                style={styles.formInput}
                placeholder="gender"
                size="medium"
                accessoryLeft={PersonOutlineIcon}
              />
              <Input
                style={styles.formInput}
                placeholder="Address"
                size="medium"
                accessoryLeft={PersonOutlineIcon}
              />
              
              <CheckBox
                style={styles.termsCheckBox}
                textStyle={styles.termsCheckBoxText}
                checked={null}
                text={
                  "By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy"
                }
                onChange={() => {}}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  formInput: {
    borderRadius: 20,
    marginVertical: 10,
  },
});
