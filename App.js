import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, View, Button, Text} from 'react-native';
import { styles } from './Styles';
import { Stack } from "./screens/Stack";
//import { Formik, Field, Form} from 'formik';

import Question from './Navigation/Questions';

export default function App() {
  return(
    <SafeAreaView style={{flex: 1}}>
      <Question/>
      
    </SafeAreaView>
  );
   
}
 