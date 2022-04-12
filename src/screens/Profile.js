import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { theme } from "../core/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UploadImage() {
  const [image] = useState(null);
  const addImage = () => {};

  return (
    <View style={imageUploaderStyles.container}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}

      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity
          onPress={addImage}
          style={imageUploaderStyles.uploadBtn}
        >
          <Text>{image ? "Edit" : "Upload"} Image</Text>
          <AntDesign name="camera" size={15} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 150,
    width: 150,
    backgroundColor: "#efefef",
    borderRadius: 999,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
    justifyContent: "center",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Profile() {
  const navigation = useNavigation();

  const onEditPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "editProfile" }],
    });
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
            <BackButton goBack={onCancelPressed} />
            <UploadImage />
          </View>

          <Header>Personal Information</Header>

          <Text style={styles.text}>Name: {name}</Text>
          {/* display name */}

          <Text style={styles.text}>Birthday: {birthday}</Text>
          {/* display birthday */}

          <Text style={styles.text}>Street Address: {street}</Text>
          {/* display name */}

          <Text style={styles.text}>City: {city}</Text>
          {/* display city */}

          <Text style={styles.text}>State: {state}</Text>
          {/* display state */}

          <Text style={styles.text}>Zip Code: {zip}</Text>
          {/* display zipcode */}

          <Text style={styles.text}>Height: {height} </Text>
          {/* display height */}

          <Text style={styles.text}>Weight: {weight} </Text>
          {/* display weight */}

          <Text style={styles.text}>Race: {race} </Text>
          {/* display race */}

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
