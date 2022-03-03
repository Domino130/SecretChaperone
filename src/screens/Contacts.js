import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Card,
  ScrollView,
} from "react-native";
import axios from "axios";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const url = "http://9356-2600-6c63-647f-979d-518-2a01-e11f-514a.ngrok.io";

export default function Contacts() {
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
        "http://908a-2600-6c63-647f-979d-a409-256-5da9-a6dd.ngrok.io/contacts"
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

  const contacts = contactInfo.info;

  const navigation = useNavigation();

  const sortedList = contacts.sort((a, b) =>
    b.full_name.localeCompare(a.full_name)
  );

  /*useEffect(() => {
    const getContacts = () => {
      const data = axios.get(
        "http://eb54-2600-6c63-647f-979d-8c69-3391-84b3-f619.ngrok.io/contacts"
      );

      setFetchedData(data);
    };

    getContacts();
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
      <ScrollView>
        <View style={{ flexDirection: "column-reverse", textAlign: "left" }}>
          {contacts.map((x) => (
            <TouchableOpacity
              style={styles.names}
              key={x._id}
              onPress={() =>
                navigation.navigate("editContact", {
                  FullName: x.full_name,
                  Phone: x.phone,
                  Email: x.email,
                })
              }
            >
              <Text
                style={{
                  color: "blue",
                  fontSize: 25,
                  color: "#7FAF66",
                  fontWeight: "bold",
                }}
              >
                {x.full_name}
                {"\n"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#efefef",
    padding: 10,
  },
  contacts: {
    flex: 1,
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
  names: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
  },
  noConts: {
    color: "#C1BEBE",
    margin: 20,
  },
});
