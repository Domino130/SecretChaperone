import React from "react";
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
          : "#88d166"
      }
    />
  );
};
