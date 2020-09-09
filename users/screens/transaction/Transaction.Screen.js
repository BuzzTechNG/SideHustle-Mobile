import React from "react";
import { View, StyleSheet } from "react-native";
import { Layout, Button, Input, List, Text } from "@ui-kitten/components";
import { SearchIcon, AlertIcon, FilterIcon } from "../../../assets/Icons";
import { TransactionItem } from "./Transaction.Item";

const data = new Array(8).fill({
  title: "Item",
});

export const TransactionScreen = () => {
  return (
    <Layout style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 10 }}>
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
      <List
        style={{ backgroundColor: "white" }}
        data={data}
        renderItem={TransactionItem}
      />
    </Layout>
  );
};
const styles = StyleSheet.create({
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
