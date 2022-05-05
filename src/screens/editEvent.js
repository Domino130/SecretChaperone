import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import axios from "axios";
import Header from "../components/Header";
import { MultiSelect } from "react-native-element-dropdown";
import BackButton from "../components/BackButton";
import TextInput from "../components/TextInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Input } from "react-native-elements";
import { Picker, SectionContent } from "react-native-rapi-ui";

export default function editEvent({ navigation, route }) {
  const { Name, ID, Location, DateTime, EventDate,StartTime, Contacts, Recurrance } = route.params;

  const [name, setFullName] = useState(Name);
  const [location, setLocation] = useState(Location);
  const [dateTime, setDateTime] = useState(DateTime);
  const [eventDate, setEventDate] = useState(EventDate);
  const [startTime, setStartTime] = useState(StartTime);
  const [contacts, setContacts] = useState(Contacts);

  const onChangeNameHandler = (name) => {
    setFullName(name);
  };
  const onChangeLocationHandler = (location) => {
    setLocation(location);
  };
  const onChangeContactsHandler = (contacts) => {
    setContacts(contacts);
  };

  /////////////////////////////////////////DropDown///////////////////////////////////////////
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
        "http://520c-147-174-75-128.ngrok.io/contacts"
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

  const _renderItem = (cons) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{cons.full_name}</Text>
      </View>
    );
  };

  ///////////////////////////////////////PUT/////////////////////////////////////////////
  const updateEvent = () => {
    axios
      .post(
        "http://520c-147-174-75-128.ngrok.io/events/update/" +
          ID,
        {
          name,
          location,
          dateTime,
          eventDate,
          startTime,
          contacts,
          recur,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Event Updated!", "", [
      { text: "OK", onPress: () => console.log("edit event Pressed") },
    ]);

  const functionCombined = () => {
    updateEvent();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };
  ///////////////////////////////////////DELETE/////////////////////////////////////////////
  const deleteEvent = () => {
    axios
      .delete(
        "http://520c-147-174-75-128.ngrok.io/events/" +
          ID,
        {
          name,
          location,
          dateTime,
          eventDate,
          startTime,
          contacts,
          recur,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createThreeButtonAlert = () =>
    Alert.alert("Event Deleted!", "", [
      { text: "OK", onPress: () => console.log("delete event Pressed") },
    ]);

  const functionCombined2 = () => {
    deleteEvent();
    createThreeButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };
  ////////////////////////////////////////////////////////////////////////////
  const [date, setDate] = useState(new Date(dateTime));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [selectedDate, setSelectedDate] = useState(true);
  const [selectedTime, setSelectedTime] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setDateTime(currentDate);
    console.log(currentDate);

    let tempDate = currentDate;
    let fDate =
      tempDate.getMonth() +
      1 +
      "/" +
      tempDate.getDate() +
      "/" +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() + -7 + " : " + tempDate.getMinutes();

    setEventDate(fDate);
    setStartTime(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setSelectedDate(true);
    setSelectedTime(false);
    showMode("date");
  };
  const showTimepicker = () => {
    setSelectedTime(true);
    setSelectedDate(false);
    showMode("time");
  };

  ///////////////////////////////////Recurrence Dropdown//////////////////////////////////////////

  const [recur, setRecur] = useState(Recurrance);
  const onChangeRecurHandler = (recur) => {
    console.log(recur);
    setRecur(recur);
  };
  const items = [
    { label: "5 mins", value: "5" },
    { label: "10 mins", value: "10" },
    { label: "15 mins", value: "15" },
    { label: "20 mins", value: "20" },
    { label: "25 mins", value: "25" },
    { label: "30 mins", value: "30" },
  ];
  return (
    <>
      <View style={styles.container}>
        <BackButton goBack={navigation.goBack} />
      </View>

      <Header>Edit Event</Header>
      <View style={styles.container2}>
        <TextInput
          label="Event Name"
          onChangeText={onChangeNameHandler}
          value={name}
        />
        <Text
          style={{
            fontSize: 15,
            color: "#515151",
            fontWeight: "bold",
            textDecorationLine: "underline",
            marginBottom: 5,
          }}
        >
          Select Location:
        </Text>
        <GooglePlacesAutocomplete
          value={location}
          returnKeyType="next"
          onPress={(data, details = null) => {
            onChangeLocationHandler(data.description);
          }}
          textInputProps={{
            InputComp: Input,
          }}
          query={{
            language: "en",
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: "#515151",
            fontWeight: "bold",
            textDecorationLine: "underline",
            textAlign: "left",
          }}
        >
          Select Date and Start Time:
        </Text>

        <View style={styles.buttons1}>
          <View style={styles.buttons2}>
            <TouchableOpacity
              style={{
                margin: 10,
                width: "30%",
                height: 30,
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                borderWidth: 1,
                backgroundColor: selectedDate ? "#ffd508" : "#88d166",
                justifyContent: "center",
                borderRadius: 10,
                borderColor: selectedDate ? "#ffd508" : "#88d166",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 5,
              }}
              onPress={showDatepicker}
              title="Date"
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>DATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 10,
                width: "30%",
                height: 30,
                textAlign: "center",
                alignItems: "center",
                alignSelf: "center",
                borderWidth: 1,
                backgroundColor: selectedTime ? "#ffd508" : "#88d166",
                justifyContent: "center",
                borderRadius: 10,
                borderColor: selectedTime ? "#ffd508" : "#88d166",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 5,
              }}
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
                timeZoneOffsetInMinutes
                minuteInterval="5"
                is24Hour={false}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </View>
        <Text
          style={{
            fontSize: 15,
            color: "#515151",
            fontWeight: "bold",
            textDecorationLine: "underline",
            textAlign: "left",
          }}
        >
          How Often to be Notified:
        </Text>

        <SectionContent
          style={{
            width: 410,
          }}
        >
          <View>
            <Picker
              items={items}
              value={recur}
              placeholder="Choose"
              onValueChange={(val) => {
                //console.log(val);
                onChangeRecurHandler(val);
              }}
            />
          </View>
        </SectionContent>

        <Text
          style={{
            fontSize: 15,
            color: "#515151",
            fontWeight: "bold",
            textDecorationLine: "underline",
            textAlign: "left",
          }}
        >
          Select Event Contacts:
        </Text>
        <View>
          <MultiSelect
            style={styles.dropdown2}
            data={cons}
            containerStyle={{ justifyContent: "center" }}
            selectedStyle={{
              backgroundColor: "white",
              borderRadius: 10,
              margin: 0,
            }}
            selectedTextStyle={{ fontSize: 15 }}
            labelField="full_name"
            valueField="full_name"
            placeholder="Select"
            value={contacts}
            onChange={onChangeContactsHandler}
            renderItem={(item) => _renderItem(item)}
          />
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => functionCombined2()}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>DELETE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.save}
          onPress={() => functionCombined()}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
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
  dropdown2: {
    backgroundColor: "white",
    borderColor: "#515151",
    borderWidth: 0.5,
    margin: 5,
    padding: 8,
    height: 50,
    width: 365,
    borderRadius: 10,
    alignSelf: "center",
    margin: 10,
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
  save: {
    width: 150,
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#88d166",
    borderColor: "#88d166",
    shadowColor: "#000",
    marginBottom: 50,
    marginLeft: 20,
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
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#f74d4d",
    borderColor: "#f74d4d",
    shadowColor: "#000",
    marginBottom: 50,
    marginRight: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
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
