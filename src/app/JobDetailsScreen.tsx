
import StatusBadge from "@/component/StatusBadge";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { modifyJobs } from "./features/jobs/jobsSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";


export default function JobDetails() {
  const { jobId } = useLocalSearchParams<{ jobId: string }>()

  const jobs = useAppSelector(state => state.jobs);
  const dispatch = useAppDispatch();

  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Job not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.id}>Job ID: {job.id}</Text>
      <Text style={styles.title}>Customer {job.customerName}</Text>
      <Text style={styles.equipment}>Equipment {job.equipment}</Text>
      <StatusBadge status={job.status} onPress={() => {
        dispatch(modifyJobs(job))
      }} />
      <View style={{ backgroundColor: 'grey', marginHorizontal: 10, height: 1, width: '100%' }}></View>
      <View style={{ flexDirection: 'row', padding: 5 }}>
        <Text accessibilityLabel="Calender" style={styles.homeIcon}>📅</Text>
        <Text style={styles.date}>Schedule at : {job.scheduleDate}</Text>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    padding: 10,
    margin: 5,
    width: "100%",
    borderRadius: 12,
    backgroundColor: 'white',
  },
  id: {
    fontSize: 16,
    fontFamily: "Arial",
    marginBottom: 10,
    color: "grey"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  equipment: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  date: {
    fontSize: 16,
    marginLeft: 5,
    color: 'black',
  },
  homeIcon: {
    fontSize: 16,
    color: 'black',
  },
});