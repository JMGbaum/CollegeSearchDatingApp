// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';
const fs = require('expo-file-system');

//start time: 8:20-9:20, 9:00-9:33
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

import { Checkbox } from './checkbox2';

export const Q1 = (props) => {
  return (
    <SafeAreaView >
      <Text style = {styles.title_text}> 2 or 4 year school</Text>
        <Formik
          initialValues={{
              two_year: false,
              four_year: false,
          }}
          onSubmit={(values, { resetForm }) => {
              fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
                  const local_data = JSON.parse(data);
                  local_data.preferences.program_length = values;
                  fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(local_data));
              });
              console.log(values);
          }}
      >
          {({
              handleChange,
              handleSubmit,
              values,
              setFieldValue
          }) => (
              <View >
                  <Checkbox 
                      name={"two_year"}
                      isChecked={values?.two_year}
                      setFieldValue={setFieldValue}
                  >
                      <Text  style = {styles.text}>2 year school</Text>
                  </Checkbox>
                  <Checkbox 
                      name={"four_year"}
                      isChecked={values?.four_year}
                      setFieldValue={setFieldValue}
                  >
                      <Text  style = {styles.text}>4 year school</Text>
                  </Checkbox>
                  {values.two_year != '' || values.four_year != ''?  <Button onPress={handleSubmit} title="Submit"></Button> :  null}
                  
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
  }
})
export default Q1;