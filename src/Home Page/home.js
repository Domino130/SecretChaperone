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
import Header from "../components/Header";

export default function Home() {
  const [eventInfo, setEventInfo] = useState({
    col: [
      {
        _id: "Id",
        name: "Name",
        location: "Location",
      },
    ],
    info: [],
  });

  useEffect(() => {
    axios
      .get(
        "http://452f-2600-6c63-647f-979d-3068-e093-1110-fe47.ngrok.io/events"
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
      <Header>Welcome Back "User Name"</Header>
      <Text
        style={{
          color: "blue",
          fontSize: 15,
          color: "#7FAF66",
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        Your Current Events:
      </Text>
      <ScrollView>
        <View>
          {events.map((x) => (
            <TouchableOpacity
              style={styles.names}
              key={x._id}
              onPress={() =>
                navigation.navigate("editEvent", {
                  Name: x.name,
                  Location: x.location,
                  ID: x._id,
                })
              }
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "#7FAF66",
                  fontWeight: "bold",
                }}
              >
                {x.name}
                {"\n"}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#7FAF66",
                }}
              >
                Location: {x.location}
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
  names: {
    width: 200,
    height: 250,
    borderRadius: 20,
    backgroundColor: "white",

    padding: 20,
    margin: 20,
  },
});
