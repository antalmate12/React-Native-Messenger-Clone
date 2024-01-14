import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import UsersHList from './UsersHList';
import UsersChatHistory from './UsersChatHistory';

export const MainSideNav = () => {
  return (
    <View style={styles.sidenav}>
      <View>
        <Text style={styles.title}>Chatek</Text>
      </View>

      <TextInput
        autoFocus={false}
        placeholder="Keresés ..."
        style={styles.searchInput}
      />

      <UsersHList />

      <UsersChatHistory />
    </View>
  );
};

const styles = StyleSheet.create({
  sidenav: {
    width: 280,
    padding: 16,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    marginTop: 16,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});

export default MainSideNav;
