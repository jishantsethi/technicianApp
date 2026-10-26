import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Jobs" }}></Stack.Screen>
      <Stack.Screen name="job-details" options={{ title: "Job Details" }}></Stack.Screen>
    </Stack>
  );
}
