import React from 'react';
import { View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik} from 'formik';
import { Button } from 'react-native-elements';

import { Checkbox } from './checkbox2';

const fs = require('expo-file-system');

export const Q1 = (props) => {
  return (
    <SafeAreaView>
      <Text style = {styles.title_text}> 2 or 4 year school</Text>
        <Formik
          initialValues={{
              two_year: false,
              four_year: false,
          }}
          onSubmit={(values, { resetForm }) => {
              fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
                  const local_data = JSON.parse(data);
                  local_data.preferences.program_length = values;
                  fs.writeAsStringAsync(fs.documentDirectory + "data.json", JSON.stringify(local_data));
              });
              console.log(values);
              props.navigate("Question 2");
          }}
      >
          {({
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
                  <Button 
                  buttonStyle={styles.button}
                  onPress={handleSubmit} 
                  title="Submit"></Button> 
                  
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
  button:{
    backgroundColor: '#ff9f7f',
    margin: 20,
    padding: 10,
    alignItems: 'center',
    flexDirection: "row",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 350,
  },
  text:{
    fontSize: 20,
    alignItems: 'center',
  }
})
export default Q1;