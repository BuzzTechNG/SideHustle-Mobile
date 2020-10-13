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
import { AppHeader, ScrollHeader } from "../../../components/App.Header";
import { KeyboardAvoidingView } from "../../../components/evakeyBoard";

const useInputState = (initialValue = "") => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export const CreateJobScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [remoteJob , setRemoteJob] = React.useState(false)
  const JobDescriptionState = useInputState();
  const budgetState = useInputState()
  const handleCreateJob =()=>{
    console.log(budgetState,JobDescriptionState)
  }

  return (
    <>
    <AppHeader/>
    <Layout style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 10 }}>
      
      <KeyboardAvoidingView>
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
          label="Select Job Category"
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
          placeholder="Job Description "
          {...JobDescriptionState}
        />
      </View>
      <View style={styles.formControl}>
        <Toggle
          checked={remoteJob}
          onChange={() => setRemoteJob(remoteJob => !remoteJob)}
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
         <Text category="h6"> Remote Job?</Text>
        </Toggle>
      </View>
      <View style={styles.formControl}> 
        <Input label="Budget" keyboardType="number-pad" placeholder="Work Budget" {...budgetState} />
      </View>
      <View style={styles.formControl}>
        <Button onPress={() =>handleCreateJob() } style={{}}>Post Job</Button>
      </View>
      </KeyboardAvoidingView>
 
    </Layout>
    </>
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
