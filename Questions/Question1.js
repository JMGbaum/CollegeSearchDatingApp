// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

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
/*
const QuestionText = (props) => {
  return(
    <View>
      <Text> {props.question} </Text>
    </View>
  );
}
export function Q1(props) {
  return(
    <SafeAreaView style={styles.container}>
    <QuestionText
      question = "2 or 4 Year School"/>
    <Formik
    initialValues={{ answered: [] }}
    onSubmit={async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    }}
    >
    
    {({ values }) => (
      <Form>
        <View id="checkbox-group"> </View>
        <View role="group" aria-labelledby="checkbox-group">
        <label>
          <Field type="checkbox" name="answered" value="2" />
          Two
        </label>
        <label>
          <Field type="checkbox" name="answered" value="4" />
         Four
        </label>
        <View>Answered: {values.answered}</View>
      </View>
    <button onPress={handleSubmit} title="Submit"/>
    
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
export default Q1;