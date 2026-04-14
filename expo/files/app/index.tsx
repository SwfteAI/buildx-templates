import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {{APP_NAME}}</Text>
      <Text style={styles.subtitle}>{{APP_DESCRIPTION}}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 24,
    gap: 12
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#0f172a"
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    textAlign: "center"
  }
});
