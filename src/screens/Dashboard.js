import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import Contacts from "./Contacts";
import Notifications from "./Notifications";
import About from "./About";
import Profile from "./Profile";
import { Ionicons } from "@expo/vector-icons";
import EventCarousel from "../Home Page/EventCarousel";
import ProfileButton from "../components/profileButton";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <>
      {/* profile icon in top right */}
      {/* //bottom tabs */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Contacts") {
              iconName = focused ? "book" : "book-outline";
            } else if (route.name === "Notifications") {
              iconName = focused
                ? "notifications-circle"
                : "notifications-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog-outline";
            } else if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "gold",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={EventCarousel}
          options={{
            //headerRight: { Profile },
            headerRight: () => <ProfileButton />,
            headerTintColor: "black",
            headerTitle: () => (
              <Image
                style={{ width: 110, height: 65 }}
                source={require("../assets/logo.png")}
              />
            ),
            headerTitleStyle: {
              fontSize: 16,
            },
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            headerShown: true,
            /*headerRight: { Profile },
            headerRight: () => <Profile />,*/
            headerRight: () => <ProfileButton />,
            headerTitle: () => (
              <Image
                style={{ width: 110, height: 65 }}
                source={require("../assets/logo.png")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: true,
            /*headerRight: { Profile },
            headerRight: () => <Profile />,*/
            headerRight: () => <ProfileButton />,
            headerTitle: () => (
              <Image
                style={{ width: 110, height: 65 }}
                source={require("../assets/logo.png")}
              />
            ),
          }}
        />
        <Tab.Screen name="Settings" component={About} />
      </Tab.Navigator>
    </>
  );
}
