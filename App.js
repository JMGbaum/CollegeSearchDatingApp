import { StatusBar } from 'expo-status-bar';
import {NavBar} from './components'
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './Styles';
import { Stack } from "./screens/Stack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack/>
      <NavBar/>
    </SafeAreaView>
  );
}