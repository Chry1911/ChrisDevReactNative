import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";

import { register, RegistrationData } from '../api/register';

const RegistrationApplication = ({navigation}: {navigation: any}) => {

    //use this for setter and getter the datas on the fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setUsername] = useState("");

    //create const for change datas in field and handle event on the component
    const handleChangeUsername = (value : string) => {
        setUsername(value);
    };

    const handlePasswordChange = (value : string) => {
        setPassword(value);
    };

    const handleEmailChange = (value : string) => {
        setEmail(value);
    }

    
    const loginFunction = async () => {
        console.log("enter into the function to register a user")
        //need to create it for create a new user Object to send to the Api
        const registrationData: RegistrationData = {
            name,
            email,
            password,
        };
        console.log(JSON.stringify(registrationData));
        
        register(registrationData)
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.data.message);
            if(response.data.message === 'success'){
                Alert.alert(
                    'Registration success',
                    'You registration was successfully, now you can login',
                        [
                        {
                            text: 'Login',
                            onPress: () => navigation.navigate("Login"),
                            style: 'cancel',
                        },
                        ],
                )
            }
            //alert(response.data)
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response.data); // the error response data returned by the server
            console.log(error.response.status); 
            alert("Something went wrong on the registration")
        });
    }

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
              onChangeText={handleChangeUsername}
              mode="outlined"
            /> 
          </View> 
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