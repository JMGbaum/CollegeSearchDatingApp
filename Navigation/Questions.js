import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< Updated upstream
import { SafeAreaView, View, Button, StyleSheet} from 'react-native';
import { styles } from '../Styles';
=======
import { SafeAreaView, View, Button, StyleSheet,Dimensions, Text, TouchableOpacity, Image} from 'react-native';


>>>>>>> Stashed changes
import { Stack } from "../screens/Stack";
import { Logs } from "../screens/Login";
import { Register_Screen } from "../screens/Register";
import Register2 from '../screens/Register_dd'


import {Q1} from "../Questions/Question1";
import {Q2} from "../Questions/Question2";
import {Q3} from "../Questions/Question3";
import {Q4} from "../Questions/Question4";
import {Q5} from "../Questions/Question5";
import {Special_interest} from '../Questions/special_dd';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fifty_states from '../screens/States_dropdown';

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

const Register = ({ navigation}) => {
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


const Question1Screen = ({ navigation, handleSubmit }) => {
  return (
    <SafeAreaView style = {new_styles.checkboxes}>
      <Q1/>
      <Button 
        title="Go to Question 2"
        color='black'
        onPress={(handleSubmit) =>
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

const RealApp = () => {
  return(
    <View style={{flex:1, backgroundColor:"#000000"}}>
<<<<<<< Updated upstream
      <SafeAreaView style={styles.container}>
=======
      
      <SafeAreaView style={new_styles.container}>
      
>>>>>>> Stashed changes
        <View>
          <Stack />
          <StatusBar style="auto" />
        </View>
<<<<<<< Updated upstream
        <View style={styles.navbar}>
          <Button id="likes" title="Likes"></Button>
          <Button id="stack" title="Stack"></Button>
          <Button id="settings" title="Settings"></Button>
=======
        <View style={new_styles.navbar}>
          <Button 
              title="Settings"
              onPress={() =>
                navigation.navigate('Settings')
              }
          />

          <Button title="Stack"
              onPress={() =>
                navigation.navigate('Real App')
              }></Button>

          <Button title="Likes"
              onPress={() =>
                navigation.navigate('Likes')
              }></Button>

>>>>>>> Stashed changes
        </View>
      </SafeAreaView>
    </View>

  );
};

<<<<<<< Updated upstream

=======
const Settings = ({navigation}) => {
  return(
    <SafeAreaView>
      <Settings_Screen/>
      <View style={new_styles.other_navbar}>
        <Button 
              title="Settings"
              onPress={() =>
                navigation.navigate('Settings')
              }
          />
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
        <Button title="Settings"
              onPress={() =>
                navigation.navigate('Settings')
              }></Button>
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

/*
const Like_Button= (props) => {
  return (
    <View>
       <View>
          <TouchableOpacity onPress={() => alert('Pressed')}>
              <Image source={{

              uri: "https://www.emoji.com/wp-content/uploads/2018/12/emoji-icon-glossy-01-08-person-emotion-red-heart-72dpi-forPersonalUseOnly.png" }}
              style={new_styles.like_button}
              />
          </TouchableOpacity >
      </View>
    </View>
  )
}
*/

>>>>>>> Stashed changes
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
        
        
        
      </QuestionStack.Navigator>
    </NavigationContainer>
  );
}

export default Question;

const new_styles = StyleSheet.create({
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
<<<<<<< Updated upstream
  }
=======
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

  like_button:{
    width: 100,
    height: 100,
    backgroundColor: 'cyan',
    position:"absolute",
    top: Dimensions.get("screen").height*0.78,
    
  
  
  },
>>>>>>> Stashed changes
  
});

