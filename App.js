import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { IconRegistry, ApplicationProvider, } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {AppNavigation, ChangeNavContext} from './navigation/app.navigation'
import { ApolloProvider } from '@apollo/client';
import {client} from "./index";
export default function App(){
return (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApolloProvider client={client} >
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <SafeAreaView> */}
      <AppNavigation />
      {/* { isReady ? <AppNavigation isReady={isReady}/> : <AppNavigation isReady={isReady} />  } */}
      {/* </SafeAreaView> */}
      {/* <Text>app</Text> */}
    </ApplicationProvider>
    </ApolloProvider>
  
   
  </>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
