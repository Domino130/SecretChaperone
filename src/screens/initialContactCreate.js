import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import TextInput from "../components/TextInput";
import Header from "../components/Header";
import axios from "axios";
import Paragraph from "../components/Paragraph"

export default function initialContactCreate({ navigation }) {
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
        "https://65d4-147-174-75-128.ngrok.io/contacts/add",
        {
          full_name,
          phone,
          email,
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const toHome = () =>{
        navigation.reset({
        index: 0,
        routes: [{ name: "Dashboard" }],
      });
  }
    

  const functionCombined = () => {
    postcontact();
    toHome();
  };

  return (
    <>
    <Header>

    </Header>
    <Header>
        
    </Header>
      <Header> Create Your First Contact</Header>

        <Paragraph>
            Add a contact to your contact book so they can be added to
            events. You can edit or delete contacts later.
        </Paragraph>

      <TextInput
        label="Full Name"
        returnKeyType="next"
        value={full_name}
        onChangeText={onChangeNameHandler}
      ></TextInput>

      <TextInput
        label="Phone"
        returnKeyType="next"
        value={phone}
        onChangeText={onChangePhoneHandler}
      ></TextInput>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={onChangeEmailHandler}
      ></TextInput>
      
      <TouchableOpacity style={styles.add} onPress={() => functionCombined()}>
        <Text style={{ color: "white" }}>ADD</Text>
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
