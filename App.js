import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Profile,
  addContact,
} from "./src/screens";
import editContact from "./src/screens/editContact";
import addEvent from "./src/screens/addEvent";
import TermsAndConditions from "./src/screens/TermsAndConditions";
import accountInfo from "./src/screens/accountInfo";
import editProfile from "./src/screens/editProfile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="TermsAndConditions"
            component={TermsAndConditions}
          />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="addContact" component={addContact} />
          <Stack.Screen name="addEvent" component={addEvent} />
          <Stack.Screen name="accountInfo" component={accountInfo} />
          <Stack.Screen name="editContact" component={editContact} />
          <Stack.Screen name="editProfile" component={editProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
