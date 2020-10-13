import { Card, Text, Icon, List, Button } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from "react-native";
import { TrendingUp, FacebookIcon, GoogleIcon, MoreVerticalIcon } from "../../../assets/Icons";

const data = new Array(3).fill({
  title: "item",
});

const ListItem = () => (
  <View
    style={{
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 20,
      alignItems: "center",
      justifyContent:"space-between",
      backgroundColor:"white",
      marginBottom:5,
      marginTop:2,
      borderWidth:0.5,
      borderRadius:10,
    }}
  >
    <Text>Job Category Title</Text>
    <Text>Start Rating</Text>
  </View>
);

export const JobStats = (props) => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 15,
        }}
      >
        <Text category="h6" style={{ marginBottom: 5 }}>
          Trending Jobs
        </Text>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 4,
              marginBottom:5
            }}
          >
            <View style={{flexDirection:"row" , alignItems:"center"}}>
             <View style={{borderWidth: 0.5, borderRadius:10, padding:2}} >
             <Icon
                fill="#8F9BB3"
                style={{ width: 28, height: 28  }}
                name="trending-up"
              />
             </View>
              <Text style={{marginLeft:20}} category="h6" >Top Categories</Text>
            </View>
            
            <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text category="label"> Last Months</Text>
              <Button size="small" appearance="ghost" accessoryRight={MoreVerticalIcon} />             
            </View>
          </View>
          <View>
            <List
              style={{backgroundColor:"white"}}
              data={data}
              renderItem={ListItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, i) => i}
            />
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingTop:10, 
        paddingBottom:10,
        elevation:1, 
        shadowRadius:10, 
        borderTopRightRadius:9,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        
    }
});
