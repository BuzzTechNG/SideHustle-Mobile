import React, { useEffect, useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigation } from "../auth/navigation/AuthNavigation";
import { UserNavigation } from "../users/navigation/user.navigation";
import * as SplashScreen from "expo-splash-screen";

import { setLoggedIn, getLoggedIn } from "../utilities/localstorage";

const ChangeNavContext = React.createContext();
// const
export const AppNavigation = (props) => {
  useEffect(() => {
    const checkLogin = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        console.log(error);
      }
      const localvalue = await getLoggedIn();
      await changeNav(localvalue);
      await SplashScreen.hideAsync();
    };
    checkLogin();
    
    return async () => {
     
    };
  }, []);
  const [navState, setnavState] = useState(getLoggedIn());
  const changeNav = async (value) => {
    await setLoggedIn(value);
    setnavState(value);
  };

  const CurrentNav = (value) => {
    if (navState) {
      // if (true) {
      return <UserNavigation />;
    } else {
      return <AuthNavigation />;
    }
  };

  const SwitchNav = () => (
    <ChangeNavContext.Provider value={changeNav}>
      <NavigationContainer>
        <CurrentNav />
      </NavigationContainer>
    </ChangeNavContext.Provider>
  );

  return (
    <>
      <StatusBar style="auto" backgroundColor="gray" />
      {/* <AppHeader/> */}
      <SwitchNav />
    </>
  );
};
export { ChangeNavContext };
