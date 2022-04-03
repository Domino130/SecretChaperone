import React, { useState, Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
// import axios from "axios";
// import Constants from "expo-constants";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";
import Header from "../components/Header";


export default function addContact({ navigation }) {
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

  // const postcontact = () => {
  //   axios
  //     .post(
  //       "http://bc12-2600-6c63-647f-979d-8dea-21b0-6f9f-42f.ngrok.io/contacts/add",
  //       {
  //         full_name,
  //         phone,
  //         email,
  //       }
  //     )
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  const createTwoButtonAlert = () =>
    Alert.alert("New Contact Added!", "", [
      { text: "OK", onPress: () => console.log("add contact Pressed") },
    ]);

  const functionCombined = () => {
    // postcontact();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
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
        value={email}
        returnKeyType="next"
      />

      <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
        <Text style={{ color: "black", fontWeight: "bold" }}>ADD</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: "#51cc29",
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