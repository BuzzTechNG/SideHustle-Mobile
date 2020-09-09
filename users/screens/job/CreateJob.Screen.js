import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  Layout,
  Button,
  Toggle,
  Input,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import { AlertIcon, FilterIcon } from "../../../assets/Icons";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export const CreateJobScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const multilineInputState = useInputState();

  return (
    <Layout style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 10 }}>
      <View style={styles.pageHeader}>
        <Text category="h2" style={styles.pageTitle}>
          Create Job
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

      <View style={styles.formControl}>
        <Select
          label="Select Topic"
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <SelectItem title="Option 1" />
          <SelectItem title="Option 2" />
          <SelectItem title="Option 3" />
        </Select>
      </View>

      <View style={styles.formControl}>
        <Input
          label="Description"
          multiline={true}
          textStyle={{ minHeight: 64 }}
          placeholder="Multiline"
          {...multilineInputState}
        />
      </View>
      <View style={styles.formControl}>
        <Toggle
          checked={multilineInputState}
          onChange={() => console.log("check")}
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
         <Text category="h6"> Remote Job?</Text>
        </Toggle>
      </View>
      <View style={styles.formControl}>
        <Input label="Budget" keyboardType="number-pad" placeholder="Work Budget" />
      </View>
      <View style={styles.formControl}>
        <Button onPress={() => console.log("createjob")} style={{}}>Post Job</Button>
      </View>
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
  formControl: {
    marginVertical: 10,
  },
});
