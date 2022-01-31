import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect } from "react";
import axios from "axios";

export default function Contacts() {
  useEffect(() => {
    axios
      .post(
        "http://4824-2600-6c63-647f-979d-348c-8dbb-e8bc-6db4.ngrok.io/contacts/add",
        {
          full_name: "Laasdwrence",
          phone: "985-25534-2344",
          email: "lrrrr@mail.com",
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/*<Button
      //  title="Press"
        onPress={() => {
          functia();
        }}
      />
      */}
    </View>
  );
}
