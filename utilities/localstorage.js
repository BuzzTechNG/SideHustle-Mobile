import React from 'react';
// import {alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage' 

export const isLoggedIn = '@isLoggedIn' 
export const setLoggedIn = async (props) =>{
    try {
        console.log(props);
        await AsyncStorage.setItem(isLoggedIn, JSON.stringify(props))
        return true;
    } catch (error) {
        console.log('cant save to local store');
    }
}
export const getLoggedIn = async (props) =>{
    try {
        // console.log(props);
       const value = await AsyncStorage.getItem(isLoggedIn) 
       console.log(value+"store");
        return JSON.parse( value);
    } catch (error) {
        console.log('cant get item');
    }
}

export const deleteAllInLocalStorage = async () =>{
   try {
    await AsyncStorage.clear();
    return true
   } catch (error) {
       console.log(error);
       return false
   }
}