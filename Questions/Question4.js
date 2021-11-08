// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

//start time: 8:20-9:20, 9:00-9:33
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

import { Checkbox } from './checkbox2';
import {Special_interest} from './special_dd';
import {Religious} from './religious_dd';

//add drop down 

export const Q4 = (props) => {
  return (
    <SafeAreaView >
      <Text style = {styles.title_text}>Are you looking for a special interest school? </Text>
      <Text style = {styles.text}>Ex: Historically Black Colleges, Ivy Leagues</Text>
        <Formik
          initialValues={{
              Interests: false,
              Religious_interest: false,
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
                      name={"Interests"}
                      isChecked={values?.Interests}
                      setFieldValue={setFieldValue}
                  >
                    <Text style={styles.text}>Click for Special Interest</Text>
                  </Checkbox>
                  <Checkbox 
                      name={"Religious_interest"}
                      isChecked={values?.Religious_interest}
                      setFieldValue={setFieldValue} 
                  >
                    <Text style={styles.text}>Click for Religious Affliation</Text>
                 
                  </Checkbox>
                  {values.Interests != false?  <Special_interest/>:  null}
                  {values.Religious_interest != false?  <Religious/>:  null}
                
                  
                  <Button onPress={handleSubmit} title="Submit"></Button> 
              </View>
          )}
      </Formik>
    </SafeAreaView>
    
      
  )
}

const styles = StyleSheet.create({
  title_text:{
    fontSize: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
/*
const QuestionText = (props) => {
  return(
    <View>
      <h1> {props.question} </h1>
    </View>
  );
}
export function Q4(props) {
  return(
    <SafeAreaView style={styles.container}>
    <QuestionText
      question = "Are you looking for a special interest school?"/>
    <h2>Example: Historically Black Colleges, Ivy Leagues, Art Colleges, etc?</h2>
    <Formik
    initialValues={{ answered: [] }}
    onSubmit={async (values) => {
      await sleep(500);
      JSON.stringify(values, null, 2);
    }}
    >
    
    {({ values }) => (
      <Form>
        <View id="my-radio-group"> </View>
        <View role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name="answered" value="Yes" />
          Yes
        </label>
        <label>
          <Field type="radio" name="answered" value="No" />
          No
        </label>
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

export default Q4;