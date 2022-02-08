import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";
import axios from "axios";
import Constants from "expo-constants";

const url = "http://6920-2600-6c63-647f-979d-19f0-8c46-b5a-e0f9.ngrok.io";

export default function addContacts() {
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const onChangeNameHandler = (full_name) => {
    setFullName(full_name);
  };

  const onChangePhoneHandler = (phone) => {
    setPhone(phone);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const postcontact = () => {
    axios
      .post(
        "http://6920-2600-6c63-647f-979d-19f0-8c46-b5a-e0f9.ngrok.io/contacts/add",
        {
          full_name,
          phone,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  /*useEffect(() => {
    axios
      .post(
        "http://fffe-2600-6c63-647f-979d-19f0-8c46-b5a-e0f9.ngrok.io/contacts/add",
        {
          full_name: "tyler",
          phone: "985-254-2454",
          email: "tyrr@mail.com",
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  });*/

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Contact</Text>

      <TextInput
        placeholder="Name"
        onChangeText={onChangeNameHandler}
        value={full_name}
        style={styles.box}
      ></TextInput>

      <TextInput
        placeholder="Phone Number"
        keyboardType="numeric"
        onChangeText={onChangePhoneHandler}
        value={phone}
        style={styles.box}
      ></TextInput>

      <TextInput
        placeholder="Email"
        onChangeText={onChangeEmailHandler}
        value={email}
        style={styles.box}
      ></TextInput>

      <TouchableOpacity style={styles.add} onPress={() => postcontact()}>
        <Text style={{ color: "white" }}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "white",
    padding: 8,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 70,
    fontWeight: "bold",
  },
  box: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#58B158",
    borderColor: "#58B158",
  },
});
