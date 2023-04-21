import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { CommonActions } from '@react-navigation/native';

import MyFAB from '../components/fab';
import MySettingPage from './settings';
import MyHome from './myhome';

type ParamList = {
    HomePage: { title: string };
    Settings: { title: string };
};



const Tab = createBottomTabNavigator<ParamList>();


export default function MyComponent() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar style={styles.bottomNavigator}
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
        />
      )}
    >
      <Tab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          title:"Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="md-home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          title: "Settings",
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="cogs" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
        <MyHome />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
       <MySettingPage />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    dialog: {
        backgroundColor: 'white',
        padding: 20,
    },
    bottomNavigator : {
      backgroundColor: 'white',
    }
});



