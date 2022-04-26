import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >

      <TouchableOpacity style={styles.add} onPress={async() => await schedulePushNotification()}>
        <Text style={{ color: "black", fontWeight: "bold" }}>Check In</Text>
      </TouchableOpacity>

      </View>
  </>
  );
}

// const checkInConfirm = () =>
//     Alert.alert(
//       "Check In Confirmation",
//       "Are you sure you want to check in?",
//       [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         },
//         { text: "Yes", onPress: async() => await schedulePushNotification() }
//       ]
//     );

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