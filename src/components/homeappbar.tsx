import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Platform, StyleSheet } from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const MyHomeAppBar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Content title="Home" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    container : {
        width:"100%",
        backgroundColor: "#FFF",
    }
})
export default MyHomeAppBar;