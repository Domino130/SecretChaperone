import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import {View, StyleSheet } from 'react-native';
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
            Start Event
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
      body: 'You have started your event:!! ' + global.yo,
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });

  //twilio to send to sms that an event has started
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
    borderWidth: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 5,
    backgroundColor: "gold",
    borderColor: "gold",
  },
});