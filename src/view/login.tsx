import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";




const LoginApplication = ({navigation}: {navigation: any}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginFunction = () => {
    //console.log(email);
    //console.log(password);
    navigation.navigate('Home'); 
  };
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
            onChangeText={(email) => setEmail(email)}
            mode="outlined"
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
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