import { Status } from "@/data/job";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function StatusBadge(props: { status: Status, onPress: () => void }) {
    const { status, onPress } = props;
    const backgroundColor = getStatusBackgroundColor(status);
    if (status === "Pending") {
        return (
          <Pressable onPress={onPress}>
                <View style={[badgeStyle.container, { backgroundColor }]}>
                    <Text style={{ color: "#f9c2ff" }}>{status}</Text>
                </View>
            </Pressable>
        );
    }
    return null;
}

const badgeStyle = StyleSheet.create({
    container: {
        padding: 5,
        alignSelf: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        width: '100%',
        marginVertical: 5,
    },
});

function getStatusBackgroundColor(status: Status): string {
    let backgroundColor: string;
    if (status === "Pending") {
        backgroundColor = "black";
    } else if (status === "In Progress") {
        backgroundColor = "blue";
    } else if (status === "Completed") {
        backgroundColor = "green";
    } else if (status === "Cancelled") {
        backgroundColor = "red";
    } else {
        backgroundColor = "gray";
    }
    return backgroundColor;
}