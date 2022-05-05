import React, { useState, useEffect } from "react";
import {StyleSheet, Modal, Text, View, TouchableOpacity, Alert} from "react-native";
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
import { Picker, SectionContent } from "react-native-rapi-ui";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
  const [contacts, setContacts] = useState([]);

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

  const postcontact = () => {
    axios
      .post(
        "http://520c-147-174-75-128.ngrok.io/events/add",
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
    Alert.alert("New Event Added!", "", [
      { text: "OK", onPress: () => console.log("add event Pressed") },
    ]);

  const functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
    send();
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  /////////////////////////////////////DateTimePicker//////////////////////////////////////////////////

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);
  const [selectedDate, setSelectedDate] = useState(true);
  const [selectedTime, setSelectedTime] = useState(false);

  const [dateTime, setDateTime] = useState("");
  const [eventDate, setEventDate] = useState(" ");
  const [startTime, setStartTime] = useState(" ");


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(true);
    setDate(currentDate);
    setDateTime(date);
    console.log(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getMonth() +
      1 +
      "/" +
      tempDate.getDate() +
      "/" +
      tempDate.getFullYear();
    let fTime = tempDate.getHours() +-7 + " : " + tempDate.getMinutes();

    setEventDate(fDate);
    setStartTime(fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDateTimepicker = () => {
    showMode("datetime");
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
  ///////////////////////////////////Recurrence Dropdown//////////////////////////////////////////

  const [recur, setRecur] = React.useState("");
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

  ///////////////////////////////////////Message Alert////////////////////////////////////////
  const [modalVisible, setModalVisible] = useState(false);

  // twilio to notify contact that they have been added to an event
  const send = () =>{
    axios.post("http://520c-147-174-75-128.ngrok.io/api/messages/contact")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }

  ///////////////////////////////////////Message Alert////////////////////////////////////////

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
        <Paragraph
          style={{
            textAlign: "center",
            marginTop: 2,
            marginBottom: 5,
            color: "blue",
            fontSize: 15,
            color: "#9a9fa1",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          {" "}
          Message to be sent to Event Contacts
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <MaterialCommunityIcons
                name="help-circle-outline"
                color={"#ffd508"}
                size={20}
              />{" "}
            </Text>
          </TouchableOpacity>
        </Paragraph>
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
            activeColor="#e0e0e0"
            labelField="full_name"
            valueField="full_name"
            placeholder="Select"
            placeholderStyle={{ color: "grey" }}
            value={contacts}
            onChange={onChangeContactsHandler}
            renderItem={(item) => _renderItem(item)}
          />
        </View>

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  <Paragraph>
                    Message to be sent to Event Contacts: {"\n"}
                    {"\n"}"Secret Chaperone: {data} has added you as a contact
                    to an event: {name} at {location}, 
                     beginning at {startTime}. You will be notified when they
                    have started the event, if they do not check, and once they
                    have ended the event."
                  </Paragraph>
                </Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
  bottomMessage: {
    textAlign: "left",
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#88d166",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 10,
    textAlign: "left",
  },
});
