import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Layout, Button, List, Input } from "@ui-kitten/components";
import { AlertIcon, FilterIcon, SearchIcon } from "../../../assets/Icons";
import {JobItem} from "./Job.Item";
import { ScrollHeader } from "../../../components/App.Header";

const data = new Array(8).fill({
  title: "Item",
});

export const JobList = () =>(
  <List  style={{ backgroundColor: "white" }}
  data={data}
  renderItem={JobItem} /> 
)

export const JobsScreen = () => {
 
  return (
    <Layout style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 10 }}>
      <ScrollHeader MainContent={JobList} >
        <View style={styles.container} >
      <View style={styles.pageHeader}>
        <Text category="h2" style={styles.pageTitle}>
          Available Jobs
        </Text>

        <View style={styles.pageBtn}>
          <Button
            size="small"
            appearance="ghost"
            status="ghost"
            accessoryLeft={AlertIcon}
          />
          <Button size="small" accessoryLeft={FilterIcon} />
        </View>
      </View>
      <Input placeholder="Search" accessoryRight={SearchIcon} />
      </View>
      </ScrollHeader>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
  },
  pageTitle: {
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
  },
  pageHeader: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "center",
  },
  pageBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
