import React from 'react'
import { Text, Input, Layout, Button } from '@ui-kitten/components'
import { EmailIcon, ArrowBackIcon } from '../../assets/Icons'
import { View, StyleSheet,Alert ,StatusBar} from 'react-native'
import { KeyboardAvoidingView } from '../../components/evakeyBoard'

export const ForgotPassword = (props) => {
    return (
        <>
        <StatusBar style="auto" backgroundColor="gray" />
        <Layout style={{flex:1, paddingHorizontal: 20, paddingVertical: 25}}>
           
           <View style={{flex:1}} >
            <Text category="h2" style={{padding:40, alignSelf:"center"}} >Forgot Password</Text>
            <Button
            status="basic"
            appearance="ghost"
              onPress={()=>props.navigation.goBack()}
                style={styles.btn}
                accessoryLeft={ArrowBackIcon}
                
              >
                SIGN IN
              </Button>
            
            <Input placeholder="Email" style={{marginVertical:30}}
            size="medium" 
            accessoryRight={EmailIcon}/>
            <Button onPress={()=>Alert.alert("Done")}>Reset Password</Button>
            </View>
          
        </Layout>
        </>
    )
}
const styles = StyleSheet.create({
    btn:{
        position:"absolute",
        alignSelf:"flex-start"
    }
})
// dashboard 
// ----
// Job ...
// --- sort jobs
// --- create a job 
// Transactions 
//reviews
// --create review ...rating and comment



//profile ....