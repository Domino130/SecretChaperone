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

export default function Home() {
  const [eventInfo, setEventInfo] = useState({
    col: [
      {
        _id: "Id",
        name: "Name",
      },
    ],
    info: [],
  });

  useEffect(() => {
    axios
      .get(
        "http://6791-2600-6c63-647f-979d-3068-e093-1110-fe47.ngrok.io/events"
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          {events.map((x) => (
            <TouchableOpacity
              style={styles.names}
              key={x._id}
              onPress={() =>
                navigation.navigate("editEvent", {
                  Name: x.name,
                  ID: x._id,
                })
              }
            >
              <Text
                style={{
                  color: "blue",
                  fontSize: 25,
                  color: "#7FAF66",
                  fontWeight: "bold",
                  flexDirection: "row",
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
  names: {
    width: 200,
    height: 300,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    margin: 20,
  },
});
