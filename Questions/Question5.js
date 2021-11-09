// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

//start time: 8:20-9:20, 9:00-9:33
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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