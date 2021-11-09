import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Button, StyleSheet,Dimensions, Text} from 'react-native';


import { Stack } from "../screens/Stack";
import { Logs } from "../screens/Login";
import { Settings_Screen } from "../screens/Settings";
import { Register_Screen } from "../screens/Register";
import {Q1} from "../Questions/Question1";
import {Q2} from "../Questions/Question2";
import {Q3} from "../Questions/Question3";
import {Q4} from "../Questions/Question4";
import {Q5} from "../Questions/Question5";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const QuestionStack = createNativeStackNavigator();
<QuestionStack.Navigator screenOptions={{headerShown: false}}></QuestionStack.Navigator>

const Welcomescreen = ({ navigation }) => {
  return(
    <SafeAreaView style = {new_styles.stylize}>
      <Button style = {new_styles.button}
        title="Login" 
        color='black'
        onPress={() =>
          navigation.navigate('Login')
        }
      />
      <Button 
        title="Register"
        color='black'
        onPress={() =>
          navigation.navigate('Register')
        }
      />
    </SafeAreaView>
  )
}

const Login = ({ navigation, props }) => {
  return (
    <SafeAreaView style = {new_styles.stylize}>
      <Logs />
      <Button
        title="Log in"
        color='black'
        onPress={() =>
          navigation.navigate('Real App')
        }
      />
    </SafeAreaView>
    
  );
};

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style = {new_styles.stylize}>
      <Register_Screen/>
      <Button 
        title="Go to Questionaire"
        color='black'
        onPress={() =>
          navigation.navigate('Question 1')
        }
      />
    </SafeAreaView>
    
  );
};


const Question1Screen = ({ navigation }) => {
  return (
    <SafeAreaView style = {new_styles.checkboxes}>
      <Q1/>
      <Button 
        title="Go to Question 2"
        color='black'
        onPress={() =>
          navigation.navigate('Question 2')
        }
      />
    </SafeAreaView>
    
  );
};
const Question2Screen = ({navigation}) => {
  return(
    <SafeAreaView style = {new_styles.checkboxes}>
      <Q2/>
      <Button
        title="Go to Question 3"
        color ='black'
        onPress={() =>
          navigation.navigate('Question 3')
        }
      />
    </SafeAreaView>

  );
};

const Question3Screen = ({navigation}) => {
  return(
    <SafeAreaView style = {new_styles.checkboxes}>
      <Q3/>
      <Button
        title="Go to Question 4"
        color='black'
        onPress={() =>
          navigation.navigate('Question 4')
        }
      />
    </SafeAreaView>

  );
};

const Question4Screen = ({navigation}) => {
  return(
    <SafeAreaView style = {new_styles.drop_down}> 
      <Q4/>
      <Button
        title="Go to Question 5"
        color='black'
        onPress={() =>
          navigation.navigate('Question 5')
        }
      />
    </SafeAreaView>

  );
};

const Question5Screen = ({navigation}) => {
  return(
    <SafeAreaView style = {new_styles.checkboxes}>
      <Q5/>
      <Button 
        title="Done"
        color='black'
        onPress={() =>
          navigation.navigate('Login')
        }
      />
    </SafeAreaView>

  );
};

const RealApp = ({navigation}) => {
  return(
    <View style={{flex:1, backgroundColor:"#000000"}}>
      <SafeAreaView style={new_styles.container}>
        <View>
          <Stack />
          <StatusBar style="auto" />
        </View>
        <View style={new_styles.navbar}>
          <Button 
              title="Settings"
              onPress={() =>
                navigation.navigate('Settings')
              }
          />
          <Button title="Likes"
              onPress={() =>
                navigation.navigate('Likes')
              }></Button>
          
        </View>
      </SafeAreaView>
    </View>

  );
};

const Settings = ({navigation}) => {
  return(
    <SafeAreaView>
      <Settings_Screen/>
      <View style={new_styles.other_navbar}>
          <Button 
              title="Stack"
              onPress={() =>
                navigation.navigate('Real App')
              }
          />
          <Button title="Likes"
              onPress={() =>
                navigation.navigate('Likes')
              }></Button>
          
      </View>
    </SafeAreaView>


  );
};

const Likes = ({navigation}) => {
  return(
    <SafeAreaView>
      <Text style = {new_styles.title_text}> Welcome to your likes!</Text>
      <View style={new_styles.other_navbar}>
          <Button 
              title="Stack"
              onPress={() =>
                navigation.navigate('Real App')
              }
          />
          <Button title="Settings"
              onPress={() =>
                navigation.navigate('Settings')
              }></Button>
          
      </View>

    </SafeAreaView>
    
  );
};
export function Question() {
  return (
    <NavigationContainer>
      <QuestionStack.Navigator>
        <QuestionStack.Screen name="Welcome" component={Welcomescreen} />
        <QuestionStack.Screen name="Login" component={Login} 
        options={{ headerBackVisible: false, headerShown: false}}/>
        <QuestionStack.Screen name="Real App" component={RealApp} 
        options={{ headerBackVisible: false, headerShown: false}}/>
        <QuestionStack.Screen name="Register" component={Register}
        options={{ headerBackVisible: false, headerShown: false}} />
        <QuestionStack.Screen
          name="Question 1"
          component={Question1Screen}
        />
        <QuestionStack.Screen name="Question 2" component={Question2Screen} />
        <QuestionStack.Screen name="Question 3" component={Question3Screen} />
        <QuestionStack.Screen name="Question 4" component={Question4Screen} />
        <QuestionStack.Screen name="Question 5" component={Question5Screen} />

        <QuestionStack.Screen name="Settings" component={Settings}
        options={{ headerBackVisible: false}}/>
        <QuestionStack.Screen name="Likes" component={Likes}
        options={{ headerBackVisible: false}}/>
        
        
        
      </QuestionStack.Navigator>
    </NavigationContainer>
  );
}

export default Question;

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

  checkboxes: {
    flex: 1, //flexible
    fontSize: 30,
    backgroundColor: '#9BD1D1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  drop_down: {
    flex: 1, //flexible
    //fontSize: 30,
    backgroundColor: '#9BD1D1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navbar: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*0.1,
    backgroundColor: "#b1b1b1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    top: Dimensions.get("screen").height*0.84,
    zIndex: 10,
    position:"absolute",
  },

  other_navbar: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height*0.1,
    backgroundColor: "#b1b1b1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"center",
    top: Dimensions.get("screen").height*0.78,
    zIndex: 10,
    position:"absolute",
  },

  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },


  
});

