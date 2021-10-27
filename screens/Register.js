// Formik x React Native example
import React from 'react';
import { Button, TextInput, SafeAreaView, Text, StyleSheet} from 'react-native';
import { Formik } from 'formik';
import Register2 from '../screens/Register_dd'

export const Register_Screen = props => (
  <Formik
    initialValues={{ first: '', last: '', email: '', password: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <SafeAreaView style = {styles.loginContainer}>
        <TextInput style = {styles.textInput}
          name="first"
          placeholder="First Name"
          onChangeText={handleChange('first')}
          onBlur={handleBlur('first')}
          value={values.first}
        />
        <TextInput style = {styles.textInput}
          name="last"
          placeholder="Last Name"
          onChangeText={handleChange('last')}
          onBlur={handleBlur('last')}
          value={values.last}
        />
        <TextInput style = {styles.textInput}
          name="email"
          placeholder="Email Address"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
        />
        <TextInput style = {styles.textInput}
            name="password"
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
        />
        <Text>What year are you?</Text>
        <Register2/>
        <Button onPress={handleSubmit} title="Submit" />
      </SafeAreaView>
    )}
  </Formik>
);

const styles = StyleSheet.create({

  loginContainer: {
    //width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#9BD1D1',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})