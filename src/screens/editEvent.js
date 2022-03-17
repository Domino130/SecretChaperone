import React, { useState, Component, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import Header from "../components/Header";
import { MultiSelect } from "react-native-element-dropdown";
import BackButton from "../components/BackButton";
import Notifications from "./Notifications.js";
import { CheckBox } from "react-native-elements";
import TextInput from "../components/TextInput";

//const url = "http://6920-2600-6c63-647f-979d-19f0-8c46-b5a-e0f9.ngrok.io";

export default function editEvent({ navigation, route }) {
  const { Name, ID, Location, Contacts, SMS, Email } = route.params;

  const [name, setFullName] = useState(Name);
  const [location, setLocation] = useState(Location);
  const [contacts, setContacts] = useState(Contacts);
  const [sms, setSms] = useState(SMS);
  const [email, setSendEmail] = useState(Email);

  const onChangeSMSHandler = (sms) => {
    setSms(sms);
  };
  const onChangeEmailHandler = (email) => {
    setSendEmail(email);
  };

  const onChangeNameHandler = (name) => {
    setFullName(name);
  };
  const onChangeLocationHandler = (location) => {
    setLocation(location);
  };
  const onChangeContactsHandler = (contacts) => {
    setContacts(contacts);
  };
  /////////////////////////////////////////DropDown///////////////////////////////////////////
  const [contactInfo, setContactInfo] = useState({
    col: [
      {
        _id: "Id",
        full_name: "Name",
        phone: "Phone",
        email: "Email",
      },
    ],
    info: [],
  });

  useEffect(() => {
    axios
      .get(
        "http://5047-2600-6c63-647f-979d-3870-ee2b-d0b-ae6d.ngrok.io/contacts"
      )
      .then((response) => {
        setContactInfo((table) => {
          const contactsCall = { ...table };
          response.data.map((d) => {
            contactsCall.info = [...contactsCall.info, d];
          });
          return contactsCall;
        });
      });
  }, []);

  const cons = contactInfo.info;

  const _renderItem = (cons) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{cons.full_name}</Text>
      </View>
    );
  };

  ///////////////////////////////////////PUT/////////////////////////////////////////////
  const updateEvent = () => {
    axios
      .post(
        "http://5047-2600-6c63-647f-979d-3870-ee2b-d0b-ae6d.ngrok.io/events/update/" +
          ID,
        {
          name,
          location,
          contacts,
          sms,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Event Updated!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const functionCombined = () => {
    updateEvent();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };
  ///////////////////////////////////////DELETE/////////////////////////////////////////////
  const deleteEvent = () => {
    axios
      .delete(
        "http://5047-2600-6c63-647f-979d-3870-ee2b-d0b-ae6d.ngrok.io/events/" +
          ID,
        {
          name,
          location,
          contacts,
          sms,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createThreeButtonAlert = () =>
    Alert.alert("Event Deleted!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const functionCombined2 = () => {
    deleteEvent();
    createThreeButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Header>Edit Event</Header>

      <TextInput label="Name" onChangeText={onChangeNameHandler} value={name} />
      <TextInput
        label="Location"
        onChangeText={onChangeLocationHandler}
        value={location}
      />
      <View>
        <MultiSelect
          style={styles.dropdown2}
          data={cons}
          labelField="full_name"
          valueField="full_name"
          placeholder="Select Emergency Contact"
          value={contacts}
          onChange={onChangeContactsHandler}
          renderItem={(item) => _renderItem(item)}
        />
      </View>
      <Text>How to notify Emergency Contacts: </Text>
      <View>
        <CheckBox
          title="SMS"
          checked={sms}
          onChange={onChangeSMSHandler}
          onPress={() => setSms(!sms)}
        />
      </View>
      <View>
        <CheckBox
          title="Email"
          checked={email}
          onChange={onChangeEmailHandler}
          onPress={() => setSendEmail(!email)}
        />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
          <Text style={{ color: "white" }}>SAVE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.delete}
          onPress={() => functionCombined2()}
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
