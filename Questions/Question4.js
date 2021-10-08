// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import { Formik, Field, Form } from 'formik';

//if yes, have a drop down or text field for different options
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


const QuestionText = (props) => {
  return(
    <View>
      <h1> {props.question} </h1>
    </View>
  );
}
export function Checkbox(props) {
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

export default Checkbox;