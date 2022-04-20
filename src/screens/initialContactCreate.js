import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import axios from "axios";
import Paragraph from "../components/Paragraph";

export default function initialContactCreate({ navigation }) {
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
        "http://d252-147-174-75-128.ngrok.io/contacts/add",
        {
          full_name,
          phone,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const toHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Now that a contact has been added, create an event!", "", [
      { text: "OK", onPress: () => console.log("first contact add Pressed") },
    ]);

  const functionCombined = () => {
    postcontact();
    toHome();
    createTwoButtonAlert();
  };

  return (
    <>
      <View style={styles.container}>
        <Header> Create Your First Contact</Header>

        <Paragraph>
          Add a contact to your contact book so they can be added to events. You
          can edit or delete contacts later.
        </Paragraph>

        <TextInput
          label="Full Name"
          returnKeyType="next"
          value={full_name}
          onChangeText={onChangeNameHandler}
        ></TextInput>

        <TextInput
          label="Phone"
          returnKeyType="next"
          value={phone}
          onChangeText={onChangePhoneHandler}
        ></TextInput>

        <TextInput
          label="Email"
          returnKeyType="next"
          value={email}
          onChangeText={onChangeEmailHandler}
        ></TextInput>

        <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
          <Text style={{ color: "black", fontWeight: "bold" }}>ADD</Text>
        </TouchableOpacity>
      </View>
    </>
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
  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
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