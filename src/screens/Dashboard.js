import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import Contacts from "./Contacts";
import Notifications from "./Notifications";
import About from "./About";
import { Ionicons } from "@expo/vector-icons";
import EventCarousel from "../Home Page/EventCarousel";
import ProfileButton from "../components/profileButton";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <>
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
            title:"Home",
            headerRight: () => <ProfileButton />,
            headerTintColor: "black",
            headerLeft: () => (
              <Image
                style={{ width: 50, height: 65, marginBottom: 21, marginLeft: 5}}
                source={require("../assets/small_logo.png")}
              />
            ),
            headerTitleStyle: {
              fontSize: 16
              
            },
            headerTitleAlign: 'center'
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            title: "Contacts",
            headerShown: true,
            headerRight: () => <ProfileButton />,
            headerLeft: () => (
              <Image
                style={{ width: 50, height: 65, marginBottom: 21, marginLeft: 5}}
                source={require("../assets/small_logo.png")}
              />
            ),
            headerTitleAlign: 'center'
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: "Notifications",
            headerShown: true,
            headerRight: () => <ProfileButton />,
            headerLeft: () => (
              <Image
                style={{ width: 50, height: 65, marginBottom: 21, marginLeft: 5}}
                source={require("../assets/small_logo.png")}
              />
            ),
            headerTitleAlign: 'center'
          }}
        />
        <Tab.Screen name="Settings" component={About}
            options={{
              title: "Settings",
              headerShown: true,
              headerRight: () => <ProfileButton />,
              headerLeft: () => (
                <Image
                  style={{ width: 50, height: 65, marginBottom: 21, marginLeft: 5 }}
                  source={require("../assets/small_logo.png")}
                />
              ),
              headerTitleAlign: 'center'
            }}
        />
      </Tab.Navigator>
    </>
  );
}
