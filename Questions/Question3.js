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
                  {values.specific == true?  <Fifty_states/>:  null}
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

/*
const QuestionText = (props) => {
  return(
    <View>
      <h1> {props.question} </h1>
    </View>
  );
}
export function Q3(props) {
  return(
    <SafeAreaView style={styles.container}>
    <QuestionText
      question = "Where would you like for the school to be located (in USA): "/>
    <Formik
    initialValues={{ answered: [] }}
    onSubmit={async (values) => {
      await sleep(500);
      JSON.stringify(values, null, 2);
    }}
    >
    
    {({ values }) => (
      <Form>
        <View id="checkbox-group"> </View>
        <View role="group" aria-labelledby="checkbox-group">
        <label>
          <Field type="checkbox" name="answered" value="East Coast" />
          East Coast
        </label>
        <label>
          <Field type="checkbox" name="answered" value="West Coast" />
          West Coast
        </label>
        <label>
          <Field type="checkbox" name="answered" value="Midwest" />
          Midwest
        </label>
        <label htmlFor="state">Specific State: </label>
        <Field id="stateName" name="stateName" placeholder="Maryland" />
        <View>Answered: {values.answered}</View>
      </View>
    <button type="submit">Submit</button>
    
  </Form>
  )}
  </Formik>
</SafeAreaView>
  ); 
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexible
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

*/
export default Q3;