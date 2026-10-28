import StatusBadge from "@/component/StatusBadge";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Job } from "../data/job";
import { modifyJobs } from "./features/jobs/jobsSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

export default function Index() {

  //const {  modifyJobs } = useJobs();

  const jobs = useAppSelector(state => state.jobs);
  const dispatch = useAppDispatch();

  console.log("jobs size is : " + jobs.length)
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={jobs}
        renderItem={(data) => <JobCard item={data.item} onPress={() =>
          dispatch(modifyJobs(data.item))
        } />}
        keyExtractor={item => item.id}>
      </FlatList>
    </View>
  );
}

function JobCard(props: { item: Job, onPress: () => void }) {
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
  list: {
    width: "100%",
  },
  item: {
    backgroundColor: "#fcfcfc",
    padding: 20,
    borderRadius: 10,
    margin: 10,
  }
});
