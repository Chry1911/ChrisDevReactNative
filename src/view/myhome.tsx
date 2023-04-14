import * as React from 'react';
import { View, StyleSheet} from 'react-native';

import MyHomeAppBar from '../components/homeappbar';
import MyFAB from '../components/fab';
import MyCard from '../components/card';

const MyHome = () => {
    return (
        <View style={styles.container}>
            <MyHomeAppBar />
            <MyCard />
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