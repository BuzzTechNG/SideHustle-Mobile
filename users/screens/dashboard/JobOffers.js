import { Text, Card, List, Button, Divider } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from "react-native";

// const
const data = new Array(8).fill({
  title: "Item",
});

const ListItem = () => (
  <Card style={styles.listitem}>
    <View style={{ marginHorizontal: -12, marginVertical: -8 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text category="h6">Job Title</Text>
        <Text category="s2">Location</Text>
      </View>
      <View>
        <Text category="p2">
          description here it is talks a lot hjk jsdsb sjdjbdsjbsd dsjhsjhjs
          hsdbbbuibiuds udsbsdbosid dsubdsub sdobdb check it okay oh painedherev
          hsdbbbuibiuds udsbsdbosid dsubdsub sdobdb check it okay oh painedherev
          alright
        </Text>
      </View>
      <Divider style={{marginTop:4}}/>
      <View>
          <Text category="h6">
              Specification
          </Text>
          <Text category="hint">
          hsdbbbuibiuds udsbsdbosid dsubdsub sdobdb check it okay oh painedherev
          alright
          </Text>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",marginTop:4}} >
          <Button size="small" appearance="ghost" style={{backgroundColor:"pink", borderRadius:30}}>
              <Text category="c1" status="control" >interested</Text>
            </Button>
          <Text category="hint">Budget</Text>
      </View>
    </View>
  </Card>
);

export const JobOffers = () => {
  return (
    <>
      <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
        <Text category="h6" style={{ marginBottom: 5 }}>
          My Offers
        </Text>
        <List
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={ListItem}
          keyExtractor={(item, i) => i}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listitem: {
    marginRight: 10,
    maxWidth:200,
  },
});
