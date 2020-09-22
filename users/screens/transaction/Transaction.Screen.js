import React from "react";
import { View, Animated, StyleSheet } from "react-native";
import {
  Layout,
  Button,
  Input,
  List,
  Text,
  Card,
  Divider,
} from "@ui-kitten/components";
import { SearchIcon, AlertIcon, FilterIcon } from "../../../assets/Icons";
import { TransactionItem } from "./Transaction.Item";
import { AppHeader, ScrollHeader } from "../../../components/App.Header";

const data = new Array(8).fill({
  title: "Item",
});


export const TransactionList = () => (
  <List style={styles.containerList} data={data} renderItem={TransactionItem} keyExtractor={(item ,i)=> i} />
);

export const TransactionScreen = () => {
  return (
    <Layout style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 10 }}>
      <>
        <ScrollHeader MainContent={TransactionList}>
          <View style={styles.container}>
            <View style={styles.pageHeader}>
              <Text category="h2" style={styles.pageTitle}>
                Transactions
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
            {/* <List
              style={styles.containerList}
              data={data}
              renderItem={TransactionItem}
            /> */}
            <Divider />
          </View>
        </ScrollHeader>
      </>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
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
    backgroundColor: "white",
  },
  pageBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  containerList: {
    // flex: 10,
    // maxHeight: 300,
    // height: 200,
  },
});
