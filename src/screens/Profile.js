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
    //position: "relative",
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

  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onSubmitPressed = () => {
    // const emailError = emailValidator(email.value)
    // const passwordError = passwordValidator(password.value)
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError })
    //   setPassword({ ...password, error: passwordError })
    //   return
    // }
    navigation.reset({
      index: 0,
      routes: [{ name: "Dashboard" }],
    });
  };

  return (
    <>
      <ScrollView>
        <View style={{ textAlign: "center" }}>
          <UploadImage />
        </View>

        <Header>Personal Information</Header>

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.forgot}>Edit</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          label="Full Name"
          returnKeyType="next"
          autoCapitalize="none"
        />

        <TextInput
          label="Birthday"
          returnKeyType="next"
        />

        <TextInput
          label="Street Address"
          returnKeyType="next"
          autoCapitalize="none"
        />

        <TextInput 
          label="City" 
          returnKeyType="next" 
          autoCapitalize="none" />

        <TextInput 
          label="State" 
          returnKeyType="next" 
          autoCapitalize="none" />

        <TextInput
          label="Zip Code"
          keyboardType='numeric'
          returnKeyType="next"
          autoCapitalize="none"
        />

        <TextInput 
          label="Height" 
          keyboardType='numeric'
          returnKeyType="next" 
          autoCapitalize="none" 
        />

        <TextInput 
          label="Weight" 
          keyboardType='numeric'
          returnKeyType="next" 
          autoCapitalize="none" 
        />

        <TextInput 
          label="Race" 
          multiline = {true}
          returnKeyType="next" 
          autoCapitalize="none" 
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.forgot}>Skip</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" onPress={onSubmitPressed}>
          Save
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
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

