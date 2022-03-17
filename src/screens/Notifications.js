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
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Notifications() {
  const [eventInfo, setEventInfo] = useState({
    col: [
      {
        _id: "Id",
        name: "Name",
        location: "Location",
        contacts: "Contacts",
        sms: "SMS",
        email: "Email",
      },
    ],
    info: [],
  });

  useEffect(() => {
    axios
      .get("http://5047-2600-6c63-647f-979d-3870-ee2b-d0b-ae6d.ngrok.io/events")
      .then((response) => {
        setEventInfo((table) => {
          const eventsCall = { ...table };
          response.data.map((d) => {
            eventsCall.info = [...eventsCall.info, d];
          });
          return eventsCall;
        });
      });
  }, []);

  const events = eventInfo.info;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.header}>Events</Text>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigation.navigate("addEvent")}
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
          {events.map((x) => (
            <TouchableOpacity
              key={x._id}
              onPress={() =>
                navigation.navigate("editEvent", {
                  Name: x.name,
                  Location: x.location,
                  ID: x._id,
                  Contacts: x.contacts,
                  SMS: x.sms,
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
                  padding: 3,
                }}
              >
                {x.name}
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
