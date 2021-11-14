import React from 'react';
import { SafeAreaView } from 'react-native';
import Question from './Navigation/Questions';

const fs = require('expo-file-system');

export default function App() {
  // create local storage file if it doesn't already exist
  fs.getInfoAsync(fs.documentDirectory + "data.json").then(info => {
    if (!info.exists) {
      fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(require("./data.json")));
    }
  })

  return (
    <SafeAreaView style={{flex:1}}>
      <Question/>
    </SafeAreaView>
  );
}

