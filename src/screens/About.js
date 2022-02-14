import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../components/Logo'
import Button from "../components/Button";

const Separator = () => (
  <View style={styles.separator} />
);

export default function About({navigation}) {
  return (
    <>
    <View style={styles.container}>
      <Logo/>
      <Separator />
      <Text>
        Our Mission:
        At Secret Chaperone, our mission is to provide a service that enables 
        anyone to proactively protect themselves or their loved ones from 
        potential predators or harmful situations when they're alone. We 
        understand that in today's world many situations bring about encounters 
        with people you may not know, from your social life to your profession 
        alone. That's why we've created a product that allows you and your 
        loved ones the peace of mind of knowing where you are and who you are 
        with, if and only when you need them to be alerted in case of an emergency.
      </Text>
    </View>
    <Button
        mode="outlined"
        onPress={() => navigation.navigate('StartScreen')}
      >
        Log Out
      </Button>
    </>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });