import React, { useEffect, useState} from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {AuthNavigation} from '../auth/navigation/AuthNavigation'
import {UserNavigation} from '../users/navigation/user.navigation'
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {InfoIcon, LogoutIcon, MenuIcon} from '../assets/Icons'
import { AppHeader } from '../components/App.Header';
import AsyncStorage from '@react-native-community/async-storage'
import { setLoggedIn, getLoggedIn } from "../utilities/localstorage";



export const AppNavigation = () => {
useEffect(() => {
    checkLogin()
}, [])
const [Logged, setLogged] = useState()
// const Logged = false

const checkLogin = async () =>{
    const value = await getLoggedIn();
    console.log(value);
    setLogged(value)
    // Logged = value
}
const CurrentNav = () => {
    if(Logged){
        return <UserNavigation/> ;
    }else{
        return <AuthNavigation/>;
    }
}

const SwitchNav = () => (
    <NavigationContainer>
        <CurrentNav/>
    </NavigationContainer>
);


    return(
    <>
     <StatusBar style="auto" backgroundColor="gray" />
     {/* <AppHeader/> */}
    <SwitchNav/>
    </>
    )
}
