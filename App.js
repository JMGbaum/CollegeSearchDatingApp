import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import { styles } from './Styles';
import { Stack } from "./screens/Stack";

export default function App() {
  return (
    <View style={{flex:1, backgroundColor:"#000000"}}>
      <SafeAreaView style={styles.container}>
        <View>
          <Stack />
          <StatusBar style="auto" />
        </View>
        <View style={styles.navbar}>
          <Button id="likes" title="Likes"></Button>
          <Button id="stack" title="Stack"></Button>
          <Button id="settings" title="Settings"></Button>
        </View>
      </SafeAreaView>
    </View>
  );
}