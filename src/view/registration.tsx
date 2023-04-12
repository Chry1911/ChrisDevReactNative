import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";

import { AppService } from '../services/app.service';
import { user } from '../objects/user';

const RegistrationApplication = ({navigation}: {navigation: any}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    //need to create it for create a new user Object to send to the Api
    const appService = new AppService();
    const [user, setUser] = useState<any>([]);

    const createUser = async (e:any) => {
        const response = await appService.registerUser(user);
        console.log(response);
    }
    
    const loginFunction = () => {
        //navigation.navigate('Home'); 
        console.log("Now call the Api to create a new user");
        let userClone = {...user};
        userClone.name = username;
        userClone.password = password;
        userClone.email = email;
        createUser(userClone);
    };

    const loginButton = () => {
        navigation.navigate('Login'); 
    }
  
    return (
      
        <View style={styles.container}>
          <Image style={styles.image} source={require("../../assets/logo.png")} /> 
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="#003f5c"
              onChangeText={(username) => setUsername(username)}
              mode="outlined"
            /> 
          </View> 
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
          <TouchableOpacity onPress={loginButton}>
            <Text style={styles.forgot_button}>Registred Yet?</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={loginFunction}>
            <Text style={styles.loginText}>REGISTER</Text> 
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
  
  export default RegistrationApplication;