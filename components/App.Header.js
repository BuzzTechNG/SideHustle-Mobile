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
import { View } from "react-native";

export const AppHeader = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MoreVerticalIcon} onPress={toggleMenu} />
  );

  const RightAction = () => (
    <>
      <TopNavigationAction icon={PersonOutlineIcon} />
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={InfoIcon} title="About" />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </>
  );
    //profile image 
    const ProfileImg = () => (
        <Avatar source={require('../assets/img.jpg')} />
    )
  const LeftAction = (props) => (
      <>
          <TopNavigationAction icon={ProfileImg}>
              Username
           </TopNavigationAction>
          {/* <Text category="h5">Username</Text> */}
      </>
  )
return (
    <TopNavigation 
     alignment="start"
      title={()=>(<Text category="h5" >Username</Text>)}
      accessoryLeft={LeftAction}
      accessoryRight={RightAction}
    />
);
};
