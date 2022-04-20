import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import Button from "../components/Button";



export default function editProfile() {
  const navigation = useNavigation();

  const onSavePressed = () => {
    //async stuff
    navigation.reset({
      index: 0,
      routes: [{ name: "MainTabs" }],
    });
  };

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