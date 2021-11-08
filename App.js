import { StatusBar } from 'expo-status-bar';
import {NavBar} from './components'
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Stack } from "./screens/Stack";

import Question from './Navigation/Questions';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Question/>
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
    flex: 1,
  },
});
