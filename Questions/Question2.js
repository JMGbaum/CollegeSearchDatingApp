// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

import { Checkbox } from './checkbox2';


export const Q2 = (props) => {
  return (
    <SafeAreaView>
      <Text style = {styles.title_text}> Prefered Student Body Size: </Text>
        <Formik
          initialValues={{
              small: false,
              medium: false,
              large: false,
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
                      name={"small"}
                      isChecked={values?.small}
                      setFieldValue={setFieldValue}
                  >
                      <Text style = {styles.text}>Less than 5,000 students</Text> 
                  </Checkbox>
                  <Checkbox 
                      name={"medium"}
                      isChecked={values?.medium}
                      setFieldValue={setFieldValue}
                  >
                      <Text style = {styles.text}>Between 5,000 and 15,000</Text> 
                  </Checkbox>
                  <Checkbox 
                      name={"large"}
                      isChecked={values?.large}
                      setFieldValue={setFieldValue}
                  >
                       <Text style = {styles.text}> Greater than 15,000</Text> 
                  </Checkbox>
                  {values.small != '' || values.medium != '' || values.large != ''? 
                  <Button onPress={handleSubmit} title="Submit"></Button> :  null}
                  
              </View>
          )}

      </Formik>
    </SafeAreaView>
    
      
  )
}

const styles = StyleSheet.create({
  title_text:{
    fontSize: 25,
    height: 50,
    alignItems: 'center',
  },
  text:{
    fontSize: 15,
    alignItems: 'center',
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
export function Q2(props) {
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

export default Q2;