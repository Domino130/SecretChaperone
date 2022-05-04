import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import {View} from 'react-native';
import Button from "../components/Button";
import axios from "axios";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function EndEventButton() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  
  //should be disabled if start event isnt true

  ///////////////////////////////////////DELETE/////////////////////////////////////////////
  // const deleteEvent = (id) => {
  //   axios
  //     .delete(
  //       "http://ed56-147-174-75-128.ngrok.io/events/" +
  //         ID,
  //       {
  //         name,
  //         location,
  //         dateTime,
  //         contacts,
  //         recur,
  //       }
  //     )
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  const functionCombined = () => {
    // deleteEvent();
    schedulePushNotification();
  };

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    });
    
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <>
      <View>
        <Button mode="outlined" onPress={() => functionCombined()}>
            End Event
        </Button>
      </View>
  </>
  );
}


async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Secret Chaperone",
      body: 'You have ended your event',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });


   //twilio
   const send = () =>{
    axios.post("http://37e3-147-174-75-128.ngrok.io/api/messages/end")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }

  await send();
}