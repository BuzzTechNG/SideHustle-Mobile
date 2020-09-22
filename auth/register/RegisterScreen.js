import React, {useState ,useEffect} from "react";
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
  CheckBox, Icon
} from "@ui-kitten/components";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { KeyboardAvoidingView } from "../../components/evakeyBoard";
import {
  FacebookIcon,
  GoogleIcon,
  PersonOutlineIcon,
  ArrowBackIcon,EyeIcon, EyeOffIcon
} from "../../assets/Icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const RegisterScreen = (props) => {
  const [firstName, setfirstName] = useState('');
  const [middleName, setmiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)
  // const [password, setPassword] = React.useState();
  // const [passwordVisible, setPasswordVisible] = React.useState(false);
  // const onPasswordIconPress = () => {
  //   setPasswordVisible(!passwordVisible);
  // };
  const handleRegister = () =>{
    console.log(firstName+"firstname",middleName,+"middlename",
    lastName+"lastname",password+"password", address+"address", mobile+"mobile" ,email+"email",terms+"terms")
  }
  const passwordtoggleIcon = (props) => (
    <TouchableWithoutFeedback onPress={()=>setViewPassword(viewPassword => !viewPassword)}>
      <Icon {...props} name={!viewPassword ? 'eye' : 'eye-off'}/>
    </TouchableWithoutFeedback>
  );
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
                textAlign="center"
                onChangeText={firstname => setfirstName(firstname)}
                value={firstName}
                style={styles.formInput}
                placeholder="First Name"
                size="medium"
              />
              <Input
                onChangeText={lastname => setLastName(lastname)}
                value={lastName}
                textAlign="center"
                style={styles.formInput}
                placeholder="Last Name"
                size="medium"
              />
              <Input
              textAlign="center"
              onChangeText={middleName => setmiddleName(middleName)}
              value={middleName}
                style={styles.formInput}
                placeholder="Middle Name"
                size="medium"
              />
              <Input
              textAlign="center"
              value={address}
              onChangeText={setAddress}
                style={styles.formInput}
                placeholder="Address"
                size="medium"
              />
              <Input
              textAlign="center"
              value={mobile}
              onChangeText={mobile => setMobile(mobile)}
              keyboardType="number-pad"
                style={styles.formInput}
                placeholder="Mobile Number"
                size="medium"
              />
              <Input
              textAlign="center"
              value={email}
              onChangeText={email => setEmail(email)}
                style={styles.formInput}
                placeholder="Email"
                size="medium"
              />
               {/* <Input 
          style={styles.passwordInput}
          placeholder='Password'
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        /> */}
              <Input
              secureTextEntry={viewPassword}
              textContentType="password"
              value={password}
              textAlign="center"
              onChangeText={password => setPassword(password)}
                style={styles.formInput}
                placeholder="Password"
                size="medium"
                accessoryRight={passwordtoggleIcon}
                
              />
             <View style={{paddingHorizontal:10}}>
             <CheckBox
                style={styles.termsCheckBox}
                textStyle={styles.termsCheckBoxText}
                checked={terms}
                onChange={(value) => setTerms(value)}
              > 
              By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy
              </CheckBox>
             </View>
              <Button style={styles.registerBtn} onPress={() => handleRegister()} >
                Register
              </Button>
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
  registerBtn :{
    marginVertical:15,
    borderRadius:20,
    // elevation:2
  }
});
