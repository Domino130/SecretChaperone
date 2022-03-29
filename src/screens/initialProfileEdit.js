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
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

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

export default function initialProfileEdit() {
  const navigation = useNavigation();

  const onSavePressed = () => {
    //axios update user info
    navigation.reset({
      index: 0,
      routes: [{ name: "initialContactCreate" }],
    });
  };

  return (
    <>
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

          <TextInput label="Name" returnKeyType="next" autoCapitalize="none" />

          <TextInput label="Birthday" returnKeyType="next" />

          <TextInput
            label="Street Address"
            returnKeyType="next"
            autoCapitalize="none"
          />

          <TextInput label="City" returnKeyType="next" autoCapitalize="none" />

          <TextInput label="State" returnKeyType="next" autoCapitalize="none" />

          <TextInput
            label="Zip Code"
            keyboardType="numeric"
            returnKeyType="next"
            autoCapitalize="none"
          />

          <TextInput
            label="Height"
            keyboardType="numeric"
            returnKeyType="next"
            autoCapitalize="none"
          />

          <TextInput
            label="Weight"
            keyboardType="numeric"
            returnKeyType="next"
            autoCapitalize="none"
          />

          <TextInput
            label="Race"
            multiline={true}
            returnKeyType="next"
            autoCapitalize="none"
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