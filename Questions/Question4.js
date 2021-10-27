// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

//start time: 8:20-9:20, 9:00-9:33
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

import { Checkbox } from './checkbox2';


//add drop down 

export const Q4 = (props) => {
  return (
    <SafeAreaView>
      <Text> Are you looking for a special interest school? </Text>
      <Text>Example: Historically Black Colleges, Ivy Leagues, Art Colleges, etc?</Text>
        <Formik
          initialValues={{
              Special_Interest: false,
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
                      name={"Special_Interest"}
                      isChecked={values?.Special_Interest}
                      setFieldValue={setFieldValue}
                  >
                      Click for Special Interest
                  </Checkbox>
                  <Button onPress={handleSubmit} title="Submit"></Button>
              </View>
          )}
      </Formik>
    </SafeAreaView>
    
      
  )
}
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