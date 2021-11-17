// Formik x React Native example
import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik} from 'formik';
import { Button } from 'react-native-elements/dist/buttons/Button';
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
              props.navigate("Question 4");
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
                  <Button 
                  buttonStyle={styles.button}
                  onPress={handleSubmit} title="Submit"></Button> 
                  
                   
                   
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
  },
  
})


export default Q3;