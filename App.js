import { StatusBar } from 'expo-status-bar';
import {NavBar} from './components'
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Stack } from "./screens/Stack";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack/>
      <NavBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});