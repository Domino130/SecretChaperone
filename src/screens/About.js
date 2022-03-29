import React from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import Logo from '../components/Logo'
import Button from "../components/Button";
import { getAuth, signOut } from "firebase/auth";


const Separator = () => (
  <View style={styles.separator} />
);

export default function About({navigation}) {
	const auth = getAuth();

  return (
    <>
    <View style={styles.container}>
      <Logo/>
      <Separator />
        <Text style={{color: 'blue', fontSize: 20}}
          onPress={() => Linking.openURL('http://www.secretchaperone.com/about')}>
          Learn More About Secret Chaperone
        </Text> 
    </View>
	  <Button
        mode="outlined"
        onPress={() => signOut(auth)}
		status="danger"
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