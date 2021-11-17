import React from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import { Formik} from 'formik';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Checkbox } from './checkbox2';
import Fifty_states from '../screens/States_dropdown';
import { inlineStyles } from 'react-native-svg';

const fs = require('expo-file-system');

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
              state: [],

          }}
          onSubmit={(values, { resetForm }) => {
              props.navigate("Question 4");
            fs.readAsStringAsync(fs.documentDirectory + "data.json").then(data => {
                const local_data = JSON.parse(data);
                local_data.preferences.location.east = values.east;
                local_data.preferences.location.mid = values.mid;
                local_data.preferences.location.west = values.west;
                local_data.preferences.location.specific = values.state;
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
                  {values.specific == true?  <Fifty_states name="state" setFieldValue={setFieldValue}/>:  null}
                  {values.east != '' || values.mid != '' || values.west != '' || values.specific != ''?
                  <Button buttonStyle={styles.button} onPress={handleSubmit} title="Submit"></Button> :  null}
                  
                   
                   
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