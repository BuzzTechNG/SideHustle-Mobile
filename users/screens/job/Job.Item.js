import React from "react";
import { View } from "react-native";
import { Card, Divider, Text, Button } from "@ui-kitten/components";

export const JobItem = (props) => {
  return (
    <Card style={{ marginBottom: 5 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text category="h5">Job Title</Text>
        <View style={{flexDirection:"row"}}>
          <View
            style={{ padding: 10, backgroundColor: "pink", borderRadius: 10 }}
          />
          <Text>urgent</Text>
        </View>
      </View>
      <Divider />
      <View style={{ flex: 1 }}>
        <Text category="hint">Job description</Text>
        <Text>
          description here it is talks a lot hjk jsdsb sjdjbdsjbsd dsjhsjhjs
          hsdbbbuibiuds udsbsdbosid dsubdsub sdobdb check it okay oh painedherev
          alright
          <Button size="small">more details</Button>
        </Text>
      </View>
    </Card>
  );
};
