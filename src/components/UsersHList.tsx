import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import users from '../constants/users';

export const UsersHList = () => {
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item.login.uuid.toString()}
        renderItem={({item}) => (
          <View style={styles.userItem}>
            <Image source={{uri: item.picture.medium}} style={styles.avatar} />
            <View style={styles.activeIndicator} />
            <View style={styles.userNameContainer}>
              <Text style={styles.userNameText}>{item.name.first}</Text>
              <Text style={styles.userNameText}>{item.name.last}</Text>
            </View>
          </View>
        )}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userItem: {
    marginRight: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 32,
    marginBottom: 4,
  },
  activeIndicator: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: '#4caf50',
    position: 'absolute',
    top: 36,
    right: 0,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userNameContainer: {},
  userNameText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default UsersHList;
