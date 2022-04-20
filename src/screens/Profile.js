import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {Image, View, TouchableOpacity, Text, StyleSheet, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { theme } from "../core/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfilePicture from "../components/ProfilePicture";

export default function Profile() {
  const navigation = useNavigation();

  const onEditPressed = () => {
    navigation.navigate("editProfile");
  };

  const onCancelPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  //////////////////////////LOAD////////////////////////////////////
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

  const retrieveName = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_NAME);
      if (name !== null) {
        console.log(name);
        setName(name);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };
  const retrieveBirthday = async () => {
    try {
      const birth = await AsyncStorage.getItem(STORAGE_BIRTHDAY);
      if (birth !== null) {
        console.log(birth);
        setBirthday(birth);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };
  const retrieveStreet = async () => {
    try {
      const street = await AsyncStorage.getItem(STORAGE_STREET);
      if (street !== null) {
        console.log(street);
        setStreet(street);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };
  const retrieveCity = async () => {
    try {
      const city = await AsyncStorage.getItem(STORAGE_CITY);
      if (city !== null) {
        console.log(city);
        setCity(city);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };

  const retrieveState = async () => {
    try {
      const state = await AsyncStorage.getItem(STORAGE_STATE);
      if (state !== null) {
        console.log(state);
        setState(state);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };

  const retrieveZip = async () => {
    try {
      const zip = await AsyncStorage.getItem(STORAGE_ZIP);
      if (zip !== null) {
        console.log(zip);
        setZip(zip);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };

  const retrieveHeight = async () => {
    try {
      const height = await AsyncStorage.getItem(STORAGE_HEIGHT);
      if (height !== null) {
        console.log(height);
        setHeight(height);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };
  const retrieveWeight = async () => {
    try {
      const weight = await AsyncStorage.getItem(STORAGE_WEIGHT);
      if (weight !== null) {
        console.log(weight);
        setWeight(weight);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };
  const retrieveRace = async () => {
    try {
      const race = await AsyncStorage.getItem(STORAGE_RACE);
      if (race !== null) {
        console.log(race);
        setRace(race);
      }
    } catch (error) {
      alert(err); // Error retrieving data
    }
  };

  useEffect(() => {
    retrieveName();
    retrieveBirthday();
    retrieveStreet();
    retrieveCity();
    retrieveState();
    retrieveZip();
    retrieveHeight();
    retrieveWeight();
    retrieveRace();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <BackButton goBack={navigation.goBack} />
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <Text/>
            <ProfilePicture />
          </View>

          <Header>About Me</Header>

          <Text style={styles.text}>Name: {name}</Text>

          <Text style={styles.text}>Birthday: {birthday}</Text>

          <Text style={styles.text}>Street Address: {street}</Text>

          <Text style={styles.text}>City: {city}</Text>

          <Text style={styles.text}>State: {state}</Text>

          <Text style={styles.text}>Zip Code: {zip}</Text>

          <Text style={styles.text}>Height: {height}</Text>

          <Text style={styles.text}>Weight: {weight}</Text>

          <Text style={styles.text}>Race: {race}</Text>

          <Button mode="contained" color="#88d166" onPress={onEditPressed}>
            Edit Profile
          </Button>
        </ScrollView>
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
  button: {
	margin: 20,
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
    textAlign: "center",
    alignItems: "center",
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  text: {
    fontSize: 20,
  },
});