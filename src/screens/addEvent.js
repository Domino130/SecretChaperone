import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity,} from "react-native";
import TextInput from '../components/TextInput'
import Header from '../components/Header'
import BackButton from '../components/BackButton';
import axios from "axios";
import Paragraph from '../components/Paragraph'



export default function Events({navigation}) {
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const onChangeNameHandler = (full_name) => {
    setFullName(full_name);
  };

  const onChangePhoneHandler = (phone) => {
    setPhone(phone);
  };

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const postcontact = () => {
    axios
      .post(
        "http://af99-2600-6c63-647f-979d-604b-f121-e116-863f.ngrok.io/contacts/add",
        {
          full_name,
          phone,
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

  functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
  };

  return (
    <>
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack}/>
    </View>

    <Header> Create an Event</Header>

          <TextInput
          label="Event Name"
          onChangeText={onChangeNameHandler}
          value={full_name}
          style={styles.box}
          returnKeyType="next"
        />

        <TextInput
          label="Date"
          keyboardType="numeric"
          onChangeText={onChangePhoneHandler}
          value={phone}
          style={styles.box}
        />

        <TextInput
          label="Time"
          onChangeText={onChangeEmailHandler}
          value={email}
          style={styles.box}
        />

        <TextInput
          label="Location"
          onChangeText={onChangeEmailHandler}
          value={email}
          style={styles.box}
        />

        <TextInput
          label="Notification Preference (E-mail or Text)"
          onChangeText={onChangeEmailHandler}
          value={email}
          style={styles.box}
        />

        <TextInput
          label="Contacts"
          onChangeText={onChangeNameHandler}
          value={full_name}
          style={styles.box}
          returnKeyType="next"
        />
  
        <Paragraph>Notification Message to be sent to Contacts:</Paragraph>
        <Paragraph>
        Secret Chaperone: name has added you as a contact to an 
        event:eventname at location from time to time.  You will receive periodically 
        notified unless they check in or they end the event. Reply 'STOP' to opt out.
        </Paragraph>

      <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
        <Text style={{ color: "white", }}>ADD</Text>
      </TouchableOpacity>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 65,
    padding: 8,
  },
  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#58B158",
    borderColor: "#58B158",
    
  },
});