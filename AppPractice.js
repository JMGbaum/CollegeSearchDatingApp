import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity,Image, SafeAreaView, Button, Alert} from 'react-native';

//safeareaview only works for IOS
//numberofLines
//onpress --> used for text
//use Touchable to touch pics
//for network im, have width and height
//view is like a card 
//Alert API only works on IOS

export default function AppPractice() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello </Text> 
      <TouchableHighlight onPress={() => alert('Pressed')}>
        <Image source={{ 
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300" }}/>
      </TouchableHighlight >
      <TouchableOpacity onPress={() => alert('Hello')}>
        <View style={{
          width: 200,
          height: 300,
          backgroundColor: "aqua"
        }}/>
      </TouchableOpacity>
      <Button 
        color = "pink"
        title="Click ME" onPress={() => Alert.prompt("Click","Did you click me?", text => console.log(text))}
        />


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexible
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


