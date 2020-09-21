import React, { useEffect, useState} from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {AuthNavigation} from '../auth/navigation/AuthNavigation'
import {UserNavigation} from '../users/navigation/user.navigation'
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {InfoIcon, LogoutIcon, MenuIcon} from '../assets/Icons'
import { AppHeader } from '../components/App.Header';
import { setLoggedIn, getLoggedIn } from "../utilities/localstorage";



export const AppNavigation = (props) => {
const CurrentNav = () => {
    if(props.isReady){
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
