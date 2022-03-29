import React from "react";
import { themeColor, useTheme } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default (props) => {
  return (
    <Ionicons
      name={props.icon}
      style={{ marginBottom: -7 }}
      size={24}
      color={
        props.focused
          ? "gold"
          : "#7CAC65"
      }
    />
  );
};
