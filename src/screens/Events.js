import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,} from "react-native";
import BackButton from '../components/BackButton';
import axios from "axios";



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
    Alert.alert("New Contact Added!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  functionCombined = () => {
    postcontact();
    createTwoButtonAlert();
  };





  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack}/>
      <Text style={styles.header}>Create a Event</Text>

      <TextInput
        placeholder="Name"
        onChangeText={onChangeNameHandler}
        value={full_name}
        style={styles.box}
      ></TextInput>

      <TextInput
        placeholder="Phone Number"
        keyboardType="numeric"
        onChangeText={onChangePhoneHandler}
        value={phone}
        style={styles.box}
      ></TextInput>

      <TextInput
        placeholder="Email"
        onChangeText={onChangeEmailHandler}
        value={email}
        style={styles.box}
      ></TextInput>

      <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
        <Text style={{ color: "white" }}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "white",
    padding: 8,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    paddingBottom: 70,
    fontWeight: "bold",
  },
  box: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
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