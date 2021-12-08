// Formik x React Native example
import React from 'react';
import {TextInput, SafeAreaView, Text, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import {Register2} from './Register_dd';
import * as yup from 'yup'
import { Button } from 'react-native-elements';

const fs = require("expo-file-system");

const loginvalid = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is Required'),
    first: yup
      .string()
      .required('First Name is Required'),
    last: yup
      .string()
      .required('Last Name is Required'),
})


export const Register_Screen = (props) => (
  <Formik
    validationSchema={loginvalid}
    initialValues={{ first: '', last: '', email: '', password: '', class_year: '' }}
    onSubmit={(values) => {
      fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
        const local_data = JSON.parse(data);
        local_data.account = values;
        fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(local_data));
      });
      props.navigate('Question 1');
  }}
  >
    
    {({ handleChange, handleBlur, handleSubmit, errors, isValid, values, setFieldValue }) => (
      <SafeAreaView style = {styles.loginContainer}>
        <TextInput style = {styles.textInput}
          name="first"
          placeholder="First Name"
          onChangeText={handleChange('first')}
          onBlur={handleBlur('first')}
          value={values.first}
        />
        {errors.first &&
                  <Text style={styles.errorText}>{errors.first}</Text>}

        <TextInput style = {styles.textInput}
          name="last"
          placeholder="Last Name"
          onChangeText={handleChange('last')}
          onBlur={handleBlur('last')}
          value={values.last}
        />
        {errors.last &&
                  <Text style={styles.errorText}>{errors.last}</Text>}

        <TextInput style = {styles.textInput}
          name="email"
          placeholder="Email Address"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
        />
        {errors.email &&
                  <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput style = {styles.textInput}
            name="password"
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
        />
        {errors.password &&
                  <Text style={styles.errorText}>{errors.password}</Text>
                }
        
       {values.email != '' && values.password != '' && values.first != '' && values.last != ''?  <Register2 name="class_year" setFieldValue={setFieldValue}/>
        :  null}

      <Button 
      buttonStyle={styles.button}
      onPress={handleSubmit} 
      title="Register" 
      disabled={!isValid}> </Button>
       
      </SafeAreaView>
    )}
  </Formik>
);

const styles = StyleSheet.create({

  loginContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#9BD1D1',
    //justifyContent: 'center',
  },
  button:{
    backgroundColor: '#ff9f7f',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 350,
  },
  textInput: {
    height: 40,
    width: '80%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: '#ff9f7f',
    //justifyContent: 'center',
    //borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1.5,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
})