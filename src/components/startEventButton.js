import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import {View} from 'react-native';
import Button from "../components/Button"
import axios from "axios";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function StartEventButton() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const disable = false;


  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {});
    
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

//global check in variable that is set to false
global.in = false;
//global var to check if event has ended
global.end = true;

//event name, ideally from th
global.eventName = "Hanging with friends"

global.recur = 2;
var recurring = global.recur;


async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Secret Chaperone",
      body: 'You have started your event: ' + global.eventName,
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });

  // twilio to send to sms that an event has started
  const send = () =>{
    axios.post("http://b5a9-147-174-75-128.ngrok.io/api/messages/start")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }

  await send();
  

  //check in reminder recurring based on how often user inputted, ideally would loop until event ends

  //5 minutes
    if(recurring == 2){
        await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! for 2' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 2 * 60 },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! for 2 ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 4 * 60 },
      });
    }
  
  //10 minutes
    if(recurring == 10){
        await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 10 * 60 },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 20 * 60 },
      });
    }

  //15 minutes
    if(recurring == 15){
        await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 15 * 60 },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 30 * 60 },
      });
    }

  //20 minutes
    if(recurring == 20){
        await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 20 * 60 },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 40 * 60 },
      });
    }

  //25 minutes
    if(recurring == 25){
        await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 25 * 60 },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 50 * 60 },
      });
    }

  //30 minutes
    if(recurring == 30){
        await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 30 * 60 },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Secret Chaperone",
          body: 'Check In! ' + global.eventName,
          data: { data: 'goes here' },
        },
        trigger: { seconds: 60 * 60 },
      });
    }


  //update that the check in is true if button is pressed comes from checkinbutton.js
  //if check in has not been pressed && the end event has not been pressed, send sms
  // if(global.in == false && global.end == false){
  //   const notChecked = () =>{
  //     axios.post("http://abb0-147-174-75-128.ngrok.io/api/messages/noCheck")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  //   }
  //   await notChecked();
  // }

}