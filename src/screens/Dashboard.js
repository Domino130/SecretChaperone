import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from './Contacts';
import { View, Text, TouchableOpacity } from 'react-native';
import Notifications from './Notifications'
import About from './About'

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, height: 60}}
            key={route.key}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222', textAlign: 'center' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function Dashboard({ navigation }) {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props}/>}>
          <Tab.Screen name="Contacts" component={Contacts} />
          {/* <Tab.Screen name="Home" component={Dashboard} /> */}
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>      
    )
}