import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, StyleSheet, TouchableOpacity  } from 'react-native';
import * as SMS from 'expo-sms';
import { Card, Paragraph } from 'react-native-paper';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function CheckInButton() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [smsAvailable, setSmsAvailable] = React.useState(false);

  global.hi = "ani"

  const onComposeSms = React.useCallback(async () => {
    if (smsAvailable) {
      await SMS.sendSMSAsync(
        '9854458938',
        'Secret Chaperone:'+ global.hi +' has added you as a contact to an event:eventname at location from time to time. You will be notified if they do not check in or have ended the event.',
      );
    }
  }, [smsAvailable]);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
    //   console.log(response);
    });

    SMS.isAvailableAsync().then(setSmsAvailable);
    
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

      <TouchableOpacity style={styles.add} onPress={ async() => await schedulePushNotification()}>
        <Text style={{ color: "black", fontWeight: "bold" }}>Check In</Text>
      </TouchableOpacity>

      </View>
      <View style={styles.container}>
      <View>
        {smsAvailable
          ? <Paragraph>Press the button below to compose a SMS</Paragraph>
          : <Paragraph>Unfortunately, SMS is not available on this device</Paragraph>
        }
      </View>
      {/* <TouchableOpacity title="sms" onPress={onComposeSms} disabled={!smsAvailable} mode="contained" icon="message" style={styles.add}>
        Send sms
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.add} onPress={() => onComposeSms} disabled={!smsAvailable} mode="contained" icon="message">
        <Text style={{ color: "black", fontWeight: "bold" }}>Send SMS</Text>
      </TouchableOpacity>
      
    </View>
  </>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 5 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 36,
  },
  add: {
    width: "50%",
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#51cc29",
    borderColor: "#51cc29",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
  },
});