import StatusBadge from "@/component/StatusBadge";
import useDebounce from "@/hooks/debounce";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { JobState, modifyJobs, Status } from "./features/jobs/jobsSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

export default function Index() {


  const [statusFilter, setStatusFilter] = useState<Status | "All Jobs">("All Jobs");
  const [searchKeyword, setSearchKeyword] = useState("");
  const debouncedSearchValue = useDebounce(searchKeyword, 2000)

  const jobs = useAppSelector(state => state.jobs);
  const filterJobs = jobs.filter(job =>
    (statusFilter === "All Jobs" || job.status === statusFilter) &&
    job.customerName.toLowerCase().includes(debouncedSearchValue.toLowerCase())
  );

  const dispatch = useAppDispatch();

  console.log("filterJobs size is : " + filterJobs.length)



  const onStatusFilerPress = (status: Status | "All Jobs") => {
    setStatusFilter(status)
  }


  return (
    <View style={styles.container}>

      <TextInput style={styles.search}
        placeholder='Search jobs'
        placeholderTextColor={"#786f6f"}
        value={searchKeyword}
        onChangeText={setSearchKeyword}>
      </TextInput>
      <View style={styles.filter}>
        <Pressable onPress={() => onStatusFilerPress("All Jobs")}><Text> All Jobs</Text></Pressable>
        <Pressable onPress={() => onStatusFilerPress("Pending")}><Text> Pending </Text></Pressable>
        <Pressable onPress={() => onStatusFilerPress("Completed")}><Text> Completed </Text></Pressable>
        <Pressable onPress={() => onStatusFilerPress("In Progress")}><Text> In Progress </Text></Pressable>
      </View>
      <FlatList style={styles.list}
        data={filterJobs}
        renderItem={(data) => <JobCard item={data.item} onPress={() =>
          dispatch(modifyJobs(data.item))
        } />}
        keyExtractor={item => item.id}>
      </FlatList>
    </View>
  );
}

function JobCard(props: { item: JobState, onPress: () => void }) {
  const route = useRouter();
  const handlePress = () => {
    console.log(`Job ${props.item.id} pressed`);
    // for going to another router using expo-route
    route.push({ pathname: "/JobDetailsScreen", params: { jobId: props.item.id } });
  };


  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    >
      <View style={[styles.item]}>
        <Text>{props.item.equipment}</Text>
        <Text>{props.item.customerName}</Text>
        <StatusBadge status={props.item.status} onPress={props.onPress} />
        <Text>{props.item.scheduleDate}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  filter: {
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    width: "100%",
  },
  item: {
    backgroundColor: "#fcfcfc",
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  search: {
    backgroundColor: "#e7e4e4",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: "100%"
  }
});
