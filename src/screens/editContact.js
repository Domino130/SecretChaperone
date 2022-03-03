import React, { useState, Component, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import Contacts from "./Contacts.js";

//const url = "http://6920-2600-6c63-647f-979d-19f0-8c46-b5a-e0f9.ngrok.io";

export default function editContact({ navigation, route }) {
  const { FullName, Phone, Email } = route.params;

  ///////////////////////////////////////POST/////////////////////////////////////////////
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
        "http://908a-2600-6c63-647f-979d-a409-256-5da9-a6dd.ngrok.io/contacts/add",
        {
          full_name,
          phone,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("New Contact Added!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Text style={styles.header}>Edit Contact</Text>

      <TextInput
        placeholder={FullName}
        placeholderTextColor={"black"}
        onChangeText={onChangeNameHandler}
        value={full_name}
        style={styles.box}
      ></TextInput>

      <TextInput
        placeholder={Phone}
        placeholderTextColor={"black"}
        onChangeText={onChangeNameHandler}
        value={phone}
        style={styles.box}
      ></TextInput>

      <TextInput
        placeholder={Email}
        placeholderTextColor={"black"}
        onChangeText={onChangeNameHandler}
        value={email}
        style={styles.box}
      ></TextInput>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
          <Text style={{ color: "white" }}>SAVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => functionCombined()}
        >
          <Text style={{ color: "white" }}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
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
    paddingBottom: 50,
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
    width: 150,
    height: 40,
    margin: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#58B158",
    borderColor: "#58B158",
  },
  delete: {
    width: 150,
    height: 40,
    margin: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "red",
    borderColor: "red",
  },
});
