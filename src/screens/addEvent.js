import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import axios from "axios";
import Paragraph from "../components/Paragraph";

export default function addEvent({ navigation }) {
  const [name, setName] = useState("");

  const onChangeNameHandler = (name) => {
    setName(name);
  };

  const postcontact = () => {
    axios
      .post(
        "http://8765-2600-6c63-647f-979d-4c23-beeb-f054-571.ngrok.io/events/add",
        {
          name,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("New Event Added!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <>
      <View style={styles.container}>
        <BackButton goBack={navigation.goBack} />
      </View>

      <Header> Create an Event</Header>

      <TextInput
        label="Event Name"
        onChangeText={onChangeNameHandler}
        value={name}
        returnKeyType="next"
      />

      <Paragraph>Notification Message to be sent to Contacts:</Paragraph>
      <Paragraph>
        Secret Chaperone: name has added you as a contact to an event:eventname
        at location from time to time. You will receive periodically notified
        unless they check in or they end the event. Reply 'STOP' to opt out.
      </Paragraph>

      <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
        <Text style={{ color: "white" }}>ADD</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 65,
    padding: 8,
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
