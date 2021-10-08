// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import { Formik, Field, Form } from 'formik';

//start time: 8:20-9:20, 9:00-9:33
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
      question = "Prefered Student Body Size: "/>
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
          <Field type="checkbox" name="answered" value="<5000 students" />
          Small
        </label>
        <label>
          <Field type="checkbox" name="answered" value="5000 < school < 15,000" />
          Medium 
        </label>
        <label>
          <Field type="checkbox" name="answered" value=">15,000 students" />
          Large 
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