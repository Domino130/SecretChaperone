import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
import axios from 'axios';

// function componentDidMount(){
//   console.log("this is componentdidmount");
  
//   navigation.reset({
//     index: 0,
//     routes: [{ name: 'Dashboard' }],

//   // Alert.alert("Logged In!", "", [
//   //   { text: "Continue", onPress: () => console.log("User logged in") },
//   // ]);
// }

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmailHandler = (email) => {
    setEmail(email);
    };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const loginSuccess = () => {
    console.log("login success function");
  
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })

    Alert.alert("Logged In!", "", [
      { text: "Continue", onPress: () => console.log("User logged in") },
    ]);
  }

  const loginFail = () => {
    console.log("failed");
  
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })

    Alert.alert("Incorrect Email or Password!", "", [
      { text: "Try Again", onPress: () => console.log("trying again") },
    ]);
  }

  const onLoginPressed = () => {
    // const nameError = nameValidator(name.value)
    // const emailError = emailValidator(email.value)
    // const passwordError = passwordValidator(password.value)
    // if (emailError || passwordError || nameError) {
    //   setName({ ...name, error: nameError })
    //   setEmail({ ...email, error: emailError })
    //   setPassword({ ...password, error: passwordError })
    //   return
    // } 
    // else{
      
      axios
      .post(
        "https://dd81-71-15-36-128.ngrok.io/users/login",
        {
          email,
          password
        },
        {
          headers: {
            'Content-Type' : 'application/json; charset=UTF-8',
            'Accept': 'Token',
            "Access-Control-Allow-Origin": "*",
          }
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
      // .catch(loginFail)
    // }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={onChangeEmailHandler}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={onChangePasswordHandler}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})