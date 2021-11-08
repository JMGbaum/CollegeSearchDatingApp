import { StatusBar } from 'expo-status-bar';
import {NavBar} from './components'
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Stack } from "./screens/Stack";

import Question from './Navigation/Questions';
//<NavBar/>

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Question/>
    </SafeAreaView>
  );
}
