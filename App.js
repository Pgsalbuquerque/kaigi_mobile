import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './routes/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#fff" style="auto" />
      <View style={{flex:1, backgroundColor:'#000'}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}