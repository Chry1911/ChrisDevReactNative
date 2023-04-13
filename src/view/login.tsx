import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";

import { login, LoginData } from '../api/auth';


const LoginApplication = ({navigation}: {navigation: any}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (value : string) => {
    setPassword(value);
  };

  const handleEmailChange = (value : string) => {
    setEmail(value);
  }
  
  const loginFunction = async () => {
    console.log("enter into the function to login a user")

    const loginData: LoginData = {
      email,
      password,
    };
    console.log(JSON.stringify(loginData));
    login(loginData)
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.data.message);
      if(response.data.message === 'success'){
          navigation.navigate("Home");
      }else {
        Alert.alert(response.data.message);
      }
    })
    .catch((error) => {
        alert("Something went wrong on the registration");
        console.log(error);
        console.log(error.response.data); // the error response data returned by the server
        console.log(error.response.status); 
        
    });
  }

  
  const forgetButton = () => alert("Password forgot");

  const registrationButton = () => {
    navigation.navigate('Register'); 
  }

  return (
    
      <View style={styles.container}>
        <Image style={styles.image} source={require("../../assets/logo.png")} /> 
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={handleEmailChange}
            mode="outlined"
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            mode="outlined"
          /> 
        </View> 
        <TouchableOpacity onPress={forgetButton}>
          <Text style={styles.forgot_button}>Forgot Password?</Text> 
        </TouchableOpacity> 
        <TouchableOpacity onPress={registrationButton}>
          <Text style={styles.forgot_button}>Not registred Yet?</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={loginFunction}>
          <Text style={styles.loginText}>LOGIN</Text> 
        </TouchableOpacity> 
      </View> 
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    width: "100%",
    height: 45,
    //marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    //padding: 10,
    //marginLeft: 20,
    width: "80%",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#33C4FF",
  },
  loginText: {
    alignItems: "center"
  }
});

export default LoginApplication;