// Formik x React Native example
import React from 'react';
import { TextInput, SafeAreaView, StyleSheet,Text} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button } from 'react-native-elements';

const loginvalid = yup.object().shape({
  email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email Address is Required'),
  password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is Required')
})

export const Logs = props => (
  <Formik
    validationSchema={loginvalid}
    initialValues={{ email: '', password: '' }}
    onSubmit={(values) => {
      props.navigate('Real App');
  }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, logged}) => (
      <SafeAreaView style = {styles.loginContainer}>
        <TextInput style = {styles.textInput}
          name="email"
          placeholder="Email Address"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          keyboardType="email-address"
        />
        {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
        <TextInput style = {styles.textInput}
            name="password"
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
        />
        {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
       <Button 
       
        type="clear"
        title="Register"
        color='black'
        onPress={() =>
          props.navigate('Register')
        }
      />
        <Button
         buttonStyle={styles.button}
         onPress={handleSubmit}
         title="Log In"
         disabled={!isValid}
         submitted= {logged}
       />
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
  },
  button:{
    backgroundColor: '#ff9f7f',
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
    borderWidth: 1.5,
    borderRadius: 10,
  },
})