import * as React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { Button, Text}  from 'react-native-paper';

import MyHomeAppBar from '../components/homeappbar';
import MyFAB from '../components/fab';

const MyHome = () => {
    return (
        <View style={styles.container}>
            <MyHomeAppBar />
            <MyFAB />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      width:"100%",
    },
});

export default MyHome;