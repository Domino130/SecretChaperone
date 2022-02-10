import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from './Contacts';
import Notifications from './Notifications'
import About from './About'
import Profile from './Profile'
import { Ionicons } from '@expo/vector-icons';
import EventCarousel from '../Home Page/EventCarousel'


const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <>
    {/* profile icon in top right */}
    {/* //bottom tabs */}
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Contacts") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Notifications") {
            iconName = focused
              ? "notifications-circle"
              : "notifications-circle-outline";
          } else if (route.name === "About") {
            iconName = focused
              ? 'notifications-circle'
              : 'notifications-circle-outline';
          } else if (route.name === 'About') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Profile'){
            iconName = focused
            ? 'person-circle'
            : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'gold',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      
      <Tab.Screen name="Home" component={EventCarousel} options={{
            headerTitleAlign: "center",
            headerRight: {Profile}, 
            headerRight: () => (
              <Profile />
            ),

            headerTintColor: "black",
            headerTitleStyle: {
              fontSize: 16,
            },
          }} />
      <Tab.Screen name="Contacts" component={Contacts}/>
      <Tab.Screen name="Notifications" component={Notifications}/>
      <Tab.Screen name="About" component={About}/> 
      <Tab.Screen name="Profile" component={Profile}/>
  </Tab.Navigator>
  </>
  )
}
