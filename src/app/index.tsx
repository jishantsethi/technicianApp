import StatusBadge from "@/component/status-badge";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Job, useJobs } from "../data/job";

export default function Index() {

  const { jobs, modifyJobs } = useJobs();

  console.log("jobs status is : " + jobs[0].status)
  return (
    <View style={styles.container}>
      <FlatList style={styles.list} data={jobs}
        renderItem={(data) => <JobCard item={data.item} onPress={() =>
          modifyJobs(data.item)
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
    route.push({ pathname: "/job-details", params: { jobId: props.item.id } });
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
