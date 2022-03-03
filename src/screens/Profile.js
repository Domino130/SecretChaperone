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
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { theme } from "../core/theme";
// import User from "../../backend/models/user.model"

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
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <BackButton goBack={onCancelPressed}/>
          <UploadImage />
        </View>

        <Header>Personal Information</Header>

        <Text>Name</Text>
        {/* display name */}

        <Text>Birthday</Text>
        {/* display birthday */}

        <Text>Street Address</Text>
        {/* display name */}

        <Text>City</Text>
        {/* display city */}

        <Text>State</Text>
        {/* display state */}

        <Text>Zip Code</Text>
        {/* display zipcode */}

        <Text>Height</Text>
        {/* display height */}

        <Text>Weight</Text>
        {/* display weight */}

        <Text>Race</Text>
        {/* display race */}

        <Button mode="contained" onPress={onEditPressed}>
          Edit Profile
        </Button>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center"
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

