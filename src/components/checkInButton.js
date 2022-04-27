import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Button from "../components/Button"

import axios from "axios";


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function CheckInButton() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const disable = true;


  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    });
    
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <>
      <View>
        <Button mode="outlined" disabled={disable} onPress={async() => await schedulePushNotification()}>
            Check In
        </Button>
      </View>
  </>
  );
}

global.yo = "a date"

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Secret Chaperone",
      body: 'You have started your event: ' + global.yo,
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Secret Chaperone: " + global.yo,
      body: 'Check in on the app',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 5 },
  });


  //twilio
  const send = () =>{
    axios.post("http://9456-147-174-75-128.ngrok.io/api/messages")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }

  await send();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 5,
    backgroundColor: "#88d166",
    borderColor: "#51cc29",
  },
});