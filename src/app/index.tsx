import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import DATA, { Job } from "./data";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: 'lightgray', padding: 10, margin: 10 }}>Header</Text>
      <FlatList data={DATA}
        renderItem={(data) => <JobCard item={data.item} />}
        keyExtractor={item => item.id}>
      </FlatList>
    </View>
  );
}

function JobCard(props: { item: Job }) {
  return (
    <Pressable onPress={() => console.log(`Job ${props.item.id} pressed`)}
      style={
        ({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]
      }>
      <View style={[styles.item]}>
        <Text>{props.item.equipment}</Text>
        <Text>{props.item.customerName}</Text>
        <StatusBadge status={props.item.status} />
        <Text>{props.item.scheduleDate}</Text>
      </View>
    </Pressable>
  )
}

function StatusBadge(props: { status: string }) {
  const { status } = props;
  let backgroundColor;
  if (status === 'Pending') {
    backgroundColor = 'yellow';
  } else if (status === 'In Progress') {
    backgroundColor = 'blue';
  } else if (status === 'Completed') {
    backgroundColor = 'green';
  } else if (status === 'Cancelled') {
    backgroundColor = 'red';
  } else {
    backgroundColor = 'gray';
  }
  return (
    <View style={[styles.item, { backgroundColor: backgroundColor }]}>
      <Text>{status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  }
});
