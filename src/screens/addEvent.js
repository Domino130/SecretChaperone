import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import Picker from "@react-native-picker/picker";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import axios from "axios";
import Paragraph from "../components/Paragraph";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MultiSelect } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";

export default function addEvent({ props }) {
  //////////////////////////DropDown//////////////////////////////////
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
        "http://5047-2600-6c63-647f-979d-3870-ee2b-d0b-ae6d.ngrok.io/contacts"
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
    setLocation(location);
  };
  const onChangeContactsHandler = (contacts) => {
    setContacts(contacts);
  };

  const postcontact = () => {
    axios
      .post(
        "http://5047-2600-6c63-647f-979d-3870-ee2b-d0b-ae6d.ngrok.io/events/add",
        {
          name,
          location,
          contacts,
          sms,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const createTwoButtonAlert = () =>
    Alert.alert("New Event Added!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  /////////////////////////////////////DateTimePicker//////////////////////////////////////////////////
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  /////////////////////////////////CheckBoxes/////////////////////////////////////
  const [sms, setSms] = useState(false);
  const [email, setSendEmail] = useState(false);

  const onChangeSMSHandler = (sms) => {
    setSms(sms);
  };
  const onChangeEmailHandler = (email) => {
    setSendEmail(email);
  };

  return (
    <>
      <View style={styles.container}>
        <BackButton goBack={navigation.goBack} />
      </View>

      <Header> Create an Event</Header>
      <ScrollView>
        <TextInput
          label="Event Name"
          onChangeText={onChangeNameHandler}
          value={name}
          returnKeyType="next"
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.add}
            onPress={showDatepicker}
            title="Date"
          >
            <Text style={{ color: "white" }}>DATE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.add}
            onPress={showTimepicker}
            title="Time"
          >
            <Text style={{ color: "white", margin: 10 }}>TIME</Text>
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <TextInput
          label="Location"
          onChangeText={onChangeLocationHandler}
          value={location}
          returnKeyType="next"
        />

        <View>
          <MultiSelect
            style={styles.dropdown2}
            data={cons}
            labelField="full_name"
            valueField="full_name"
            placeholder="Select Emergency Contact"
            value={contacts}
            onChange={onChangeContactsHandler}
            renderItem={(item) => _renderItem(item)}
          />
        </View>

        <Text>How to notify Emergency Contacts: </Text>
        <View>
          <CheckBox
            title="SMS"
            checked={sms}
            onChange={onChangeSMSHandler}
            onPress={() => setSms(!sms)}
          />
        </View>
        <View>
          <CheckBox
            title="Email"
            checked={email}
            onChange={onChangeEmailHandler}
            onPress={() => setSendEmail(!email)}
          />
        </View>

        <Paragraph>Notification Message to be sent to Contacts:</Paragraph>
        <Paragraph>
          Secret Chaperone: name has added you as a contact to an
          event:eventname at location from time to time. You will receive
          periodically notified unless they check in or they end the event.
          Reply 'STOP' to opt out.
        </Paragraph>

        <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
          <Text style={{ color: "white" }}>ADD</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  dropdown2: {
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 0.5,
    marginTop: 20,
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
    fontSize: 16,
  },
  container: {
    justifyContent: "center",
    paddingTop: 65,
    padding: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    backgroundColor: "#58B158",
    borderColor: "#58B158",
  },
});
