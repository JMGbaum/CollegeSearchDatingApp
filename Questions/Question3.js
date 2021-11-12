// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

//start time: 8:20-9:20, 9:00-9:33
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

import { Checkbox } from './checkbox2';

import Fifty_states from '../screens/States_dropdown';
import { inlineStyles } from 'react-native-svg';


//add drop down 

export const Q3 = (props) => {
  return (
    
    <SafeAreaView style = {inlineStyles.loginContainer}>
      <Text > Where would you like for the school to be located (in USA): </Text>
        <Formik
          initialValues={{
              east: false,
              mid: false,
              west: false,
              specific: false,
              state: [],

          }}
          onSubmit={(values, { resetForm }) => {
              console.log(values);
          }}
      >
          {({
              handleChange,
              handleSubmit,
              values,
              setFieldValue
          }) => (
              <View>
                  <Checkbox 
                      name={"east"}
                      isChecked={values?.east}
                      setFieldValue={setFieldValue}
                  >
                      East Coast
                  </Checkbox>
                  <Checkbox 
                      name={"mid"}
                      isChecked={values?.mid}
                      setFieldValue={setFieldValue}
                  >
                      Midwest 
                  </Checkbox>
                  <Checkbox 
                      name={"west"}
                      isChecked={values?.west}
                      setFieldValue={setFieldValue}
                  >
                      West Coast
                  </Checkbox>
                  <Checkbox 
                      name={"specific"}
                      isChecked={values?.specific}
                      setFieldValue={setFieldValue}
                  >
                      Specific State
                  </Checkbox>
                  {values.specific == true?  <Fifty_states name="state" setFieldValue={setFieldValue}/>:  null}
                  {values.east != '' || values.mid != '' || values.west != '' || values.specific != ''?
                  <Button onPress={handleSubmit} title="Submit"></Button> :  null}
                  
                   
                   
              </View>
          )}
      </Formik>
    </SafeAreaView>
    
      
  )
}
const styles = StyleSheet.create({
  title_text:{
    fontSize: 30,
    height: 50,
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    alignItems: 'center',
  },
  
})


export default Q3;