import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import First from "./src/view/login";
import Second from "./src/view/home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Login"
          component={First}/>
        <Stack.Screen 
        name="Home" 
        component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
export default App;