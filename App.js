import React from 'react';
import { SafeAreaView} from 'react-native';

import Question from './Navigation/Questions';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Question/>
    </SafeAreaView>
  );
}

