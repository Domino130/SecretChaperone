import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";

export default function eventCard({ navigation, route }) {
  const { Name, ID, Location } = route.params;
  const [name, setFullName] = useState(Name);
  const [location, setLocation] = useState(Location);

  const onChangeNameHandler = (name) => {
    setFullName(name);
  };
  const onChangeLocationHandler = (location) => {
    setLocation(location);
  };

  ///////////////////////////////////////PUT/////////////////////////////////////////////
  const updatecontact = () => {
    axios
      .post(
        "http://369f-2600-6c63-647f-979d-b9d9-3e70-f66c-1e7c.ngrok.io/events/update/" +
          ID,
        {
          name,
          location,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Event Updated!", "", [
      { text: "OK", onPress: () => console.log("add event card Pressed") },
    ]);

  const functionCombined = () => {
    updatecontact();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };
  ///////////////////////////////////////DELETE/////////////////////////////////////////////
  const deletecontact = () => {
    axios
      .delete(
        "http://369f-2600-6c63-647f-979d-b9d9-3e70-f66c-1e7c.ngrok.io/events/" +
          ID,
        {
          name,
          location,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createThreeButtonAlert = () =>
    Alert.alert("Event Deleted!", "", [
      { text: "OK", onPress: () => console.log("delete event card Pressed") },
    ]);

  const functionCombined2 = () => {
    deletecontact();
    createThreeButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <Text style={styles.header}>Edit Event</Text>

      <TextInput label="Name" onChangeText={onChangeNameHandler} value={name} />
      <TextInput
        label="Location"
        onChangeText={onChangeLocationHandler}
        value={location}
      />

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
