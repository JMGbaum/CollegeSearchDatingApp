// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik, Field, Form } from 'formik';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const fs = require('expo-file-system');

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
            fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
              const local_data = JSON.parse(data);
              local_data.preferences.student_body_size = values;
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

export default Q2;