import React, { useState } from "react";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    // console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

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

export default function initialProfileEdit() {
  const navigation = useNavigation();

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
    try {
      await AsyncStorage.setItem(STORAGE_NAME, name);
    } catch (err) {
      alert(err);
    }
  };
  const setBDay = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_BIRTHDAY, birthday);
    } catch (err) {
      alert(err);
    }
  };
  const setStreetAdd = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_STREET, street);
    } catch (err) {
      alert(err);
    }
  };
  const setUserCity = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_CITY, city);
    } catch (err) {
      alert(err);
    }
  };
  const setUserState = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_STATE, state);
    } catch (err) {
      alert(err);
    }
  };
  const setUserZip = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_ZIP, zip);
    } catch (err) {
      alert(err);
    }
  };
  const setUserHeight = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_HEIGHT, height);
    } catch (err) {
      alert(err);
    }
  };
  const setUserWeight = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_WEIGHT, weight);
    } catch (err) {
      alert(err);
    }
  };
  const setUserRace = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_RACE, race);
    } catch (err) {
      alert(err);
    }
  };

  const onSavePressed = () => {
    //async functions
    setUserName();
    setBDay();
    setStreetAdd();
    setUserCity();
    setUserState();
    setUserZip();
    setUserHeight();
    setUserWeight();
    setUserRace();
    //nav reset
    navigation.reset({
      index: 0,
      routes: [{ name: "initialContactCreate" }],
    });
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.container}>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <UploadImage />
            </View>

            <Header>Add Personal Information</Header>

            <Paragraph>
              Input the following profile characteristics to be added to your
              account. These can be edited later, if needed.
            </Paragraph>

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

            <Button
              mode="contained"
              onPress={onSavePressed}
              style={{ marginTop: 16 }}
            >
              Save
            </Button>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#efefef",
    padding: 10,
  },
  top: {
    flexDirection: "row",
  },
  header: {
    fontSize: 30,
    margin: 5,
  },
  add: {
    margin: 5,
    padding: 7,
  },
  names: {
    paddingLeft: 10,
    backgroundColor: "white",
    width: 350,
    height: 45,
    margin: 10,
    paddingTop: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
  },
  noConts: {
    color: "#C1BEBE",
    margin: 20,
  },
});
