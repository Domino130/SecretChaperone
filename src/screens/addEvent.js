import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  CheckBox,
} from "react-native";
import Picker from "@react-native-picker/picker";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import axios from "axios";
import Paragraph from "../components/Paragraph";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function addEvent({ navigation }) {
  //////////////////////////DropDown//////////////////////////////////

  /////////////////////////////Other/////////////////////////////////////
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const onChangeNameHandler = (name) => {
    setName(name);
  };
  const onChangeLocationHandler = (location) => {
    setLocation(location);
  };
  const postcontact = () => {
    axios
      .post(
        "http://452f-2600-6c63-647f-979d-3068-e093-1110-fe47.ngrok.io/events/add",
        {
          name,
          location,
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

  /////////////////////////////////////DateTimePicker//////////////////////////////////////////////////
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
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
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.add}
          onPress={showDatepicker}
          title="Date"
        >
          <Text style={{ color: "white" }}>DATE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.add}
          onPress={showTimepicker}
          title="Time"
        >
          <Text style={{ color: "white", margin: 10 }}>TIME</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <TextInput
        label="Location"
        onChangeText={onChangeLocationHandler}
        value={location}
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
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
