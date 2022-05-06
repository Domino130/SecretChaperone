import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";
import EndEventButton from "../components/endEventButton";
import StartEventButton from "../components/startEventButton";
import Header from "../components/Header";

export default function eventCard({ navigation, route }) {
  const {
    Name,
    ID,
    Location,
    DateTime,
    Contacts,
    StartTime,
    EventDate,
    Recurrance,
  } = route.params;

  const [name, setFullName] = useState(Name);
  const [location, setLocation] = useState(Location);
  const [dateTime, setDateTime] = useState(DateTime);
  const [eventDate, setEventDate] = useState(EventDate);
  const [startTime, setStartTime] = useState(StartTime);
  const [contacts, setContacts] = useState(Contacts);
  const [recur, setRecur] = useState(Recurrance);

  const [eventInfo, setEventInfo] = useState({
    col: [
      {
        _id: "ID",
        name: "Name",
        dateTime: "DateTime",
        eventDate: "EventDate",
        startTime: "StartTime",
        location: "Location",
        contacts: "Contacts",
        recur: "Recurrance",
      },
    ],
    info: [],
  });

  useEffect(() => {
    axios
      .get(
        "http://bc5c-2600-6c63-647f-979d-4c74-bcf3-618f-a5cf.ngrok.io/events"
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

  //map test
  // const eo = events.map((x) =>
  //   console.log("this is x.recur " + x.recur)
  // );
  // console.log("x.recur = " + eo);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <BackButton goBack={navigation.goBack} />
        <Header>{name}</Header>

        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#7FAF66",
            }}
          >
            Location:
          </Text>
          <View>
            <Text style={styles.location}>{location}</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#7FAF66",
            }}
          >
            Date:
          </Text>
          <Text style={styles.date}>{eventDate}</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#7FAF66",
            }}
          >
            Start Time:
          </Text>
          <Text style={styles.date}>{startTime}</Text>
        </View>

        <TouchableOpacity
          style={styles.edit}
          onPress={() => {
            events.map((x) =>
              navigation.navigate("editEvent", {
                Name: x.name,
                DateTime: x.dateTime,
                EventDate: x.eventDate,
                StartTime: x.startTime,
                Location: x.location,
                ID: x._id,
                Contacts: x.contacts,
                Recurrance: x.recur,
              })
            );
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>EDIT</Text>
        </TouchableOpacity>
        <StartEventButton />
        <EndEventButton />
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
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 15,
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
  edit: {
    width: "50%",
    height: 40,
    color: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#88d166",
    borderColor: "#51cc29",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  location: {
    width: "100%",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderColor: "#88d166",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  date: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderColor: "#88d166",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  block1: {
    position: "absolute",
    width: "100%",
    height: 80,
    width: 80,
    top: 745,
    borderWidth: 1,
    textAlign: "center",
    fontSize: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 80,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#88d166",
    borderColor: "#51cc29",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  block2: {
    position: "absolute",
    width: "100%",
    height: 80,
    width: 80,
    top: 0,
    left: 308,
    borderWidth: 1,
    textAlign: "center",
    fontSize: 18,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#88d166",
    borderColor: "#88d166",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
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
