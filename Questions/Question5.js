// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

//start time: 8:20-9:20, 9:00-9:33
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fs = require('expo-file-system');

import { Checkbox } from './checkbox2';


//add drop down 

export const Q5 = (props) => {
  return (
    <SafeAreaView>
      <Text style={styles.title_text}>Are you looking for a specific program or major? </Text>
      <Text>Example: BFA programs, Conservatories, Schools with Pre-med</Text>
        <Formik
          initialValues={{
              program: false,
          }}
          onSubmit={(values, { resetForm }) => {
            fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
              const local_data = JSON.parse(data);
              local_data.preferences.program = values.program;
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
              <View>
                  <Checkbox 
                      name={"program"}
                      isChecked={values?.program}
                      setFieldValue={setFieldValue}
                  >
                      Click for Specific Program
                  </Checkbox>
                  <Button onPress={handleSubmit} title="Submit"></Button>
              </View>
          )}
      </Formik>
    </SafeAreaView>
    
      
  )
}

const styles = StyleSheet.create({
  title_text:{
    fontSize: 19.5,
    height: 30,
    alignItems: 'center',
  },
  text:{
    fontSize: 15,
    height: 60,
    alignItems: 'center',
  }
})

export default Q5;