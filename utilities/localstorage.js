import React from 'react';
// import {alert} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {ChangeNavContext }from '../navigation/app.navigation'

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
    const changeNav = React.useContext(ChangeNavContext)
   try {
    // const value = getLoggedIn()
    console.log("claer storage");
    await AsyncStorage.clear();
    return true 
   } catch (error) {
       console.log(error);
       return false
   }
}