import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Formik, Field, Form } from 'formik';


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
      question = "Are you looking for a specific program or major?"/>
    <h2>Example: BFA programs, Conservatories, Schools with Pre-med</h2>
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
          <Field type="radio" name="answered" value="Yes"/>
          Yes
        </label>
        <label>
          <Field type="radio" name="answered" value="No" />
          No
        </label>
        <View>Answered: {values.answered}</View>
      </View>
    <button type="submit"> Submit </button> 
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