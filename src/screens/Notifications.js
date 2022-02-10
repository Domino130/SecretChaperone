import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Notifications() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.header}>Notifications</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <View>
        <Text style={styles.noConts}>No Notifications</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  top: {
    flexDirection: "row",
  },
  header: {
    fontSize: 30,
    margin: 5,
  },
  add: {
    margin: 5,
    padding: 7,
  },
  noConts: {
    color: "#C1BEBE",
    margin: 20,
  },
});
