import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

import {useColorScheme, View, Text, StyleSheet, TextInput} from 'react-native';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  /*const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };*/

  return (
    <NavigationContainer>
      <View style={styles.wrapper}>
        <MainSideNav />

        <MyStack />
      </View>
    </NavigationContainer>
  );
}

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Settings from './src/pages/Settings';
import MainSideNav from './src/components/MainSideNav';
import UserChat from './src/pages/UserChat';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="UserChat" component={UserChat} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default App;
