import React from 'react';
import { SafeAreaView, View, Button, StyleSheet,Dimensions, Text} from 'react-native';

export const Settings_Screen = () => {
    return(
        <SafeAreaView>
          <Text style = {new_styles.title_text}> Welcome to your settings!</Text>
          <Text style = {new_styles.title_text}> Change Name</Text>
          <Text style = {new_styles.title_text}> Change Email</Text>
          <Text style = {new_styles.title_text}> Change Password</Text>
          <Text style = {new_styles.title_text}> Change Preferences</Text>
          <Text style = {new_styles.title_text}> Delete</Text>
        </SafeAreaView>
      )
}

export default Settings_Screen;

const new_styles = StyleSheet.create({
    text:{
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    stylize: {
      flex: 1, //flexible
      backgroundColor: '#9BD1D1',
      justifyContent: 'center',
      alignItems: 'center',
    },

 });
  
  