import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import users from '../constants/users';

export const UsersChatHistory = () => {
  return (
    <View style={styles.usersHistoryParent}>
      <FlatList
        data={users}
        keyExtractor={item => item.login.uuid.toString()}
        renderItem={({item}) => (
          <View style={styles.userItem}>
            <Image source={{uri: item.picture.medium}} style={styles.avatar} />
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={styles.userMessage}>lorem ipsum dolor sit amet</Text>
            </View>
          </View>
        )}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  usersHistoryParent: {marginTop: 16},
  userItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    // backgroundColor: '#eee',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 32,
    marginBottom: 4,
  },
  userNameContainer: {
    marginLeft: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: '500',
  },
  userMessage: {
    fontSize: 13,
    color: '#888',
  },
});

export default UsersChatHistory;
