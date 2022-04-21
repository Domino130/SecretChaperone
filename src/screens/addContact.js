import React, { useState, Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import email from "react-native-email";

export default function addContact({ navigation }) {
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailIn, setEmail] = useState("");

  const onChangeNameHandler = (full_name) => {
    setFullName(full_name);
  };

  const onChangePhoneHandler = (phone) => {
    setPhone(phone);
  };

  const onChangeEmailHandler = (emailIn) => {
    setEmail(emailIn);
  };

  const postcontact = () => {
    axios
      .post(
        "http://0ce6-2600-6c63-647f-979d-4441-50c1-2e5d-b0cf.ngrok.io/contacts/add",
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
      { text: "OK", onPress: () => console.log("add contact Pressed") },
    ]);

  const sendEmail = () => {
    var to = ["anisgonzales@gmail.com"]; // string or array of email addresses
    email(to, {
      subject: "Show how to use",
      body: "Secret Chaperone: name has added you as a contact to an event:eventname at location from time to time. You will be notified if they do not check in or have ended the event.",
    }).catch(console.error);
  };

  const functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <BackButton goBack={navigation.goBack} />
        <Header>Create a Contact</Header>

        <TextInput
          label="Name"
          onChangeText={onChangeNameHandler}
          value={full_name}
          returnKeyType="next"
        />

        <TextInput
          label="Phone Number"
          keyboardType="numeric"
          onChangeText={onChangePhoneHandler}
          value={phone}
          returnKeyType="next"
        />

        <TextInput
          label="Email"
          onChangeText={onChangeEmailHandler}
          value={emailIn}
          returnKeyType="next"
        />

        <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
          <Text style={{ color: "black", fontWeight: "bold" }}>ADD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.add} onPress={() => sendEmail()}>
          <Text style={{ color: "black", fontWeight: "bold" }}>Send email</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#efefef",
    padding: 8,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 50,
    fontWeight: "bold",
  },

  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#88d166",
    borderColor: "#51cc29",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
  },
});
