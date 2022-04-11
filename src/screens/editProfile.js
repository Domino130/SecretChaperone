import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';

function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4,3],
      quality: 1,
    });

    // console.log(JSON.stringify(_image));

   if (!_image.cancelled) {
     setImage(_image.uri);
   }
  };

  // const  checkForCameraRollPermission=async()=>{
  //   const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
  //   if (status !== 'granted') {
  //     alert("Please grant camera roll permissions inside your system's settings");
  //   }else{
  //     console.log('Media Permissions are granted')
  //   }
  // }

  // useEffect(() => {
  //   checkForCameraRollPermission()
  // }, []);

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

export default function editProfile() {
  const navigation = useNavigation();

  const onSavePressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  const onCancelPressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

  const onProfilePressed = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Profile" }],
    });
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <UploadImage />
          </View>

          <Header>Edit Personal Information</Header>

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

          <View style={styles.fixToText}>
            <Pressable style={styles.button} onPress={onProfilePressed}>
              <Text style={styles.fixToText}>Profile</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onSavePressed}>
              <Text style={styles.fixToText}>Save</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={onCancelPressed}>
              <Text style={styles.cancel}>Cancel</Text>
            </Pressable>
          </View>
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
    backgroundColor: "#51cc29",
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
    backgroundColor: "#63ce0c",
    margin: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});