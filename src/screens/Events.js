import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Events() {
  const [eventInfo, setEventInfo] = useState({
    col: [
      {
        _id: "Id",
        name: "Name",
        location: "Location",
        dateTime: "DateTime",
        contacts: "Contacts",
      },
    ],
    info: [],
  });

  useEffect(() => {
    axios
      .get(
        "http://369f-2600-6c63-647f-979d-b9d9-3e70-f66c-1e7c.ngrok.io/events"
      )
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
              style={styles.names}
              key={x._id}
              onPress={() =>
                navigation.navigate("editEvent", {
                  Name: x.name,
                  Location: x.location,
                  DateTime: x.dateTime,
                  ID: x._id,
                  Contacts: x.contacts,
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
                <Text>
                  {" "}
                  <MaterialCommunityIcons
                    name="calendar-edit"
                    color={"#9a9fa1"}
                    size={25}
                  />{" "}
                </Text>
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
    fontWeight: "bold",
    color: "#88d166",
  },
  add: {
    margin: 5,
    padding: 7,
  },
  names: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: 350,
    height: 45,
    margin: 10,
    paddingTop: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
  },
  noConts: {
    color: "#C1BEBE",
    margin: 20,
  },
});
