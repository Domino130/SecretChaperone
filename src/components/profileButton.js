import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function profileButton() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("Profile")}
      style={styles.button}
    >
      <Text>
        <MaterialCommunityIcons
          name="account-circle"
          color={"#88d166"}
          size={40}
        />
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingRight: 10,
    color: "#88d166"
  },
  text: {
    fontSize: 10,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});