import React from "react";
import { TopNavigation, TopNavigationAction, Text, OverflowMenu, MenuItem, Button, Icon, Avatar } from "@ui-kitten/components";
import {
  MenuIcon,
  InfoIcon,
  LogoutIcon,
  PersonOutlineIcon,
  FacebookIcon,
  MoreVerticalIcon,
  ChevronDownIcon
} from "../assets/Icons";
import { View, Animated,StyleSheet, TouchableOpacity } from "react-native";
import {deleteAllInLocalStorage
} from '../utilities/localstorage'
import { ChangeNavContext } from "../navigation/app.navigation";

const HEADER_MAX_HEIGHT = 150;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


// export const WalletAmount=() => (
//   <TopNavigationAction onPress={() => console.log('wallet')}>
//         $500
//     </TopNavigationAction>
// )
const Amount = "$5000";
export const AppHeader = () => { 
  const changeNav = React.useContext(ChangeNavContext)
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [username, setUsername] = React.useState('Usernames')
  const [showWallet , setShowWallet] = React.useState(true)


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const WalletAmount=() => (
   <TouchableOpacity style={{ flex:1, justifyContent:"center"}} onPress={() => setShowWallet(showwallet => !showWallet)} >
     <Text category="h6" >{showWallet ? Amount : "Show wallet"}</Text>
   </TouchableOpacity>
  )

  const renderMenuAction = () => (
    <TopNavigationAction icon={MoreVerticalIcon} onPress={toggleMenu} />
  );

  const RightAction = () => {
    return (
    <>
      <TopNavigationAction icon={WalletAmount} onPress={() => console.log("wallet")} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={PersonOutlineIcon} title="Profile" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" onPress={ () => changeNav(false)} />
      </OverflowMenu>
    </>
  )};
    //profile image 
    const ProfileImg = () => (
        <Avatar source={require('../assets/img.jpg')} />
    )
  const LeftAction = (props) => (
      <>
          <TopNavigationAction icon={ProfileImg}>
             
           </TopNavigationAction>
          {/* <Text category="h5">Username</Text> */}
      </>
  )
return (
    <TopNavigation 
     alignment="start"    
      title={()=>(<Text category="h5" >{username}</Text>)}
      accessoryLeft={LeftAction}
      accessoryRight={RightAction}
    />
);
};
export const ScrollHeader = (props) =>{
   // properties 
   const scrollY = React.useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });



  return(
     <>
      <Animated.ScrollView
       contentContainerStyle={{paddingTop: HEADER_MAX_HEIGHT - 10, }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
      >
        {props.MainContent()}
        {/* {props.listData.map(props.TransactionItem)} */}
      </Animated.ScrollView>
      
       <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslateY}]}]}>
        <AppHeader/>
        {/* <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
            },
          ]}
          source={require('.../assets/img.jpg')}
        /> */}
       
           {props.children}
      </Animated.View>
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{scale: titleScale}, {translateY: titleTranslateY}],
          },
        ]}>
        {/* <Text style={styles.title}>Management</Text> */}
           {/* {props.children} */}
        
      </Animated.View>
      </>
  )
}


const styles = StyleSheet.create({
   saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    
  },
  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: 60,
    // height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
   
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
})