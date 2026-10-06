import { View, Text } from "react-native";
import DATA from "./data";

export default function JobDetails({ params }: { params: { jobId: string } }) {
  const jobId = '1'; // Replace with the actual jobId from params if needed
  const job = DATA.find((job) => job.id === jobId);  

  return (  
    <View>
        <Text>Job Details for Job ID: {jobId}</Text>    
        <Text>Equipment: {job?.equipment}</Text>
        <Text>Customer Name: {job?.customerName}</Text>
        <Text>Status: {job?.status}</Text>  
    </View>
  )
}       