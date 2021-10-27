import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Button, StyleSheet} from 'react-native';
import { styles } from '../Styles';
import { Stack } from "../screens/Stack";
import { Logs } from "../screens/Login";
import { Register_Screen } from "../screens/Register";


import {Q1} from "../Questions/Question1";
import {Q2} from "../Questions/Question2";
import {Q3} from "../Questions/Question3";
import {Q4} from "../Questions/Question4";
import {Q5} from "../Questions/Question5";
import {Q6} from "../Questions/Question6";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const QuestionStack = createNativeStackNavigator();
<QuestionStack.Navigator screenOptions={{headerShown: false}}></QuestionStack.Navigator>

const Welcomescreen = ({ navigation }) => {
  return(
    <SafeAreaView>
      <Button 
        title="Login"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Login')
        }
      />
      <Button 
        title="Register"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Register')
        }
      />
    </SafeAreaView>
  )
}

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Logs/>
      
      <Button 
        title="Log in"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Real App')
        }
      />
    </SafeAreaView>
    
  );
};

const Register = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Register_Screen/>
      <Button 
        title="Go to Questionaire"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Question 1')
        }
      />
    </SafeAreaView>
    
  );
};



const Question1Screen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Q1/>
      <Button 
        title="Go to Question 2"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Question 2')
        }
      />
    </SafeAreaView>
    
  );
};
const Question2Screen = ({navigation}) => {
  return(
    <SafeAreaView>
      <Q2/>
      <Button
        title="Go to Question 3"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Question 3')
        }
      />
    </SafeAreaView>

  );
};

const Question3Screen = ({navigation}) => {
  return(
    <SafeAreaView>
      <Q3/>
      <Button
        title="Go to Question 4"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Question 4')
        }
      />
    </SafeAreaView>

  );
};

const Question4Screen = ({navigation}) => {
  return(
    <SafeAreaView>
      <Q4/>
      <Button
        title="Go to Question 5"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Question 5')
        }
      />
    </SafeAreaView>

  );
};

const Question5Screen = ({navigation}) => {
  return(
    <SafeAreaView>
      <Q5/>
      <Button
        title="Go to Question 6"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Question 6')
        }
      />
    </SafeAreaView>

  );
};

const Question6Screen = ({navigation}) => {
  return(
    <SafeAreaView>
      <Q6/>
      <Button 
        title="Done"
        color='#ff9f7f'
        onPress={() =>
          navigation.navigate('Login')
        }
      />
    </SafeAreaView>

  );
};

const RealApp = () => {
  return(
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
        <QuestionStack.Screen name="Question 6" component={Question6Screen} />
        
        
        
      </QuestionStack.Navigator>
    </NavigationContainer>
  );
}

export default Question;

