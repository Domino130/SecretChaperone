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
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const url = "http://9356-2600-6c63-647f-979d-518-2a01-e11f-514a.ngrok.io";

export default function Contacts() {
  //const [fetchedData, setFetchedData] = useState([]);
  const navigation = useNavigation();
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
      <View style={styles.top}>
        <Text style={styles.header}>Contacts</Text>

        <TouchableOpacity
          style={styles.add}
          onPress={() => navigation.navigate("addContact")}
        >
          <Text>
            {" "}
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={"#7FAF66"}
              size={30}
            />{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <View>
        <Text style={styles.noConts}>No Contacts</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  top: {
    flexDirection: "row",
  },
  header: {
    fontSize: 30,
    margin: 5,
  },
  add: {
    margin: 5,
    padding: 7,
  },
  noConts: {
    color: "#C1BEBE",
    margin: 20,
  },
});
