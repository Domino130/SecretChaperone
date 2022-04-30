import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import axios from "axios";
import Paragraph from "../components/Paragraph";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MultiSelect } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function addEvent({ props }) {
  //////////////////////////DropDown//////////////////////////////////
  const [contactInfo, setContactInfo] = useState({
    col: [
      {
        _id: "Id",
        full_name: "Name",
        phone: "Phone",
      },
    ],
    info: [],
  });

  useEffect(() => {
    axios
      .get(
        "http://369f-2600-6c63-647f-979d-b9d9-3e70-f66c-1e7c.ngrok.io/contacts"
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

  const cons = contactInfo.info;

  const navigation = useNavigation();

  const _renderItem = (cons) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{cons.full_name}</Text>
      </View>
    );
  };

  /////////////////////////////Other/////////////////////////////////////
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [contacts, setContacts] = useState([]);
  const [recur, setRecur] = useState(recur);

  const onChangeNameHandler = (name) => {
    setName(name);
  };
  const onChangeLocationHandler = (location) => {
    console.log(location);
    setLocation(location);
  };
  const onChangeContactsHandler = (contacts) => {
    setContacts(contacts);
  };
  const onChangeRecurHandler = (contacts) => {
    setRecur(recur);
  };

  const postcontact = () => {
    axios
      .post("http://293a-147-174-75-128.ngrok.io/events/add", {
        name,
        location,
        dateTime,
        contacts,
        recur,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("New Event Added!", "", [
      { text: "OK", onPress: () => console.log("add event Pressed") },
    ]);

  const functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  /////////////////////////////////////DateTimePicker//////////////////////////////////////////////////

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(true);
    setDate(currentDate);
    setDateTime(date);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDateTimepicker = () => {
    showMode("datetime");
  };
  const showDatepicker = () => {
    showMode("date");
  };
  const showTimepicker = () => {
    showMode("time");
  };

  //async//
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
      alert(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <BackButton goBack={navigation.goBack} />
      </View>

      <Header> Create an Event</Header>

      <View style={styles.container2}>
        <TextInput
          label="Event Name"
          onChangeText={onChangeNameHandler}
          value={name}
          returnKeyType="next"
        />
        <View style={styles.buttons1}>
          <View style={styles.buttons2}>
            <TouchableOpacity
              style={styles.dateTime}
              onPress={showDatepicker}
              title="Date"
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>DATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dateTime}
              onPress={showTimepicker}
              title="Time"
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>TIME</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingRight: 150 }}>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                timeZoneOffsetInSeconds
                timeZoneOffsetInMinutes
                minuteInterval="5"
                is24Hour={false}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <Text> Select Location</Text>

        <TextInput
          label="How often do you want to be notified?"
          onChangeText={onChangeRecurHandler}
          value={recur}
          keyboardType="numeric"
        />

        <Text />

        <View>
          <Paragraph> Message to be sent to selected contacts:</Paragraph>
          <Paragraph>
            Secret Chaperone: {data} has added you as a contact to an event:{" "}
            {name} at {location} beginning at [Time]. You will be notified when
            they have started the event, if they do not check in or have ended
            the event.
          </Paragraph>
          <Text />
        </View>
      </View>

      <TouchableOpacity
        title="Add"
        style={styles.add}
        onPress={() => functionCombined()}
      >
        <Text style={{ color: "black", fontWeight: "bold" }}>ADD</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  dropdown2: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 0.5,
    marginTop: 0,
    marginBottom: 20,
    padding: 8,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 20,
  },
  container: {
    justifyContent: "center",
    paddingTop: 68,
    padding: 10,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 5,
    backgroundColor: "#efefef",
    padding: 8,
  },
  buttons1: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  buttons2: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 10,
  },
  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 50,
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
  dateTime: {
    margin: 10,
    width: "40%",
    height: 40,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    justifyContent: "center",
    borderRadius: 20,
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
});
