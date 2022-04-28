import React, { useState } from "react";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function editProfile() {
  const navigation = useNavigation();

  //async stuff
  const STORAGE_NAME = "@save_name";
  const STORAGE_BIRTHDAY = "@save_birthday";
  const STORAGE_STREET = "@save_street";
  const STORAGE_CITY = "@save_city";
  const STORAGE_STATE = "@save_state";
  const STORAGE_ZIP = "@save_zip";
  const STORAGE_HEIGHT = "@save_height";
  const STORAGE_WEIGHT = "@save_weight";
  const STORAGE_RACE = "@save_race";

  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [race, setRace] = useState("");

  ////////////////////////////////SET/////////////////////////////////////////
  const setUserName = async () => {
    if (name.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_NAME, name);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setBDay = async () => {
    if (birthday.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_BIRTHDAY, birthday);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setStreetAdd = async () => {
    if (street.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_STREET, street);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setUserCity = async () => {
    if (city.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_CITY, city);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setUserState = async () => {
    if (state.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_STATE, state);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setUserZip = async () => {
    if (zip.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_ZIP, zip);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setUserHeight = async () => {
    if (height.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_HEIGHT, height);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setUserWeight = async () => {
    if (weight.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_WEIGHT, weight);
      } catch (err) {
        alert(err);
      }
    }
  };
  const setUserRace = async () => {
    if (race.trim()) {
      try {
        await AsyncStorage.setItem(STORAGE_RACE, race);
      } catch (err) {
        alert(err);
      }
    }
  };

  const onSavePressed = () => {
    //async stuff
    setUserName();
    setBDay();
    setStreetAdd();
    setUserCity();
    setUserState();
    setUserZip();
    setUserHeight();
    setUserWeight();
    setUserRace();

    //navigate
    navigation.reset({
      index: 1,
      routes: [{ name: "MainTabs" }],
    });
    // navigation.navigate("MainTabs")
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <BackButton goBack={navigation.goBack} />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
          </View>

          <Header>Edit Personal Information</Header>

          <TextInput
            label="Name"
            returnKeyType="next"
            autoCapitalize="none"
            placeholder="ex. Jane Doe"
            onChangeText={(text) => setName(text)}
          />

          <TextInput
            label="Birthday"
            returnKeyType="next"
            placeholder="MM/DD/YYYY"
            onChangeText={(text) => setBirthday(text)}
          />

          <TextInput
            label="Street Address"
            returnKeyType="next"
            autoCapitalize="none"
            placeholder="123 Secret St."
            onChangeText={(text) => setStreet(text)}
          />

          <TextInput
            label="City"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setCity(text)}
          />

          <TextInput
            label="State"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setState(text)}
          />

          <TextInput
            label="Zip Code"
            keyboardType="numeric"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setZip(text)}
          />

          <TextInput
            label="Height"
            keyboardType="numeric"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setHeight(text)}
          />

          <TextInput
            label="Weight"
            keyboardType="numeric"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setWeight(text)}
          />

          <TextInput
            label="Race"
            multiline={true}
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(text) => setRace(text)}
          />
        </ScrollView>
        <View style={styles.fixToText}>
          <Button mode="contained" color="#88d166" onPress={onSavePressed}>
            Save
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#efefef",
    padding: 8,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "black",
    fontWeight: "bold",
  },
  cancel: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#88d166",
    borderColor: "#51cc29",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#88d166",
    margin: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
