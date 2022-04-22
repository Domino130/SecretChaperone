import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "../components/Button";
import CheckInButton from "../components/checkInButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function Home() {
  //twilio
  const send = () =>{
    axios.post("http://35a3-71-15-36-128.ngrok.io/api/messages")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }

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
      .get(
        "http://3432-71-15-36-128.ngrok.io/events"
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

  ///////////////////////////////////Async/////////////////////////////////////////////

  const navigation = useNavigation();

  const STORAGE_NAME = "@save_name";

  const [data, setdata] = useState("");

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_NAME);
      if (name !== null) {
        console.log(name);
        setdata(name);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };

  return (
    <View style={styles.container}>
      <Header>Welcome Back {data} </Header>
      
      <Text
        style={{
          color: "blue",
          fontSize: 15,
          color: "#9a9fa1",
          fontWeight: "bold",
          textDecorationLine: "underline",
        }}
      >
        Your Current Events:
      </Text>

    <View style={{height: 300}}>
      <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled>
        <View style={styles.all} >
          {events.map((x, index) => (
            <TouchableOpacity
              style={styles.cards}
              key={index}
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
              <Text
                style={{
                  fontSize: 15,
                  color: "#7FAF66",
                }}
              >
                Date:
              </Text>
            </TouchableOpacity>
          ))}
          
        </View>
        <TouchableOpacity
            style={styles.add}
            onPress={() => navigation.navigate("addEvent")}
          >
            <Text
              style={{
                textAlign: "center",
              }}
            >
              {" "}
              <MaterialCommunityIcons
                name="plus-circle-outline"
                color={"#ffd508"}
                size={50}
              />{" "}
            </Text>
          </TouchableOpacity>
      </ScrollView>
      </View>
      {/* if no event date matched current data, disable button */}
      <CheckInButton style ={styles.checkIn}/>
      <Button onPress = {send} > Send text</Button>

      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  top: {
    flexDirection: "row",
  },
  header: {
    fontSize: 30,
    margin: 5,
  },
  add: {
    paddingTop: 120,
  },
  noConts: {
    color: "#C1BEBE",
    margin: 20,
  },
  cards: {
    width: 200,
    height: 260,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 5,
  },
  all:{
    display: "flex", 
    flexWrap: "wrap"
  },
  checkIn:{
    justifyContent: "flex-start"
  }
});
