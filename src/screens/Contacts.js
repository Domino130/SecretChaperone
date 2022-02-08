import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";

const url = "http://9356-2600-6c63-647f-979d-518-2a01-e11f-514a.ngrok.io";

export default function Contacts() {
  const [fetchedData, setFetchedData] = useState([]);

  /*useEffect(() => {
    const getContacts = () => {
      const data = axios.get(
        "http://9356-2600-6c63-647f-979d-518-2a01-e11f-514a.ngrok.io/contacts"
      );

      setFetchedData(data);
    };

    //getContacts();
  }, []);

  console.log("data: ", fetchedData);*/

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

  //  {fetchedData.data ? <Text>{fetchedData.data.full_name}</Text> : null}
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contacts</Text>
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
});
