import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import {View} from 'react-native';
import Button from "../components/Button"


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
  const disab = false;
  

  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    });
    
    return () => {
      
     Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
          allowAnnouncements: true,
        },
      });
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };

     
  }, []);

  return (
    <>
      <View>
        <Button mode="outlined" onPress={async() => await schedulePushNotification()}>
            Check In
        </Button>
      </View>
  </>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Secret Chaperone: ",
      body: 'Thanks for checking in! You will be notified to do so until you end the event',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 1 },
  });
}