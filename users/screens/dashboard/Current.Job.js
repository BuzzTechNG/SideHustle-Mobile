import { Text, Card, Button } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const CurrentJob = (props) => {
  return (
    <>
      <View style={{ paddingHorizontal: 10, marginBottom: 5 }}>
        <Text category="h6">My current job</Text>
      </View>
      <LinearGradient
        colors={["#5385FB", "#75BCFA", "#7ED3C3", "#8FE4D9"]}
        start={[0.3, 0.4]}
        end={[1, 0.9]}
        locations={[0.02, 0.3, 0.6, 0.9]}
        style={{ borderRadius: 70 }}
      >
        <View style={styles.container}>
          <Text status="control">Job Title</Text>
          <Button
            size="small"
            appearance="filled"
            status="danger"
            style={{ borderRadius: 10 }}
          >
            details
          </Button>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
