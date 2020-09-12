import React from 'react'
import {StatusBar, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {AuthNavigation} from '../auth/navigation/AuthNavigation'
import {UserNavigation} from '../users/navigation/user.navigation'
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {InfoIcon, LogoutIcon, MenuIcon} from '../assets/Icons'
import { AppHeader } from '../components/App.Header';

const SwitchNav = () => (
    <NavigationContainer>
         <AuthNavigation/>
        {/* <UserNavigation/> */}
    </NavigationContainer>
);

export const AppNavigation = () => (
    <>
     <StatusBar style="auto" backgroundColor="gray" />
     {/* <AppHeader/> */}
    <SwitchNav/>
    </>
) 
