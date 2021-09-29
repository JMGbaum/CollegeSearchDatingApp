import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button } from 'react-native';
import { styles } from './Styles';
import { Stack } from "./screens/Stack";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Stack />
        <StatusBar style="auto" />
      </ScrollView>
      <View style={styles.navbar}>
        <Button id="likes"></Button>
        <Button id="stack"></Button>
        <Button id="settings"></Button>
      </View>
    </View>
  );
}