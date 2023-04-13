import * as React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { Button, Text}  from 'react-native-paper';

import MyAppBar from '../components/appbar';

const MySettingPage = () => {
    return (
        <View style={styles.container}>
            <MyAppBar />
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
});

export default MySettingPage;